import { ChainId } from '@pancakeswap/chains'
import FarmsBscPriceHelper from './56'
import FarmsBscTestnetPriceHelper from './97'
// import FarmsEthereumPriceHelper from './1'
// import FarmsGoerliPriceHelper from './5'
// import FarmsArbitrumHelper from './42161'
// import FarmsLineaHelper from './59144'
// import FarmsBaseHelper from './8453'
// TODO:

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.MODE_MAINNET:
      return FarmsBscPriceHelper
    case ChainId.MODE_TESTNET:
      return FarmsBscTestnetPriceHelper
    default:
      return []
  }
}
