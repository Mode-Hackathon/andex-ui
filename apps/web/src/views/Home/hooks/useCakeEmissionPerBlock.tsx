import { ChainId } from "@pancakeswap/chains";
import BigNumber from "bignumber.js";
import { masterChefV2ABI } from "config/abi/masterchefV2";
import { getMasterChefV2Address } from "utils/addressHelpers";
import { formatEther } from "viem";
import { useContractRead } from "wagmi";

const ANDX_PER_BLOCK = 40;
const masterChefAddress = getMasterChefV2Address();

export const useCakeEmissionPerBlock = (inView?: boolean) => {
  const { data: emissionsPerBlock } = useContractRead({
    abi: masterChefV2ABI,
    address: masterChefAddress,
    chainId: ChainId.MODE_MAINNET,
    functionName: "cakePerBlockToBurn",
    enabled: inView,
    select: (d) => {
      const burn = formatEther(d);
      return new BigNumber(ANDX_PER_BLOCK).minus(burn).toNumber();
    },
  });

  return emissionsPerBlock;
};
