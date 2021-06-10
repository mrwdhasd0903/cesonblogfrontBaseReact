import axios from './axios'

axios.interceptors.request.use((config) => {
  console.log('拦截');
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  console.log('响应拦截1🌹', response);
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axios