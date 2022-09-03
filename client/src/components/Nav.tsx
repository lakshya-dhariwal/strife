import React, { useState } from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import { Button } from "@cred/neopop-web/lib/components";
const Nav: React.FC = () => {
  return (
    <div className="p-2 flex justify-between px-3 items-center">
      <h1>
        {/* <Typography {...FontVariant.HeadingBold28} color={colorPalette.white}> */}
        <h1 className="tetx-white text-[28px]">Strif3</h1>
        {/* </Typography> */}
      </h1>
      <Button
        variant="secondary"
        kind="elevated"
        size="medium"
        colorMode="light"
        onClick={() => {
          console.log("I'm clicked");
        }}
        showArrow
      >
        Lets Play
      </Button>
    </div>
  );
};

export default Nav;
