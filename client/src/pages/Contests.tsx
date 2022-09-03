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
        <div className="flex justify-around items-center w-full">
          {/* <div className="">
            <Typography
              color={colorPalette.error[400]}
              fontSize={30}
              fontWeight={700}
              fontType={FontVariant.body}
            >
              Compete.
            </Typography>
          </div>
          <div className="">
            <Typography
              color={colorPalette.warning[400]}
              fontSize={30}
              fontWeight={700}
            >
              Win.
            </Typography>
          </div>
          <div className="">
            <Typography
              color={colorPalette.success[400]}
              fontSize={30}
              fontWeight={700}
            >
              Earn.
            </Typography>
          </div> */}
        </div>
      </div>
      <div className=" grid grid-cols-4 m-3 gap-5">
        <ContestCard contestName="PacMan" contestId="" timestamp={0} />
        <ContestCard
          contestName="Coding Challenge"
          comingSoon
          contestId="1"
          timestamp={0}
        />
        <ContestCard contestName="PacMan" contestId="" timestamp={0} />
        <ContestCard
          contestName="Coding Challenge"
          comingSoon
          contestId="2"
          timestamp={0}
        />
        <ContestCard contestName="PacMan" contestId="" timestamp={0} />
        <ContestCard
          contestName="Coding Challenge"
          comingSoon
          contestId="3"
          timestamp={0}
        />
        <ContestCard contestName="PacMan" contestId="" timestamp={0} />
        <ContestCard
          contestName="Coding Challenge"
          comingSoon
          contestId="4"
          timestamp={0}
        />
      </div>
    </>
  );
}

export default Contests;
