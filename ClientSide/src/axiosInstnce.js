import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: "http://localhost:9000/api",
  timeout: 5000,
  timeoutErrorMessage: "Timeout! try after some time",
});

export default axiosInstance;
