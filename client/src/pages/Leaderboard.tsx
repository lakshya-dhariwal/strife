import React from "react";
import { useParams } from 'react-router-dom';

function Leaderboard() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Leaderboard;
