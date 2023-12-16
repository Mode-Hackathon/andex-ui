import { ChainId } from '@pancakeswap/chains'

import { pools as ethPools, livePools as ethLivePools } from './919'
import { pools as bscPools, livePools as bscLivePools } from './34443'
import { SerializedPool } from '../../types'
import { SupportedChainId } from '../supportedChains'
import { isPoolsSupported } from '../../utils/isPoolsSupported'

export type PoolsConfigByChain<TChainId extends ChainId> = {
  [chainId in TChainId]: SerializedPool[]
}

export const POOLS_CONFIG_BY_CHAIN = {
  [ChainId.MODE_MAINNET]: ethPools,
  [ChainId.MODE_TESTNET]: bscPools,
} as PoolsConfigByChain<SupportedChainId>

export const LIVE_POOLS_CONFIG_BY_CHAIN = {
  [ChainId.MODE_MAINNET]: ethLivePools,
  [ChainId.MODE_TESTNET]: bscLivePools,
} as PoolsConfigByChain<SupportedChainId>

export const getPoolsConfig = (chainId: ChainId) => {
  if (!isPoolsSupported(chainId)) {
    return undefined
  }
  return POOLS_CONFIG_BY_CHAIN[chainId]
}

export const getLivePoolsConfig = (chainId: ChainId) => {
  if (!isPoolsSupported(chainId)) {
    return undefined
  }
  return LIVE_POOLS_CONFIG_BY_CHAIN[chainId]
}

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = 20000000000000n
export const DURATION_FACTOR = 31536000n
