import { ChainId } from "@pancakeswap/chains";

export const PANANDX_EXTENDED =
  "https://tokens.pancakeswap.finance/pancakeswap-extended.json";

const COINGECKO = "https://tokens.pancakeswap.finance/coingecko.json";
const PANANDX_ETH_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-eth-default.json";
const PANANDX_ZKSYNC_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-zksync-default.json";
const PANANDX_POLYGON_ZKEVM_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-polygon-zkevm-default.json";
const PANANDX_ARB_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-arbitrum-default.json";
const PANANDX_LINEA_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-linea-default.json";
const PANANDX_BASE_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-base-default.json";
const PANANDX_OPBNB_DEFAULT =
  "https://tokens.pancakeswap.finance/pancakeswap-opbnb-default.json";

export const PANANDX_ETH_MM =
  "https://tokens.pancakeswap.finance/pancakeswap-eth-mm.json";
export const PANANDX_BSC_MM =
  "https://tokens.pancakeswap.finance/pancakeswap-bnb-mm.json";

const COINGECKO_ETH = "https://tokens.coingecko.com/uniswap/all.json";
// export const CMC = 'https://tokens.pancakeswap.finance/cmc.json' // not updated for a while

const ETH_URLS = [PANANDX_ETH_DEFAULT, PANANDX_ETH_MM, COINGECKO_ETH];
const BSC_URLS = [PANANDX_EXTENDED, COINGECKO, PANANDX_BSC_MM];
const POLYGON_ZKEVM_URLS = [
  PANANDX_POLYGON_ZKEVM_DEFAULT,
  "https://tokens.coingecko.com/polygon-zkevm/all.json",
];
const ARBITRUM_URLS = [
  PANANDX_ARB_DEFAULT,
  "https://tokens.coingecko.com/arbitrum-one/all.json",
];
const LINEA_URLS = [
  PANANDX_LINEA_DEFAULT,
  "https://tokens.coingecko.com/linea/all.json",
];
const ZKSYNC_URLS = [
  PANANDX_ZKSYNC_DEFAULT,
  "https://tokens.coingecko.com/zksync/all.json",
];
const OP_SUPER_CHAIN_URL =
  "https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json";
const BASE_URLS = [
  PANANDX_BASE_DEFAULT,
  OP_SUPER_CHAIN_URL,
  "https://tokens.coingecko.com/base/all.json",
];
const OPBNB_URLS = [PANANDX_OPBNB_DEFAULT];

// List of official tokens list
export const OFFICIAL_LISTS = [PANANDX_EXTENDED, PANANDX_ETH_DEFAULT];

export const UNSUPPORTED_LIST_URLS: string[] = [];
export const WARNING_LIST_URLS: string[] = [];

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...BSC_URLS,
  ...ETH_URLS,
  ...ZKSYNC_URLS,
  ...LINEA_URLS,
  ...POLYGON_ZKEVM_URLS,
  ...BASE_URLS,
  ...ARBITRUM_URLS,
  OP_SUPER_CHAIN_URL,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
  ...OPBNB_URLS,
];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
  PANANDX_EXTENDED,
  PANANDX_ETH_DEFAULT,
  PANANDX_ETH_MM,
  PANANDX_BSC_MM,
  PANANDX_ETH_DEFAULT,
  PANANDX_POLYGON_ZKEVM_DEFAULT,
  PANANDX_ZKSYNC_DEFAULT,
  PANANDX_ARB_DEFAULT,
  PANANDX_LINEA_DEFAULT,
  PANANDX_BASE_DEFAULT,
  PANANDX_OPBNB_DEFAULT,
  OP_SUPER_CHAIN_URL,
];

export const MULTI_CHAIN_LIST_URLS: { [chainId: number]: string[] } = {
  [ChainId.MODE_MAINNET]: BSC_URLS,
  // [ChainId.ETHEREUM]: ETH_URLS,
  // [ChainId.ZKSYNC]: ZKSYNC_URLS,
  // [ChainId.POLYGON_ZKEVM]: POLYGON_ZKEVM_URLS,
  // [ChainId.ARBITRUM_ONE]: ARBITRUM_URLS,
  // [ChainId.LINEA]: LINEA_URLS,
  // [ChainId.BASE]: BASE_URLS,
  // [ChainId.OPBNB]: OPBNB_URLS,
};
