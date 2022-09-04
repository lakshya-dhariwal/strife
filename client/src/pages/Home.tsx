// @ts-nocheck
import React from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import Contests from "./Contests";

function Home() {
  return (
    <div>
      <div className="flex flex-row w-[50vw] mx-auto justify-around ">
        <div className="">
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
        </div>
      </div>
      <div className="text-center mt-20 mb-5">
        {" "}
        <Typography
          color={colorPalette.success[400]}
          fontSize={30}
          fontWeight={700}
        >
          Participate in time based contests and get a chance to win the pool
          money.
        </Typography>
      </div>

      <Contests />
    </div>
  );
}

export default Home;
