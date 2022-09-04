// @ts-nocheck
import React from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";

function Home() {
  return (
    <div>
      <h1 className="">Play to earn contests</h1>
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
  );
}

export default Home;
