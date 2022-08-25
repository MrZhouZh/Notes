import fs from "fs";

/**
 * 解析请求参数
 * @param {string} query
 * @returns {object}
 */
export function parse(query) {
  let result = {};
  query.split("&").reduce((res, item) => {
    const [key, value] = item.split("=");
    res[key] = decodeURIComponent(value);
    return res;
  }, result);

  return result;
}

/**
 * 解析post请求参数
 * @param {object} req
 * @returns Promise
 */
export function bodyParser(req) {
  return new Promise(resolve => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      let response;
      try {
        response = JSON.parse(data);
      } catch (error) {
        response = parse(data);
      }
      resolve(response);
    });
  });
}

export function findPath(dir) {
  let url = dir + ".js";
  if (fs.existsSync(url)) {
    return {
      url,
      type: "js",
    };
  }

  url = dir + ".json";
  if (fs.existsSync(url)) {
    return {
      url,
      type: "json",
    };
  }

  url = dir + "/index.js";
  if (fs.existsSync(url)) {
    return {
      url,
      type: "js",
    };
  }

  url = dir + "/index.json";
  if (fs.existsSync(url)) {
    return {
      url,
      type: "json",
    };
  }

  return undefined;
}

/**
 * 延时
 * @param {number} time
 * @returns Promise
 */
export function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

/**
 * 随机生成最大最小之间的值
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns
 */
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
