import { ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
//TODO:
export const CAKE_MAINNET = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.MODE_TESTNET,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.MODE_TESTNET,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD = {
  [ChainId.MODE_MAINNET]: BUSD_ETH,
  [ChainId.MODE_TESTNET]: BUSD_GOERLI,
}

export const CAKE = {
  [ChainId.MODE_MAINNET]: new ERC20Token(
    ChainId.MODE_MAINNET,
    '0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  [ChainId.MODE_TESTNET]: new ERC20Token(
    ChainId.MODE_TESTNET,
    '0xc2C3eAbE0368a2Ea97f485b03D1098cdD7d0c081',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  
}

export const USDC = {
  [ChainId.MODE_MAINNET]: USDC_ETH,
  [ChainId.MODE_TESTNET]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.MODE_MAINNET]: USDT_ETH,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const STABLE_COIN = {
  [ChainId.MODE_MAINNET]: USDT[ChainId.MODE_MAINNET],
  [ChainId.MODE_TESTNET]: USDC[ChainId.MODE_TESTNET],
} satisfies Record<ChainId, ERC20Token>
