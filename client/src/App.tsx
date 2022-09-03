import React from "react";
import Nav from "./components/Nav";
import ContestCard from "./components/ContestCard";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";

import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Contest from "./pages/Contest";
import Leaderboard from "./pages/Leaderboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/contest/:id" element={<Contest />} />
          <Route path="/leaderboard/:id" element={<Leaderboard />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/" element={<Home />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
