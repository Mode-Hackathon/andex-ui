import { DefaultSeoProps } from "next-seo";

export const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Andex",
  defaultTitle: "Andex",
  description:
    "Cheaper and faster than Uniswap? Discover Andex, the leading DEX on MODE with the best farms in DeFi and a lottery for ANDX.",
  twitter: {
    cardType: "summary_large_image",
    handle: "@Andex",
    site: "@Andex",
  },
  openGraph: {
    title: " Andex - A next evolution DeFi exchange on MODE",
    description:
      "The most popular AMM on BSC by user count! Earn ANDX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Andex), NFTs, and more, on a platform you can trust.",
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
};
