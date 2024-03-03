import { ChainId } from "@pancakeswap/chains";

import { ANDX_FLEXIBLE_SIDE_VAULT, ANDX_VAULT } from "../constants/contracts";
import { getContractAddress } from "../utils";

export function getCakeFlexibleSideVaultAddress(chainId: ChainId) {
  return getContractAddress(ANDX_FLEXIBLE_SIDE_VAULT, chainId);
}

export function getCakeVaultAddress(chainId: ChainId) {
  return getContractAddress(ANDX_VAULT, chainId);
}
