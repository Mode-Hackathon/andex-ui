import addresses from "config/constants/contracts";

import {
  GRAPH_API_PREDICTION_ANDX,
  GRAPH_API_PREDICTION_BNB,
} from "config/constants/endpoints";
import { getAddressFromMap } from "utils/addressHelpers";
import { goerliTestnetTokens } from "@pancakeswap/tokens";

export default {
  BNB: {
    address: getAddressFromMap(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddressFromMap(addresses.chainlinkOracleBNB),
    displayedDecimals: 4,
    token: goerliTestnetTokens.weth,
  },
  ANDX: {
    address: getAddressFromMap(addresses.predictionsANDX),
    api: GRAPH_API_PREDICTION_ANDX,
    chainlinkOracleAddress: getAddressFromMap(addresses.chainlinkOracleANDX),
    displayedDecimals: 4,
    token: goerliTestnetTokens.cake,
  },
};
