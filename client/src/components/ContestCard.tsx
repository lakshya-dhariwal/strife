import React from "react";
import {
  ElevatedCard,
  Button,
  Typography,
} from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";

const ContestCard: React.FC<{
  contestName: string;
  contestId: string;
  comingSoon?: boolean;
  timestamp: number;
}> = ({ contestName, contestId, comingSoon, timestamp }) => {
  return (
    <ElevatedCard
      edgeColors={{
        bottom: colorPalette.popWhite[100],
        right: colorPalette.popWhite[300],
      }}
      style={{
        width: "300px",
      }}
    >
      <div className="flex flex-col w-full h-full  items-center border-t-[1px] border-l-[1px] py-3">
        <Typography
          {...FontVariant.HeadingBold28}
          fontSize={18}
          color={colorPalette.neoPaccha[500]}
        >
          {contestName}
        </Typography>
        <h3 className="text-[16px]">Ends in 12:34:33</h3>
        <h3>1 $MATIC</h3>
        <div className="mt-1 flex flex-col ">
          <Button
            variant="secondary"
            kind="flat"
            size="medium"
            colorMode="light"
            fullWidth
            style={{ margin: " 0.5rem 0rem" }}
            onClick={() => {
              console.log("I'm clicked");
            }}
          >
            View LeaderBoard
          </Button>
          <Button
            variant="secondary"
            kind="elevated"
            size="medium"
            colorMode="light"
            onClick={() => {
              console.log("I'm clicked");
            }}
            fullWidth
            style={{ margin: " 0.5rem 0rem" }}
          >
            Join Contest
          </Button>
        </div>
      </div>
    </ElevatedCard>
  );
};

export default ContestCard;
