import {
  Button,
  ElevatedCard,
  Typography,
} from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import React from "react";
import { capitalizeFirstLetter } from "../components/ContestCard";
import { getWins } from "../services";
const Wins = () => {
  const [wins, setWins] = React.useState<any>(null);
  const winsData = async () => {
    const data = await getWins();
    console.log(data);
    setWins(data);
  };
  React.useEffect(() => {
    winsData();
  }, []);

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
      <div className=" grid grid-cols-4 m-3 gap-5">
        {wins?.map((win: any) => {
          return (
            <>
              <div className={`w-full flex items-center justify-center `}>
                <ElevatedCard
                  edgeColors={{
                    bottom: colorPalette.popWhite[100],
                    right: colorPalette.popWhite[300],
                  }}
                  style={{
                    width: "300px",
                    position: "relative",
                  }}
                >
                  {" "}
                  <img
                    src={`/images/${win?.contest_id}.png`}
                    alt="img"
                    width={297}
                    height={200}
                    className="object-stretch border-t-[1px] border-l-[1px] max-h-[146px] w-full"
                  />
                  <div className="flex flex-col w-full h-full  items-center  border-l-[1px] py-3">
                    <Typography
                      {...FontVariant.HeadingBold28}
                      fontSize={20}
                      color={colorPalette.neoPaccha[500]}
                      style={{ margin: " 0rem 0rem 1rem 0rem" }}
                    >
                      win?.contest_name
                    </Typography>
                    <div className="">
                      <h3 className="flex items-center m-1">
                        <img src="/images/ticket.svg" className="pr-2" />{" "}
                        Reward: 1 $MATIC
                      </h3>
                    </div>
                    <div className="mt-1 flex flex-col w-[90%]">
                      <Button
                        variant="secondary"
                        kind="elevated"
                        size="medium"
                        colorMode="light"
                        onClick={() => {}}
                        fullWidth
                        style={{ margin: " 0.25rem 0rem 0.1rem 0rem" }}
                      >
                        <div className="flex  mx-auto">
                          <img src="/images/eth.svg" className="pr-2" />{" "}
                          <>Claim Prize</>
                        </div>
                      </Button>
                    </div>
                  </div>
                </ElevatedCard>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Wins;
