import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

export const MULTICALL_ADDRESS: { [key in ChainId]?: Address } = {
  [ChainId.MODE_MAINNET]: '0xC0916D7E360c31D5F6D0c497E6a36B7B0E80e3cf',

  // Testnets
  [ChainId.MODE_TESTNET]: '0xaE17257217B483E50208cca657d0EA5af75db35F',
}

export const MULTICALL3_ADDRESS = '0x17cd82fc4E76Cb09C66B8098dA182Eaa78BCB3de'

export const MULTICALL3_ADDRESSES: {
  [key in ChainId]?: Address
} = {
  [ChainId.MODE_MAINNET]: MULTICALL3_ADDRESS,
  [ChainId.MODE_TESTNET]: MULTICALL3_ADDRESS,
}
