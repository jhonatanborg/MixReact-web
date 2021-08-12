import axios from "axios";
const api = axios.create({
  baseURL: "https://api.flowrish.com.br/",
  headers: {
    "Abp.TenantId": "17",
  },
});
export default api;
