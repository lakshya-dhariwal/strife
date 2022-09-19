import React from "react";
import { useContract } from "wagmi";
import { useSigner } from "wagmi";

const GetContract = (addr, abi_data) => {
  const { data: signer, isError, isLoading } = useSigner();

  const contract = useContract({
    addressOrName: addr,
    contractInterface: abi_data,
    signerOrProvider: signer,
  });

  return contract;
};

export default GetContract;
