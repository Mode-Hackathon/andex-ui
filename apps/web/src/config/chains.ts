import { ChainId, chainNames } from '@pancakeswap/chains'
import memoize from 'lodash/memoize'
import {
  bsc,
  Chain,
} from 'wagmi/chains'

export const CHAIN_QUERY_NAME = chainNames

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})


/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS: ChainId[] = [
  ChainId.MODE_MAINNET,
  ChainId.MODE_TESTNET,
]

export const CHAINS = [
  {
    id: 34443,
    name: 'Mode Testnet',
    network: 'arbitrum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ['https://arb-mainnet.g.alchemy.com/v2'],
        webSocket: ['wss://arb-mainnet.g.alchemy.com/v2'],
      },
      infura: {
        http: ['https://arbitrum-mainnet.infura.io/v3'],
        webSocket: ['wss://arbitrum-mainnet.infura.io/ws/v3'],
      },
      default: {
        http: ['https://arb1.arbitrum.io/rpc'],
      },
      public: {
        http: ['https://arb1.arbitrum.io/rpc'],
      },
    },
    blockExplorers: {
      etherscan: { name: 'Arbiscan', url: 'https://arbiscan.io' },
      default: { name: 'Arbiscan', url: 'https://arbiscan.io' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 7654707,
      },
    },
  }
  // bsc,
  // mainnet,
  // bscTestnet,
  // goerli,
  // polygonZkEvm,
  // polygonZkEvmTestnet,
  // zkSync,
  // zkSyncTestnet,
  // arbitrum,
  // arbitrumGoerli,
  // linea,
  // lineaTestnet,
  // arbitrumGoerli,
  // arbitrum,
  // base,
  // baseGoerli,
  // opBNB,
  // opBNBTestnet,
  // scrollSepolia,
]
