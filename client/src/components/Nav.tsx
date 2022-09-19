import Web3 from "web3";
import { abi } from "../contract/abi";
import React, { useEffect, useState } from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { colorPalette, FontVariant } from "@cred/neopop-web/lib/primitives";
import { Button } from "@cred/neopop-web/lib/components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  // const [account, setAccount] = useState("");
  // const [contract, setContract] = useState({});

  // const loadBlockhainData = async () => {
  //   const web3 = new Web3(Web3.givenProvider || "https://localhost:7545");
  //   const accounts = await web3.eth.getAccounts();
  //   setAccount(accounts[0]);
  //   const lock = new web3.eth.Contract(abi, addr);
  //   setContract(lock);
  // };

  // const [account, setAccount] = useState("");
  // const getAccount = async () => {
  //   const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  //   setAccount(accounts[0]);
  //   console.log(account);
  // };

  // useEffect(() => {
  //   loadBlockhainData();
  // }, [account]);
  return (
    <div className="p-2 flex justify-between px-3 items-center">
      <h1>
        {/* <Typography {...FontVariant.HeadingBold28} color={colorPalette.white}> */}
        <h1 className="text-[#6A35FF]  text-[30px] roboto">Strife</h1>
        {/* </Typography> */}
      </h1>
      <ul className="flex items-center ">
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/contests">Contests</a>
        </li>
        <li className="hover:opacity-80 px-2 cursor-pointer">
          <a href="/wins">Wins</a>
        </li>
      </ul>
      {/* <Button
        variant="secondary"
        kind="elevated"
        size="medium"
        colorMode="light"
        onClick={() => {
          console.log("I'm clicked");
        }}
        showArrow
      >
        Lets Play
      </Button> */}
      <ConnectButton />
    </div>
  );
};

export default Nav;
