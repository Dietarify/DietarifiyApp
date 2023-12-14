import axios from "axios";

const http = axios.create({
  baseURL: "https://api.dietarify.bayusamudra.my.id/",
});

export default http;
