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

export const CHAINS: Chain[] = [
  {
    id: 34443,
    name: 'Mode Mainnet',
    network: 'mode',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://mainnet.mode.network'],
      },
      public: {
        http: ['https://mainnet.mode.network'],
      },
    },
    blockExplorers: {
      etherscan: { name: 'Mode Explorer', url: 'https://explorer.mode.network' },
      default: { name: 'Mode Explorer', url: 'https://explorer.mode.network' },
    },
    contracts: {
      multicall3: {
        address: '0x17cd82fc4E76Cb09C66B8098dA182Eaa78BCB3de',
        blockCreated: 7654707,
      },
    },
  },
  {
    id: 919,
    name: 'Mode Testnet',
    network: 'mode',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://sepolia.mode.network'],
      },
      public: {
        http: ['https://sepolia.mode.network/'],
      },
    },
    blockExplorers: {
      etherscan: { name: 'Mode Explorer', url: 'https://sepolia.explorer.mode.network/' },
      default: { name: 'Mode Explorer', url: 'https://sepolia.explorer.mode.network/' },
    },
    contracts: {
      multicall3: {
        address: '0x17cd82fc4E76Cb09C66B8098dA182Eaa78BCB3de',
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
