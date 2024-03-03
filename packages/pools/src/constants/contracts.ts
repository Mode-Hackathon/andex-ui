import { ChainId } from "@pancakeswap/chains";
import { Address } from "viem";

import { SupportedChainId } from "./supportedChains";

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address;
};

export const IANDX = {
  [ChainId.MODE_MAINNET]: "0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1",
  [ChainId.MODE_TESTNET]: "0x576696dA86d55B3207d1D1A6B689B6FCcCF60d16",
} as const satisfies ContractAddresses<SupportedChainId>;
// TODO: change addresses
export const ANDX_VAULT = {
  [ChainId.MODE_MAINNET]: "0x45c54210128a065de780C4B0Df3d16664f7f859e",
  [ChainId.MODE_TESTNET]: "0x1088Fb24053F03802F673b84d16AE1A7023E400b",
} as const satisfies ContractAddresses<SupportedChainId>;

export const ANDX_FLEXIBLE_SIDE_VAULT = {
  [ChainId.MODE_MAINNET]: "0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0",
  [ChainId.MODE_TESTNET]: "0x",
} as const satisfies ContractAddresses<SupportedChainId>;
