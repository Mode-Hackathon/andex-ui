import {
  BLOCKS_CLIENT,
  BLOCKS_CLIENT_ETH,
} from 'config/constants/endpoints'
import { infoClientETH, infoClient, infoStableSwapClient, v2Clients } from 'utils/graphql'
import { GraphQLClient } from 'graphql-request'

import { ChainId } from '@pancakeswap/chains'
import {
  ETH_TOKEN_BLACKLIST,
  PCS_ETH_START,
  PCS_V2_START,
  TOKEN_BLACKLIST,
  BSC_TOKEN_WHITELIST,
  ETH_TOKEN_WHITELIST,
} from 'config/constants/info'
import { arbitrum, bsc, mainnet, polygonZkEvm, zkSync, linea, base, opBNB } from 'wagmi/chains'
import mapValues from 'lodash/mapValues'

export type MultiChainName = 'MODE' | 'MODE TESTNET'

export type MultiChainNameExtend = MultiChainName

export const multiChainName: Record<number | string, MultiChainNameExtend> = {
  [ChainId.MODE_MAINNET]: 'MODE',
  [ChainId.MODE_TESTNET]: 'MODE TESTNET',
}

export const multiChainShortName: Record<number, string> = {
  // [ChainId.POLYGON_ZKEVM]: 'zkEVM',
}

export const multiChainQueryMainToken: Record<MultiChainName, string> = {
  // BSC: 'BNB',
  MODE: 'ETH',
  "MODE TESTNET": 'ETH',
}

export const multiChainBlocksClient: Record<MultiChainNameExtend, string> = {
  MODE: BLOCKS_CLIENT,
  "MODE TESTNET": BLOCKS_CLIENT_ETH,
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  POLYGON_ZKEVM: 1686236845,
  ZKSYNC: 1690462800, // Thu Jul 27 2023 13:00:00 UTC+0000
  ARB: 1686732526,
  LINEA: 1692878400,
  BASE: 1693483200,
  OPBNB: 1695945600,
}

export const multiChainId: Record<MultiChainName, ChainId> = {
  MODE: ChainId.MODE_MAINNET,
  "MODE TESTNET": ChainId.MODE_TESTNET,
}

export const multiChainPaths = {
  [ChainId.MODE_MAINNET]: '',
  [ChainId.MODE_TESTNET]: '/mode_testnet'
}

export const multiChainQueryClient = {
  MODE: infoClient,
  'MODE TESTNET': infoClientETH,
}

export const multiChainScan: Record<MultiChainName, string> = {
  MODE: bsc.blockExplorers.etherscan.name,
  "MODE TESTNET": mainnet.blockExplorers.etherscan.name,
}

export const multiChainTokenBlackList: Record<MultiChainName, string[]> = mapValues(
  {
    MODE: ['0x'],
    'MODE TESTNET': ['0x'],
  },
  (val) => val.map((address) => address.toLowerCase()),
)

export const multiChainTokenWhiteList: Record<MultiChainName, string[]> = mapValues(
  {
    MODE: [],
    'MODE TESTNET': [],
  },
  (val) => val.map((address: any) => address.toLowerCase()),
)

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainNameExtend): GraphQLClient => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

// FIXME: this should be per chain
export const subgraphTokenName = {
  '0x738d96Caf7096659DB4C1aFbf1E1BDFD281f388C': 'Ankr Staked MATIC',
  '0x14016E85a25aeb13065688cAFB43044C2ef86784': 'True USD Old',
}

// FIXME: this should be per chain
export const subgraphTokenSymbol = {
  '0x14016E85a25aeb13065688cAFB43044C2ef86784': 'TUSDOLD',
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')

export const ChainLinkSupportChains = []
