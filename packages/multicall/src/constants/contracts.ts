import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

export const MULTICALL_ADDRESS: { [key in ChainId]?: Address } = {
  [ChainId.MODE_MAINNET]: '0xC0916D7E360c31D5F6D0c497E6a36B7B0E80e3cf',

  // Testnets
  [ChainId.MODE_TESTNET]: '0xD55CAFAB2Ffa1139Be46bc5C0b8259c620050dFC',
}

export const MULTICALL3_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11'

export const MULTICALL3_ADDRESSES: {
  [key in ChainId]?: Address
} = {
  [ChainId.MODE_MAINNET]: MULTICALL3_ADDRESS,
  [ChainId.MODE_TESTNET]: MULTICALL3_ADDRESS,
}
