import { ChainId, Token } from '@pancakeswap/sdk'
import { CAKE, goerliTestnetTokens } from '@pancakeswap/tokens'
import { useActiveChainId } from 'hooks/useActiveChainId'

export const useBSCCakeToken = (): Token | undefined => {
  const { chainId } = useActiveChainId()

  if (chainId === ChainId.MODE_MAINNET) return CAKE[chainId]
  if (chainId === ChainId.MODE_TESTNET) return goerliTestnetTokens.cake

  return undefined
}
