import { QueryClient } from "react-query";
import axios from "axios";
import { API_URL } from "./constants";

export const queryClient = new QueryClient();
export const api = axios.create({
  baseURL: API_URL,
});
