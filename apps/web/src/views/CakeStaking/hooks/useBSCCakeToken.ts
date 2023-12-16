import { ChainId, Token } from '@pancakeswap/sdk'
import { CAKE, bscTestnetTokens } from '@pancakeswap/tokens'
import { useActiveChainId } from 'hooks/useActiveChainId'

export const useBSCCakeToken = (): Token | undefined => {
  const { chainId } = useActiveChainId()

  if (chainId === ChainId.MODE_MAINNET) return CAKE[chainId]
  if (chainId === ChainId.MODE_TESTNET) return bscTestnetTokens.cake2

  return undefined
}
