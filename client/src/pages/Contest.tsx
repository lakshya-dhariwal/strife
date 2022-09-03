import React from "react";
import { useParams } from "react-router-dom";

function Contest() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Contest;
