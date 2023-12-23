import { ChainId } from './chainId'

export const V3_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'https://api.goldsky.com/api/public/project_clpwnl4uphdl501vw9mqg4eiz/subgraphs/v3/1.0.0/gn',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-goerli',
} satisfies Record<ChainId, string | null>

export const V2_SUBGRAPHS = {
  [ChainId.MODE_TESTNET]: 'https://api.goldsky.com/api/public/project_clpwnl4uphdl501vw9mqg4eiz/subgraphs/mode/1.0.0/gn',
  [ChainId.MODE_MAINNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
}
