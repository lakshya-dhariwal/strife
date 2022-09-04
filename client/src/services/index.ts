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

export const updateScore = async (
  contest_id: string,
  walletAddress: string,
  score: number,
  name: string
) => {
  const data = await axios.put(`${API}/leaderboard/update-score`, {
    contest_id,
    walletAddress,
    score,
    name,
  });
  return data;
};

export const getLeaderboard = async (id: string) => {
  const data = await axios.get(`${API}/leaderboard/${id}`);
  return data;
};

export const getWins = async () => {
  // const data = await axios.get(`${API}/leaderboard/get-all-wins`);
  // console.log(data);
  const res = [
    {
      address: "adrrss",
      contest: "pacman",
      contest_id: "ox4GHa",
    },
    {
      address: "adrrss",
      contest: "Poker",
      contest_id: "zLaobg",
    },
  ];
  return res;
};
