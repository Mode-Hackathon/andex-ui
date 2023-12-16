import { ChainId, getChainName } from '@pancakeswap/chains'

type GetUrlOptions = {
  chainId?: ChainId
  name: string
}

export function getChainBasedImageUrl({ chainId = ChainId.MODE_MAINNET, name }: GetUrlOptions) {
  return `/images/ifos/${name}/${getChainName(chainId)}.png`
}
