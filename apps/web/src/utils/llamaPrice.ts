import { ChainId } from "@pancakeswap/chains";
import { ANDX } from "@pancakeswap/tokens";
import { getCakePriceFromOracle } from "hooks/useCakePrice";

const CHAIN_MAPPING = {
  // [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.MODE_MAINNET]: "mode",
} as const satisfies Record<number, string>;

// use for fetch usd outside of the liquidity pools on Andex
export const fetchTokenUSDValue = async (
  chainId: number,
  tokenAddresses: string[]
) => {
  if (!tokenAddresses.length || !CHAIN_MAPPING[chainId])
    return new Map<string, string>();

  const list = tokenAddresses
    .map((address) => `${CHAIN_MAPPING[chainId]}:${address}`)
    .join(",");

  let tokenPriceArray: { coins: { [key: string]: { price: string } } } = {
    coins: {},
  };

  await fetch(`https://coins.llama.fi/prices/current/${list}`).then(
    async (res) => {
      const data = await res.json();
      tokenPriceArray = {
        coins: {
          ...tokenPriceArray.coins,
          ...data.coins,
        },
      };
    }
  );

  const commonTokenUSDValue = new Map<string, string>();

  const cakeAddress = tokenAddresses
    .map((address) =>
      address.toLowerCase() === ANDX?.[chainId]?.address?.toLowerCase()
        ? `${CHAIN_MAPPING[chainId]}:${address}`
        : ""
    )
    .filter(Boolean);

  if (cakeAddress.length > 0) {
    const cakePrice = parseFloat((await getCakePriceFromOracle()).toString());
    cakeAddress.forEach((address) => {
      tokenPriceArray = {
        coins: {
          ...tokenPriceArray.coins,
          [address]: {
            price: cakePrice.toString(),
          },
        },
      };
    });
  }

  Object.entries(tokenPriceArray.coins || {}).forEach(([key, value]) => {
    const [, address] = key.split(":");
    commonTokenUSDValue.set(address, value.price);
  });

  return commonTokenUSDValue;
};
