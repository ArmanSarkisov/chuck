import axios from './axios-instance';

const requestType = ['post', 'put', 'patch', 'option'];
const request = async (method = 'get', endpoint, data = {}, config = null) => {
  if (requestType.includes(method)) {
    return axios[method](endpoint, data, config);
  }
  return axios[method](endpoint, config);
};

export default request;
