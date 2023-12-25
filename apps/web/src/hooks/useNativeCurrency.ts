import { Native, NativeCurrency } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { useMemo } from 'react'
import { useActiveChainId } from './useActiveChainId'

export default function useNativeCurrency(): NativeCurrency {
  const { chainId } = useActiveChainId()
  return useMemo(() => {
    try {
      return Native.onChain(chainId as ChainId)
    } catch (e) {
      return Native.onChain(ChainId.MODE_MAINNET)
    }
  }, [chainId])
}
