import { Percent } from '@pancakeswap/swap-sdk-core'
import { ChainId } from '@pancakeswap/chains'
import { Address, Hash } from 'viem'
import { ERC20Token } from './entities/token'

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// TODO: change variables

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MODE_MAINNET]: FACTORY_ADDRESS_ETH,
  [ChainId.MODE_TESTNET]: FACTORY_ADDRESS_ETH,
} as const satisfies Record<ChainId, Address>

export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP = {
  [ChainId.MODE_MAINNET]: INIT_CODE_HASH_ETH,
  [ChainId.MODE_TESTNET]: INIT_CODE_HASH_ETH,
} as const satisfies Record<ChainId, Hash>

export const WETH9 = {
  [ChainId.MODE_MAINNET]: new ERC20Token(
    ChainId.MODE_MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.MODE_TESTNET]: new ERC20Token(
    ChainId.MODE_TESTNET,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.MODE_MAINNET]: new ERC20Token(
    ChainId.MODE_MAINNET,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WNATIVE = {
  [ChainId.MODE_MAINNET]: WETH9[ChainId.MODE_MAINNET],
  [ChainId.MODE_TESTNET]: WETH9[ChainId.MODE_TESTNET],
} satisfies Record<ChainId, ERC20Token>

const ETHER = { name: 'Ether', symbol: 'ETH', decimals: 18 } as const
// const BNB = {
//   name: 'Binance Chain Native Token',
//   symbol: 'BNB',
//   decimals: 18,
// } as const

export const NATIVE = {
  [ChainId.MODE_MAINNET]: ETHER,
  [ChainId.MODE_TESTNET]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
} satisfies Record<
  ChainId,
  {
    name: string
    symbol: string
    decimals: number
  }
>
