import React, { useState } from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <div className="p-2 flex justify-between px-3 items-center">
      <h1>
        {/* <Typography {...FontVariant.HeadingBold28} color={colorPalette.white}> */}
        <h1 className="text-[#6A35FF]  text-[30px] roboto">Strife</h1>
        {/* </Typography> */}
      </h1>
      <ul className="flex items-center ">
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/contests">Contests</a>
        </li>
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/wins">Wins</a>
        </li>
      </ul>
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
