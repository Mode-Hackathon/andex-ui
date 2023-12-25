import getLpAddress from 'utils/getLpAddress'
import { goerliTestnetTokens } from '@pancakeswap/tokens'
import { FarmAuctionBidderConfig } from './types'

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
  // Those farms changed their project wallet address.

].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: goerliTestnetTokens.weth,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
