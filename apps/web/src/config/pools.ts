import { ChainId } from '@pancakeswap/chains'

// Revalidate interval in milliseconds
export const POOLS_FAST_REVALIDATE = {
  [ChainId.MODE_MAINNET]: 20_000,
  [ChainId.MODE_TESTNET]: 20_000,
} as const satisfies Record<ChainId, number>

// Revalidate interval in milliseconds
export const POOLS_NORMAL_REVALIDATE = {
  [ChainId.MODE_MAINNET]: 15_000,
  [ChainId.MODE_TESTNET]: 15_000,
} as const satisfies Record<ChainId, number>

export const POOLS_SLOW_REVALIDATE = {
  [ChainId.MODE_MAINNET]: 20_000,
  [ChainId.MODE_TESTNET]: 20_000,
} as const satisfies Record<ChainId, number>
