import { Bet, PredictionUser } from "state/types";
import {
  transformRoundResponseToken,
  transformUserResponseToken,
  transformBetResponseToken,
} from "./tokenTransformers";

export const transformBetResponseANDX = (betResponse): Bet => {
  const baseBet = transformBetResponseToken(betResponse);
  const bet = {
    ...baseBet,
    claimedBNB: betResponse.claimedANDX
      ? parseFloat(betResponse.claimedANDX)
      : 0,
    claimedNetBNB: betResponse.claimedNetANDX
      ? parseFloat(betResponse.claimedNetANDX)
      : 0,
  } as Bet;

  if (betResponse.user) {
    bet.user = transformUserResponseANDX(betResponse.user);
  }

  if (betResponse.round) {
    bet.round = transformRoundResponseToken(
      betResponse.round,
      transformBetResponseANDX
    );
  }

  return bet;
};

export const transformUserResponseANDX = (userResponse): PredictionUser => {
  const baseUserResponse = transformUserResponseToken(userResponse);
  const {
    totalANDX,
    totalANDXBull,
    totalANDXBear,
    totalANDXClaimed,
    averageANDX,
    netANDX,
  } = userResponse || {};

  return {
    ...baseUserResponse,
    totalBNB: totalANDX ? parseFloat(totalANDX) : 0,
    totalBNBBull: totalANDXBull ? parseFloat(totalANDXBull) : 0,
    totalBNBBear: totalANDXBear ? parseFloat(totalANDXBear) : 0,
    totalBNBClaimed: totalANDXClaimed ? parseFloat(totalANDXClaimed) : 0,
    averageBNB: averageANDX ? parseFloat(averageANDX) : 0,
    netBNB: netANDX ? parseFloat(netANDX) : 0,
  };
};
