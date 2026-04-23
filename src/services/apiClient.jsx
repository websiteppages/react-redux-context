import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});


//API request போகும் முன் token automaticஆ add பண்ணும் system தான் interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

//Why use this?
  //👉 இல்லனா:
  //❌ every API call-ல manual token add பண்ணணும்
