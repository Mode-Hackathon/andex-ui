import { ChainId } from '@pancakeswap/chains'
// import { getNodeRealUrl } from 'utils/node/nodeReal'
// import { getPoktUrl } from 'utils/node/pokt'
// import {
//   arbitrum,
//   arbitrumGoerli,
//   base,
//   baseGoerli,
//   linea,
//   opBNB,
//   opBNBTestnet,
//   polygonZkEvm,
//   polygonZkEvmTestnet,
//   scrollSepolia,
//   zkSync,
//   zkSyncTestnet,
// } from 'wagmi/chains'

// const ARBITRUM_NODES = [
//   ...arbitrum.rpcUrls.public.http,
//   'https://arbitrum-one.publicnode.com',
//   'https://arbitrum.llamarpc.com',
//   getPoktUrl(ChainId.ARBITRUM_ONE, process.env.NEXT_PUBLIC_POKT_API_KEY) || '',
// ].filter(Boolean)

export const SERVER_NODES = {
  [ChainId.MODE_MAINNET]: [''],
  [ChainId.MODE_TESTNET]: ['']
} satisfies Record<ChainId, readonly string[]>

export const PUBLIC_NODES = {
  [ChainId.MODE_MAINNET]: ['https://mainnet.mode.network'],
  [ChainId.MODE_TESTNET]: ['https://sepolia.mode.network/']
} satisfies Record<ChainId, readonly string[]>
