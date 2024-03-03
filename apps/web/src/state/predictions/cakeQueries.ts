import { UserResponse, BetResponse, RoundResponse } from "./responseType";

export interface UserResponseANDX extends UserResponse<BetResponseANDX> {
  totalANDX: string;
  totalANDXBull: string;
  totalANDXBear: string;
  averageANDX: string;
  totalANDXClaimed: string;
  netANDX: string;
}

export interface BetResponseANDX extends BetResponse {
  claimedANDX: string;
  claimedNetANDX: string;
  user?: UserResponseANDX;
  round?: RoundResponseANDX;
}

export type RoundResponseANDX = RoundResponse<BetResponseANDX>;

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`;

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedANDX
 claimedNetANDX
 createdAt
 updatedAt
`;

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalANDX
  totalANDXBull
  totalANDXBear
  totalBetsClaimed
  totalANDXClaimed
  winRate
  averageANDX
  netANDX
`;
