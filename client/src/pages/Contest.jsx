import React, { useState } from "react";
import PacmanEmbed from "../components/PacmanEmbed";
import { ElevatedCard } from "@cred/neopop-web/lib/components";

function Contest() {
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = useState(null);
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
      console.log("GameOver");
    }
  }, [gameOver]);

  return (
    <div>
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
