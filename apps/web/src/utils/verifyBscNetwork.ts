import { ChainId } from '@pancakeswap/chains'

export const verifyBscNetwork = (chainId?: number) => {
  return Boolean(chainId && (chainId === ChainId.MODE_MAINNET || chainId === ChainId.MODE_TESTNET))
}
