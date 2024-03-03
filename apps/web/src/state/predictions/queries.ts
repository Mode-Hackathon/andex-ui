import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from "./bnbQueries";
import {
  roundBaseFields as roundBaseFieldsANDX,
  betBaseFields as betBaseFieldsANDX,
  userBaseFields as userBaseFieldsANDX,
} from "./cakeQueries";

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === "ANDX" ? roundBaseFieldsANDX : roundBaseFieldsBNB;

export const getBetBaseFields = (tokenSymbol: string) =>
  tokenSymbol === "ANDX" ? betBaseFieldsANDX : betBaseFieldsBNB;

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === "ANDX" ? userBaseFieldsANDX : userBaseFieldsBNB;
