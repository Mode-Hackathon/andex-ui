import { ChainId } from '@pancakeswap/chains'
import { ComputedFarmConfigV3 } from '../../src/types'
import { FarmV3SupportedChainId } from '../../src'
import { farmsV3 as ethFarms } from '../eth'
import { farmsV3 as goerliFarms } from '../goerli'

export const farmsV3ConfigChainMap: Record<FarmV3SupportedChainId, ComputedFarmConfigV3[]> = {
  [ChainId.MODE_MAINNET]: ethFarms,
  [ChainId.MODE_TESTNET]: goerliFarms,
}
