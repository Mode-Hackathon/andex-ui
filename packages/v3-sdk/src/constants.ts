import { ChainId } from '@pancakeswap/chains'
import { Address, Hash } from 'viem'

const FACTORY_ADDRESS = '0x300C518432A4567AE2ca0aee0ADEf5Fd66Dc317C'

// export const SFSAddress = '0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6'
//TODO:
/**
 * To compute Pool address use DEPLOYER_ADDRESSES instead
 */
export const FACTORY_ADDRESSES = {
  [ChainId.MODE_MAINNET]: FACTORY_ADDRESS,
  [ChainId.MODE_TESTNET]: FACTORY_ADDRESS,
} as const satisfies Record<ChainId, Address>

const DEPLOYER_ADDRESS = '0xfFD97758fe3cC45Aa72a6B0A33D95Dc6D64bc913'

export const DEPLOYER_ADDRESSES = {
  [ChainId.MODE_MAINNET]: DEPLOYER_ADDRESS,
  [ChainId.MODE_TESTNET]: DEPLOYER_ADDRESS,

} as const satisfies Record<ChainId, Address>

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// const POOL_INIT_CODE_HASH = '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2'
const POOL_INIT_CODE_HASH = '0x23d9213078616dbdc42a4c4f3efb635859904668b02083a2d2d6bd9d2aca6bd9'

export const POOL_INIT_CODE_HASHES = {
  [ChainId.MODE_MAINNET]: POOL_INIT_CODE_HASH,
  [ChainId.MODE_TESTNET]: POOL_INIT_CODE_HASH,
} as const satisfies Record<ChainId, Hash>

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 2500,
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 50,
  [FeeAmount.HIGH]: 200,
}
