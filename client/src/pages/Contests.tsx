import { Button, Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
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

      <Typography
        {...FontVariant.HeadingBold28}
        color={colorPalette.neoPaccha[500]}
        fontSize={24}
        style={{ margin: " 0.25rem 0.2rem 1rem 6rem " }}
      >
        All Contests
      </Typography>
      <div className=" grid grid-cols-4 m-3 gap-5">
        {contests?.map((contest: any) => {
          return <ContestCard {...contest} />;
        })}
      </div>
      <Button
        variant="secondary"
        kind="elevated"
        size="medium"
        colorMode="light"
        fullWidth
        style={{ margin: " 1rem 0.2rem 0.25rem 0.2rem " }}
        onClick={() => {
          alert("Coming Soon");
        }}
        showArrow
      >
        Submit your own challenge
      </Button>
    </>
  );
}

export default Contests;
