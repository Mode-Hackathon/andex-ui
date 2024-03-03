import { ERC20Token } from "@pancakeswap/sdk";
import { ChainId } from "@pancakeswap/chains";
//TODO:
export const ANDX_MAINNET = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "ANDX",
  "Andex Token",
  "https://andex.vercel.app/"
);

export const ANDX_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  "0x576696dA86d55B3207d1D1A6B689B6FCcCF60d16",
  18,
  "ANDX",
  "Andex Token",
  "https://andex.vercel.app/"
);

export const USDC_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);

export const USDC_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  "0x3FC76FAa4cB34853a73382dF41353f6B568A3116",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);

export const USDC_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USD Coin"
);

export const USDC_GOERLI = new ERC20Token(
  ChainId.MODE_TESTNET,
  "0x4b3B37c081e4cA016574c3855799bD24732d0684",
  18,
  "tUSDC",
  "test USD Coin"
);

export const USDT_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x55d398326f99059fF775485246999027B3197955",
  18,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);

export const USDT_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);

export const BUSD_BSC = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_TESTNET = new ERC20Token(
  ChainId.MODE_TESTNET,
  "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD_GOERLI = new ERC20Token(
  ChainId.MODE_TESTNET,
  "0xbf09acbE62F9883D7FCb05dA735555Bb4846E710",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);

export const BUSD = {
  [ChainId.MODE_MAINNET]: BUSD_ETH,
  [ChainId.MODE_TESTNET]: BUSD_GOERLI,
};

export const ANDX = {
  [ChainId.MODE_MAINNET]: new ERC20Token(
    ChainId.MODE_MAINNET,
    "0x576696dA86d55B3207d1D1A6B689B6FCcCF60d16",
    18,
    "ANDX",
    "Andex Token",
    "https://andex.vercel.app/"
  ),
  [ChainId.MODE_TESTNET]: new ERC20Token(
    ChainId.MODE_TESTNET,
    "0x576696dA86d55B3207d1D1A6B689B6FCcCF60d16",
    18,
    "ANDX",
    "Andex Token",
    "https://andex.vercel.app/"
  ),
};

export const USDC = {
  [ChainId.MODE_MAINNET]: USDC_ETH,
  [ChainId.MODE_TESTNET]: USDC_GOERLI,
};

export const USDT = {
  [ChainId.MODE_MAINNET]: USDT_ETH,
};

export const WBTC_ETH = new ERC20Token(
  ChainId.MODE_MAINNET,
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  8,
  "WBTC",
  "Wrapped BTC"
);

export const STABLE_COIN = {
  [ChainId.MODE_MAINNET]: USDT[ChainId.MODE_MAINNET],
  [ChainId.MODE_TESTNET]: USDC[ChainId.MODE_TESTNET],
} satisfies Record<ChainId, ERC20Token>;
