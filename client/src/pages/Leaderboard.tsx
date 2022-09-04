// @ts-nocheck
import {
  ElevatedCard,
  Typography,
  ScoreMeter,
} from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import React from "react";
import { useParams } from "react-router-dom";
import { getLeaderboard } from "../services";

function Leaderboard() {
  const { id } = useParams();
  const [leaderboard, setLeaderboard] = React.useState<any>();
  const leaderBoardData = async () => {
    const data = await getLeaderboard(id as string);
    console.log(data);
    setLeaderboard(data?.data);
  };
  React.useEffect(() => {
    leaderBoardData();
  }, []);
  return (
    <div>
      {" "}
      <div>
        <Typography
          {...FontVariant.HeadingBold28}
          color={colorPalette.neoPaccha[500]}
          fontSize={24}
          style={{ margin: " 0.25rem 0.2rem 1rem 6rem " }}
        >
          Your Leaderboard
        </Typography>
        {!leaderboard && (
          <>
            {" "}
            <Typography
              {...FontVariant.HeadingBold28}
              color={colorPalette.poliPurple[500]}
              fontSize={18}
              style={{ margin: " 0.25rem 0.2rem 1rem 6rem " }}
            >
              No participants yet
            </Typography>
          </>
        )}
        <div className="grid grid-cols-3">
          {leaderboard?.map((contest: any, index: any) => {
            return (
              <div className={` flex items-center justify-center `}>
                <ElevatedCard
                  edgeColors={{
                    bottom: colorPalette.popWhite[100],
                    right: colorPalette.popWhite[300],
                  }}
                  style={{
                    width: "530px",
                    position: "",
                  }}
                >
                  <div className="w-full h-full border-t-[1px] border-l-[1px] p-5 flex flex-col">
                    <Typography
                      {...FontVariant.HeadingBold28}
                      color="#06C270"
                      fontSize={18}
                    >
                      {contest.walletAddress}
                    </Typography>
                    <div className="w-fit mx-auto mt-2">
                      <ScoreMeter
                        colorConfig={{
                          dotColor: "",
                          indicatorColors: {
                            decrement: "#FFB098",
                            increment: "#5CDDBE",
                            neutral: "#e2e2e2",
                          },
                          meterBorderColor: "#3D3D3D",
                          meterStrokeBackground: "#0d0d0d",
                          meterStrokeColor: {
                            average: "#EDFE79",
                            excellent: "#06C270",
                            poor: "#F29947",
                          },
                          scoreColor: "#ffffff",
                          scoreContainerBackground: "#161616",
                          scoreContainerBorder: "#0d0d0d",
                        }}
                        colorMode="dark"
                        lowerLimit={0}
                        reading={contest.score}
                        scoreDesc={`Position : ${index + 1}`}
                        type="average"
                        upperLimit={300}
                      />
                    </div>
                  </div>
                </ElevatedCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
