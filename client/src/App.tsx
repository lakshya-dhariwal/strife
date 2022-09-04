//@ts-nocheck
import React from "react";
import Nav from "./components/Nav";
import ContestCard from "./components/ContestCard";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Contest from "./pages/Contest";
import Wins from "./pages/Wins";
import Leaderboard from "./pages/Leaderboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const { chains, provider } = configureChains(
    [
      chain.mainnet,
      chain.polygon,
      chain.polygonMumbai,
      chain.ropsten,
      chain.rinkeby,
    ],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Streamify",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        {" "}
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
      </RainbowKitProvider>{" "}
    </WagmiConfig>
  );
};

export default App;
