import React, { useState } from "react";
import PacmanEmbed from "../components/PacmanEmbed";
import {
  ElevatedCard,
  InputField,
  Button,
  Typography,
} from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import Modal from "../components/Modal";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { postUpdateScore } from "../services";

function Contest() {
  const { id } = useParams();
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = useState(null);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const submitScore = async () => {
    //timeout for animation

    //code here
    await postUpdateScore(id, name, score);
    navigate(`/leaderboard/${id}`);
  };

  React.useEffect(() => {
    const int = setInterval(() => {
      const scoreEl = document.querySelector(".running-score");
      const s = scoreEl?.innerText?.split(":");
      const scoreVal = parseInt(s[1]);
      setScore(scoreVal);

      const gameOverEl = document.querySelector(".game-over");
      setGameOver(gameOverEl);
    }, [300]);

    return () => {
      clearInterval(int);
    };
  }, []);
  React.useEffect(() => {
    if (gameOver) {
      setModal(true);
    }
  }, [gameOver]);

  return (
    <div>
      {modal && (
        <Modal>
          <ElevatedCard
            edgeColors={{
              bottom: colorPalette.popWhite[100],
              right: colorPalette.popWhite[300],
            }}
            style={{
              width: "300px",
            }}
          >
            <div className="flex flex-col w-full h-full  items-center border-t-[1px] border-l-[1px] py-3 bg-[#0d0d0d] px-3">
              <Typography
                {...FontVariant.HeadingBold28}
                color={colorPalette.white}
                fontSize={24}
                style={{ margin: " 0.25rem 0.2rem 1rem 0.2rem " }}
              >
                Your score is {score}
              </Typography>
              <InputField
                type="text"
                label="your name"
                placeholder="enter your name"
                id="text_field"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <Button
                variant="secondary"
                kind="elevated"
                size="medium"
                colorMode="light"
                fullWidth
                style={{ margin: " 1rem 0.2rem 0.25rem 0.2rem " }}
                onClick={() => {
                  submitScore();
                }}
                showArrow
              >
                Submit Entry
              </Button>
            </div>
          </ElevatedCard>
        </Modal>
      )}
      <div className="w-fit mx-auto">
        <ElevatedCard
          backgroundColor="transparent"
          edgeColors={{
            bottom: "#F29947",
            right: "#F08D32",
          }}
          style={{
            width: "340px",
            margin: "0 auto",
          }}
        >
          <PacmanEmbed />
        </ElevatedCard>
      </div>
    </div>
  );
}

export default Contest;
