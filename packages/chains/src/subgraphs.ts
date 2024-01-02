import { ChainId } from './chainId'

export const V3_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'http://127.0.0.1:8000/subgraphs/name/example-v3',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-goerli',
} satisfies Record<ChainId, string | null>

export const V2_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'http://127.0.0.1:8000/subgraphs/name/example',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
}
