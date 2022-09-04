//@ts-nocheck
import React, { Component } from "react";
import Pacman from "pacman-react";
import arrive from "arrive";

// .game-over
// .running-score
// alert(JSON.stringify(textContent);

window.arrive(".game-over", { onceOnly: true }, function () {
  var textContent =
    document.getElementsByClassName("running-score")[0].innerHTML;
  var cleanText = JSON.stringify(textContent.split(": ").pop());
  var para = document.createElement("P");
  para.innerText = cleanText;
  para.setAttribute("id", "score-pacman");
  document.body.appendChild(para);
});

class PacmanEmbed extends Component {
  render() {
    return <Pacman />;
  }
}

export default PacmanEmbed;
