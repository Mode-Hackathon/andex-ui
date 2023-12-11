import { ChainId } from './chainId'

export const V3_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-goerli',
} satisfies Record<ChainId, string | null>

export const V2_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'https://proxy-worker-api.pancakeswap.com/bsc-exchange',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
}
