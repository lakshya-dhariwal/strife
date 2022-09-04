import React, { useEffect, useState } from "react";
import ContestCard from "../components/ContestCard";
import { getAllContests } from "../services";

function Contests() {
  const [contests, setContests] = useState<any>();
  const allContests = async () => {
    const data = await getAllContests();
    console.log({ data });
    setContests(data);
  };
  useEffect(() => {
    allContests();
  }, []);
  return (
    <>
      <div className="w-[50vw] mx-auto">
        <div className="flex justify-around items-center w-full"></div>
      </div>
      <div className=" grid grid-cols-4 m-3 gap-5">
        {contests?.map((contest: any) => {
          return <ContestCard {...contest} />;
        })}
      </div>
    </>
  );
}

export default Contests;
