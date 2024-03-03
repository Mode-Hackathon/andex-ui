import { ChainId } from "@pancakeswap/chains";
import { ANDX, goerliTestnetTokens } from "@pancakeswap/tokens";
import { useActiveChainId } from "hooks/useActiveChainId";
import useTokenBalance from "hooks/useTokenBalance";
import { useMemo } from "react";

// @notice: return only bsc or bsc-testnet cake token balance
export const useBSCCakeBalance = () => {
  const { chainId } = useActiveChainId();
  const cakeAddress = useMemo(() => {
    if (ChainId.MODE_MAINNET === chainId)
      return ANDX[chainId as ChainId].address;
    if (ChainId.MODE_TESTNET === chainId)
      return goerliTestnetTokens.cake.address;
    return undefined;
  }, [chainId]);
  const { balance } = useTokenBalance(cakeAddress);

  return balance;
};
