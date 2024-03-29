import { MAX_VEANDX_LOCK_WEEKS, WEEK } from "config/constants/veCake";
import BN from "bignumber.js";

export const getVeCakeAmount = (
  cakeToLocked: number | bigint | string,
  seconds: number | string
): number => {
  return new BN(String(cakeToLocked || 0))
    .times(seconds || 0)
    .div(MAX_VEANDX_LOCK_WEEKS * WEEK)
    .toNumber();
};
