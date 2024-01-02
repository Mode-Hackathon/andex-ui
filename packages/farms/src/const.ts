import { ChainId } from '@pancakeswap/chains'
import uniq from 'lodash/uniq'

export const supportedChainIdV2 = [ChainId.MODE_MAINNET, ChainId.MODE_TESTNET] as const
export const supportedChainIdV3 = [
  ChainId.MODE_MAINNET,
  ChainId.MODE_TESTNET,
] as const
export const supportedChainId = uniq([...supportedChainIdV2, ...supportedChainIdV3])
export const bCakeSupportedChainId = [ChainId.MODE_MAINNET] as const

export const FARM_AUCTION_HOSTING_IN_SECONDS = 691200

export type FarmSupportedChainId = (typeof supportedChainId)[number]

export type FarmV2SupportedChainId = (typeof supportedChainIdV2)[number]

export type FarmV3SupportedChainId = (typeof supportedChainIdV3)[number]

export const masterChefAddresses = {
  [ChainId.MODE_TESTNET]: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  [ChainId.MODE_MAINNET]: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
} as const

export const masterChefV3Addresses = {
  [ChainId.MODE_MAINNET]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  [ChainId.MODE_TESTNET]: '0xE6496a33DcfCB0C47aECBedf0D1113E534dAe2E0',
} as const satisfies Record<FarmV3SupportedChainId, string>

export const nonBSCVaultAddresses = {
  [ChainId.MODE_MAINNET]: '0x2e71B2688019ebdFDdE5A45e6921aaebb15b25fb',
  [ChainId.MODE_TESTNET]: '0xE6c904424417D03451fADd6E3f5b6c26BcC43841',
} as const
