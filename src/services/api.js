import axios from "axios";

const api = axios.create({
  baseURL: "https://api.punkapi.com/v2/beers/",
  responseType: "json",
});

export const getBeverages = () => api.get().then((response) => response.data);
