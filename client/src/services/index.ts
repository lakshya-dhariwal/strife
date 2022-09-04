import axios from "axios";
import { API } from "../config";

export const getAllContests = async () => {
  const data = await axios.get(`${API}/contests/all`);
  return data?.data;
};

export const joinContest = async (id: string) => {
  const data = await axios.get(`${API}/contests/join/${id}`);
  return data;
};
