import { bodyParser, parse, findPath, delay, getRandom } from "./util";

const config = {
  moduleName: "home",
  dir: "/src/components",
  pattern: "/mock/*",
  delay: [0, 100],
};

export default function useMiddleware(opts = {}) {
  const options = {
    ...config,
    ...opts,
  };
  //
  const pattern = new RegExp(`^${options.pattern}(.*)`);
  const dir = process.cwd() + options.dir + "/" + options.moduleName + "/mock";
  const minDelayTime = options.delay[0] || 0;
  const maxDelayTime = options.delay[1] || 0;

  return async (req, res, next) => {
    req.setEncoding("utf8");
    // 判断是否是ajax请求或文件上传
    // const isHttp = req.headers["x-requested-with"] === "XMLHttpRequest";
    const isUpload =
      req.headers["Content-Type"] &&
      req.headers["Content-Type"].includes("multipart/form-data");
    if (req.url) {
      const match = pattern.exec(req.url);
      const method = req.method && req.method.toLowerCase();
      if (match && !req.url.includes("/remote")) {
        res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
        if (method === "post") {
          if (req.body === undefined && !isUpload) {
            const body = await bodyParser(req);
            req.body = body;
          }
        }

        const [mockPath, query = ""] = match[0].split("?");
        // 挂载 path, query 参数
        if (req.path === undefined) {
          req.path = mockPath;
        }
        if (req.query == undefined && !isUpload) {
          req.query = parse(query);
        }

        const localMockFile =
          `${method.toLocaleUpperCase()}` +
          mockPath.substring(mockPath.lastIndexOf("/"));
        // 真实 mock 文件地址
        const mock = findPath(`${dir}/${localMockFile}`);
        if (mock) {
          // 删除缓存
          delete require.cache[mock.url];

          let data,
            delayTime = getRandom(minDelayTime, maxDelayTime);

          try {
            console.log(
              `>>> 请求接口地址为: ${method.toLocaleUpperCase()} ${mockPath}`
            );
            console.log(`>>> 匹配到本地文件为: ${mock.url}`);
            data = require(mock.url);
          } catch (error) {
            console.log(error);
          }

          await delay(delayTime);
          res.end(JSON.stringify(data));
        } else {
          // 没找到mock数据
          res.end(
            JSON.stringify({
              success: false,
              desc: "未找到 mock 路由",
            })
          );
        }
      } else {
        next();
      }
    } else {
      next();
    }
  };
}
