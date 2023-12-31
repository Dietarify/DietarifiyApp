import axios from "axios";
import auth from "@react-native-firebase/auth";

const http = axios.create({
  baseURL: "https://api.dietarify.bayusamudra.my.id/",
});

http.interceptors.request.use(async (config) => {
  const user = auth().currentUser;

  if (user) {
    const token = await user.getIdToken(true);
    config.headers.Authorization = `Bearer ${token}`;
    console.log("token aadlah", token);
  }

  return config;
});

export default http;
