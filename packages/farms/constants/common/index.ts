import { ERC20Token } from "@pancakeswap/sdk";
import { ChainId } from "@pancakeswap/chains";
import { ethereumTokens, goerliTestnetTokens } from "@pancakeswap/tokens";
import type { CommonPrice } from "../../src/fetchFarmsV3";
import type { FarmV3SupportedChainId } from "../../src";

export const ANDX_BNB_LP_MAINNET = "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0";

export type PriceHelper = {
  chain: string;
  list: ERC20Token[];
};

export const priceHelperTokens = {
  [ChainId.MODE_MAINNET]: {
    chain: "mode",
    list: [ethereumTokens.weth, ethereumTokens.usdc, ethereumTokens.usdt],
  },
} satisfies Record<number, PriceHelper>;

// for testing purposes
export const DEFAULT_COMMON_PRICE: Record<FarmV3SupportedChainId, CommonPrice> =
  {
    [ChainId.MODE_TESTNET]: {},
    [ChainId.MODE_MAINNET]: {},
  };
