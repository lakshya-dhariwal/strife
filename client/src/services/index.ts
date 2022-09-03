import axios from "axios";
import { API } from "../config";
export const getAllContests = async () => {
  const data = await axios.get(`${API}/contests/all`);
  return data?.data;
};
