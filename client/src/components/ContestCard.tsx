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
          fontSize={20}
          color={colorPalette.neoPaccha[500]}
          style={{ margin: " 0rem 0rem 1rem 0rem" }}
        >
          {contestName}
        </Typography>
        <div className="">
          <h3 className="flex items-center  m-1">
            <img src="/images/clock.svg" className="pr-2" /> 12:22:44 Time Left
          </h3>
          <h3 className="flex items-center m-1">
            <img src="/images/ticket.svg" className="pr-2" /> Enter for 1 $MATIC
          </h3>
        </div>
        <div className="mt-1 flex flex-col w-[90%]">
          <Button
            variant="secondary"
            kind="elevated"
            size="medium"
            colorMode="light"
            fullWidth
            style={{ margin: " 0.25rem 0rem" }}
            onClick={() => {
              console.log("I'm clicked");
            }}
          >
            <div className="flex  mx-auto">
              <img src="/images/leaderboard.svg" className="pr-2" />
              <> LeaderBoard</>
            </div>
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
            style={{ margin: " 0.25rem 0rem 0.1rem 0rem" }}
          >
            <div className="flex  mx-auto">
              <img src="/images/eth.svg" className="pr-2" /> <>Join Contest</>
            </div>
          </Button>
        </div>
      </div>
    </ElevatedCard>
  );
};

export default ContestCard;
