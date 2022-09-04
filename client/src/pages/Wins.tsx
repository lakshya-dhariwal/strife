import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import React from "react";
import { getWins } from "../services";
const Wins = () => {
  const [wins, setWins] = React.useState<any>(null);
  const winsData = async () => {
    // const data = getWins();
    // setWins(data);
  };
  return (
    <div>
      <Typography
        {...FontVariant.HeadingBold28}
        color={colorPalette.neoPaccha[500]}
        fontSize={24}
        style={{ margin: " 0.25rem 0.2rem 1rem 6rem " }}
      >
        Your Wins
      </Typography>
      {!wins && (
        <>
          {" "}
          <Typography
            {...FontVariant.HeadingBold28}
            color={colorPalette.poliPurple[500]}
            fontSize={18}
            style={{ margin: " 0.25rem 0.2rem 1rem 6rem " }}
          >
            No wins so far. Join contests and play for a chance to win rewards.
          </Typography>
        </>
      )}
    </div>
  );
};
export default Wins;
