import { ChainId } from '@pancakeswap/chains'
import {
  BIT_QUERY,
  INFO_CLIENT,
  STABLESWAP_SUBGRAPH_CLIENT,
  INFO_CLIENT_ETH,
  V3_SUBGRAPH_URLS,
  V3_BSC_INFO_CLIENT,
} from 'config/constants/endpoints'
import { GraphQLClient } from 'graphql-request'
import { INFO_CLIENT_WITH_CHAIN } from '../config/constants/endpoints'

// Extra headers
// Mostly for dev environment
// No production env check since production preview might also need them
export const getGQLHeaders = (endpoint: string) => {
  if (endpoint === INFO_CLIENT && process.env.NEXT_PUBLIC_NODE_REAL_HEADER) {
    return {
      origin: process.env.NEXT_PUBLIC_NODE_REAL_HEADER,
    }
  }
  return undefined
}

export const infoClient = new GraphQLClient(INFO_CLIENT)

export const infoClientWithChain = (chainId?: number) => {
  if (chainId && INFO_CLIENT_WITH_CHAIN[chainId]) {
    return new GraphQLClient(INFO_CLIENT_WITH_CHAIN[chainId], {
      headers: getGQLHeaders(INFO_CLIENT_WITH_CHAIN[chainId]),
    })
  }
  return undefined
}

export const v3Clients = {
  [ChainId.MODE_MAINNET]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.MODE_MAINNET]),
  [ChainId.MODE_TESTNET]: new GraphQLClient(V3_SUBGRAPH_URLS[ChainId.MODE_TESTNET]),
}

export const v3InfoClients = { ...v3Clients, [ChainId.MODE_MAINNET]: new GraphQLClient(V3_BSC_INFO_CLIENT) }

export const infoClientETH = new GraphQLClient(INFO_CLIENT_ETH)

export const v2Clients = {
  [ChainId.MODE_MAINNET]: infoClient,
}

export const infoStableSwapClient = new GraphQLClient(STABLESWAP_SUBGRAPH_CLIENT)

export const infoServerClient = new GraphQLClient(INFO_CLIENT, {
  timeout: 5000,
  headers: {
    origin: 'https://andex.vercel.app',
  },
})

export const stableSwapClient = new GraphQLClient(STABLESWAP_SUBGRAPH_CLIENT)

export const bitQueryServerClient = new GraphQLClient(BIT_QUERY, {
  headers: {
    // only server, no `NEXT_PUBLIC` not going to expose in client
    'X-API-KEY': process.env.BIT_QUERY_HEADER || '',
  },
  timeout: 5000,
})
