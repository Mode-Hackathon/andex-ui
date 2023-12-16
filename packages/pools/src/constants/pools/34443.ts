// import { bscTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import {
  // PoolCategory, 
  SerializedPool
} from '../../types'

export const livePools: SerializedPool[] = [
].map((p: any) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p: any) => ({
  ...p,
  isFinished: true,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
