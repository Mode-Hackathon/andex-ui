import { ChainId } from '@pancakeswap/chains'

export const DEFAULT_BLOCK_CONFLICT_TOLERANCE = 0

export const BLOCK_CONFLICT_TOLERANCE: { [key in ChainId]?: number } = {
  // [ChainId.MODE_MAINNET]: 3,
  [ChainId.MODE_MAINNET]: 1,
  // [ChainId.ARBITRUM_ONE]: 5,
  // [ChainId.POLYGON_ZKEVM]: 1,
  // [ChainId.ZKSYNC]: 3,
  // [ChainId.LINEA]: 3,
  // [ChainId.BASE]: 3,
  // [ChainId.OPBNB]: 3,

  // Testnets
  // [ChainId.MODE_TESTNET]: 3,
  [ChainId.MODE_TESTNET]: 1,
  // [ChainId.ARBITRUM_GOERLI]: 5,
  // [ChainId.POLYGON_ZKEVM_TESTNET]: 1,
  // [ChainId.ZKSYNC_TESTNET]: 3,
  // [ChainId.LINEA_TESTNET]: 3,
  // [ChainId.OPBNB_TESTNET]: 3,
  // [ChainId.BASE_TESTNET]: 3,
  // [ChainId.SCROLL_SEPOLIA]: 3,
}
