import { ChainId } from "@pancakeswap/chains";
import { Address } from "viem";

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608;
//TODO: change config where necessary

export const MSG_SENDER = "0x0000000000000000000000000000000000000001";
export const ADDRESS_THIS = "0x0000000000000000000000000000000000000002";

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.MODE_MAINNET]: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
  [ChainId.MODE_TESTNET]: "0xC890461ae2A0e09bD6c3f9c24800ed7aaA5c49d3",
} as const satisfies Record<ChainId, Address>;

export const V3_QUOTER_ADDRESSES = {
  [ChainId.MODE_MAINNET]: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
  [ChainId.MODE_TESTNET]: "0x28AF6Fa38ee45544d7d53BcE089E285d7DD68E92",
} as const satisfies Record<ChainId, Address>;
