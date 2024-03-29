import { ChainId } from "@pancakeswap/chains";

export const SUPPORTED_CHAIN_IDS = [
  ChainId.MODE_MAINNET,
  ChainId.MODE_TESTNET,
] as const;

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number];
export const ANDX_VAULT_SUPPORTED_CHAINS = [] as const;

//TODO:
// export const ANDX_VAULT_SUPPORTED_CHAINS = [ChainId.MODE_MAINNET, ChainId.MODE_TESTNET] as const

export type CakeVaultSupportedChainId =
  (typeof ANDX_VAULT_SUPPORTED_CHAINS)[number];
