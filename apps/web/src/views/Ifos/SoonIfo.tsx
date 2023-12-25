import { goerliTestnetTokens } from "@pancakeswap/tokens";

// import { useFetchIfo, useIfoCredit } from "state/pools/hooks";
import { useActiveChainId } from "hooks/useActiveChainId";

import IfoContainer from "./components/IfoContainer";
import IfoSteps from "./components/IfoSteps";
import ComingSoonSection from "./components/ComingSoonSection";
import { useICakeBridgeStatus } from "./hooks/useIfoCredit";
import BigNumber from "bignumber.js";

const SoonIfo = () => {
  // useFetchIfo();
  const { chainId } = useActiveChainId();
  // const ifoCredit = useIfoCredit();
  const ifoCredit = new BigNumber(0);
  const { sourceChainCredit } = useICakeBridgeStatus({
    ifoChainId: chainId,
    ifoCredit,
  });
  return (
    <IfoContainer
      ifoSection={<ComingSoonSection />}
      ifoSteps={
        <IfoSteps
          isLive={false}
          hasClaimed={false}
          isCommitted={false}
          ifoCurrencyAddress={goerliTestnetTokens.cake.address}
          sourceChainIfoCredit={sourceChainCredit}
        />
      }
    />
  );
};

export default SoonIfo;
