import axios from "axios";
import { API } from "../config";
export const getAllContests = async () => {
  const data = await axios.get(`${API}/contests/all`);
  return data?.data;
  //   return [
  //     {
  //       _id: "6313183bbc226d9cb42f6fee",
  //       contest_id: "dc19d5ac-8806-4d81-af9e-1e125089b1ce",
  //       contest_name: "pacman",
  //       contest_start_timestamp: 1662195837,
  //       contest_end_timestamp: 1662199437,
  //       participants: [
  //         { walletAddress: "", score: 10 },
  //         { walletAddress: "", score: 10 },
  //       ],
  //       contest_status: true,
  //     },
  //     { _id: "63131f9bd83775457ef151f1", hello: "world", contest_status: false },
  //   ];
};
