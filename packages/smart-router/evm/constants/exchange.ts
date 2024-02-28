import { ERC20Token, Token, WNATIVE } from "@pancakeswap/sdk";
import { ChainId } from "@pancakeswap/chains";
import {
  // bscTokens,
  // bscTestnetTokens,
  BUSD,
  USDC,
  USDT,
  WBTC_ETH,
  // arbitrumTokens,
  // arbitrumGoerliTokens,
  // ethereumTokens,
  // polygonZkEvmTokens,
  // polygonZkEvmTestnetTokens,
  // zksyncTokens,
  // zkSyncTestnetTokens,
  // lineaTestnetTokens,
  // baseTokens,
  // baseTestnetTokens,
  // opBnbTokens,
  // opBnbTestnetTokens,
  // scrollSepoliaTokens,
  // lineaTokens,
} from "@pancakeswap/tokens";

import { ChainMap, ChainTokenList } from "../types";
//TODO: change config where necessary

export const SMART_ROUTER_ADDRESSES = {
  [ChainId.MODE_MAINNET]: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
  [ChainId.MODE_TESTNET]: "0x2A193304AE9f9D257Db06A94adE9cCcdf22b08B6",
} as const satisfies Record<ChainId, string>;

export const V2_ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.MODE_MAINNET]: "0xEfF92A263d31888d860bD50809A8D171709b7b1c",
  [ChainId.MODE_TESTNET]: "0x62220159918f2797ACFAeA6bD5D70291d216D532",
};

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<string> = {
  [ChainId.MODE_MAINNET]: "",
  [ChainId.MODE_TESTNET]: "0xB579E4E5C659F473E8541a9F57cA9650532cEC50",
  // [ChainId.MODE_MAINNET]: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
  // [ChainId.MODE_TESTNET]: '0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546',
};

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MODE_MAINNET]: [
    WNATIVE[ChainId.MODE_MAINNET],
    USDC[ChainId.MODE_MAINNET],
    USDT[ChainId.MODE_MAINNET],
    WBTC_ETH,
  ],
  [ChainId.MODE_TESTNET]: [WNATIVE[ChainId.MODE_TESTNET]],
};

// const czusd = new ERC20Token(ChainId.MODE_MAINNET, '0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70', 18, 'CZUSD', 'CZUSD')

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  // [ChainId.MODE_MAINNET]: {
  // SNFTS-SFUND
  //   [bscTokens.snfts.address]: [bscTokens.sfund],
  //   [bscTokens.ankr.address]: [bscTokens.ankrbnb],
  //   [bscTokens.ankrbnb.address]: [bscTokens.ankrETH, bscTokens.ankr],
  //   [bscTokens.ankrETH.address]: [bscTokens.ankrbnb],
  //   // REVV - EDU
  //   [bscTokens.revv.address]: [bscTokens.edu],
  //   [bscTokens.edu.address]: [bscTokens.revv],
  //   // unshETH - USH
  //   [bscTokens.unshETH.address]: [bscTokens.ush],
  //   [bscTokens.ush.address]: [bscTokens.unshETH],
  //   [bscTokens.tusd.address]: [bscTokens.usdd],
  //   [bscTokens.usdd.address]: [bscTokens.tusd],
  //   // pancakeswap/pancake-frontend#7909
  //   // LSDT
  //   '0xAa83Bb1Be2a74AaA8795a8887054919A0Ea96BFA': [czusd],
  //   // GEM
  //   '0x701F1ed50Aa5e784B8Fb89d1Ba05cCCd627839a7': [czusd],
  //   // DOGD
  //   '0x99F4cc2BAE97F82A823CA80DcAe52EF972B7F270': [czusd],
  // },
  // [ChainId.ETHEREUM]: {
  //   // alETH - ALCX
  //   [ethereumTokens.alcx.address]: [ethereumTokens.alETH],
  //   [ethereumTokens.alETH.address]: [ethereumTokens.alcx],
  //   // rETH - ETH
  //   [ethereumTokens.weth.address]: [ethereumTokens.rETH],
  // },
  // [ChainId.BASE]: {
  //   // axlusdc - USDbC
  //   [baseTokens.axlusdc.address]: [baseTokens.usdbc],
  //   [baseTokens.usdbc.address]: [baseTokens.axlusdc],
  // },
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.MODE_MAINNET]]
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  // [ChainId.MODE_MAINNET]: {
  //   [bscTokens.axlusdc.address]: [bscTokens.usdt],
  // },
};
