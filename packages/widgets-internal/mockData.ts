import { ERC20Token } from "@pancakeswap/sdk";
import { ChainId } from "@pancakeswap/chains";

// For StoryBook
export const cakeToken = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "ANDX",
  "Andex Token",
  "https://andex.vercel.app/",
);

export const bscToken = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "BNB",
  "BNB",
  "https://www.binance.com/",
);
