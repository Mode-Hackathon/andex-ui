import { ChainId } from '@pancakeswap/chains'

import { StableSwapPool } from './types'
import { pools as bscPools } from './56'
import { pools as bscTestnetPools } from './97'

//TODO: change config where necessary

export type StableSwapPoolMap<TChainId extends number> = {
  [chainId in TChainId]: StableSwapPool[]
}

export const isStableSwapSupported = (chainId: number | undefined): chainId is StableSupportedChainId => {
  if (!chainId) {
    return false
  }
  return STABLE_SUPPORTED_CHAIN_IDS.includes(chainId)
}

export const STABLE_SUPPORTED_CHAIN_IDS = [
  ChainId.MODE_MAINNET, ChainId.MODE_TESTNET
] as const

export type StableSupportedChainId = (typeof STABLE_SUPPORTED_CHAIN_IDS)[number]

export const STABLE_POOL_MAP = {
  [ChainId.MODE_MAINNET]: bscPools,
  [ChainId.MODE_TESTNET]: bscTestnetPools,
} satisfies StableSwapPoolMap<StableSupportedChainId>