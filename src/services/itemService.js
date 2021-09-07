import axios from "axios";

export const clientHttp = axios.create({
  baseURL: "https://dl5mns5bwg.execute-api.eu-central-1.amazonaws.com",
  timeout: 60000,
});
export const getItems = async () => {
  return  clientHttp.get(`/prod`);
};
