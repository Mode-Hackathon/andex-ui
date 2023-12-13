import { ChainId } from '@pancakeswap/chains'
// import { ethereumTokens } from '@pancakeswap/tokens'
// import { FeeAmount } from '@pancakeswap/v3-sdk'
import {
  GaugeConfig,
  // GaugeType 
} from '../types'

export const CONFIG_TESTNET: GaugeConfig[] = [
]

export const CONFIG_PROD: GaugeConfig[] = [

]

export const GAUGES_CONFIG = {
  [ChainId.MODE_MAINNET]: CONFIG_PROD,
  [ChainId.MODE_TESTNET]: CONFIG_TESTNET,
}
