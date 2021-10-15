// 枚举
export const AXIOS_METHOD_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

/** 方法说明
 * @method request
 * @param api 请求相对地址
 * @param method 请求方法，默认get
 * @param params 请求参数 默认为空
 * @param config 请求配置 默认为空
 * @return function 返回axios实例
 */
const request = (
  api,
  method = AXIOS_METHOD_TYPE.GET,
  params = {},
  config = {}
) => {
    method = method.toLocaleUpperCase();
    // get请求放在params中，其他请求放在body
    const data = method === 'GET' ? 'params' : 'data';
    // 这部分也可以放到defaults中去设置
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    };
    if (config.headers) {
        headers = {
          ...headers,
          ...config.headers
        };
    }
    return axios({
        url: api,
        method,
        [data]: params,
        headers
    });
};

export default request;
