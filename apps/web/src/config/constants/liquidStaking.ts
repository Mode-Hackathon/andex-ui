import { ChainId } from '@pancakeswap/chains'
import { Address } from 'wagmi'

export const WBETH: Record<number, Address> = {
  // [ChainId.ETHEREUM]: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
  [ChainId.MODE_MAINNET]: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
  [ChainId.MODE_TESTNET]: '0x34f8f72e3f14Ede08bbdA1A19a90B35a80f3E789',
  // [ChainId.GOERLI]: '0xE7bCB9e341D546b66a46298f4893f5650a56e99E',
}

export const SNBNB: Record<number, Address> = {
  [ChainId.MODE_MAINNET]: '0x1adB950d8bB3dA4bE104211D5AB038628e477fE6',
}
