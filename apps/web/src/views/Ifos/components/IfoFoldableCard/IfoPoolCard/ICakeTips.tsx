import { useTranslation } from "@pancakeswap/localization";
import { ChainId } from "@pancakeswap/sdk";
import BigNumber from "bignumber.js";

import { StakeButton } from "./StakeButton";
import { useICakeBridgeStatus } from "../../../hooks/useIfoCredit";
import { useChainNames } from "../../../hooks/useChainNames";
import { BridgeButton } from "./BridgeButton";
import { WarningTips, LinkTitle, ContentText } from "../../WarningTips";

type Props = {
  ifoId: string;

  ifoChainId: ChainId;
  // Ifo credit on destination chain, i.e. the chain on which ifo is hosted
  ifoCredit?: BigNumber;
};

export function ICakeTips({ ifoChainId, ifoCredit, ifoId }: Props) {
  const { t } = useTranslation();
  const {
    noICake,
    hasBridged,
    shouldBridgeAgain,
    sourceChainCredit,
    destChainCredit,
  } = useICakeBridgeStatus({
    ifoChainId,
    ifoCredit,
  });
  const chainName = useChainNames([ifoChainId]);

  if (hasBridged) {
    return (
      <BridgeButton
        mt="0.625rem"
        ifoChainId={ifoChainId}
        icake={sourceChainCredit}
        dstIcake={destChainCredit}
        buttonVisible={false}
        ifoId={ifoId}
      />
    );
  }

  const tips = noICake
    ? t("You don’t have any iANDX available for IFO public sale.")
    : shouldBridgeAgain
    ? t(
        "Bridge iANDX again if you have extended your ANDX staking or added more ANDX"
      )
    : t("Bridge your iANDX to participate this sale on %chain%", {
        chain: chainName,
      });

  const action = noICake ? (
    <StakeButton />
  ) : (
    <BridgeButton
      ifoChainId={ifoChainId}
      icake={sourceChainCredit}
      dstIcake={destChainCredit}
      ifoId={ifoId}
    />
  );

  return (
    <WarningTips
      mt="1.5rem"
      action={action}
      title={
        !shouldBridgeAgain && (
          <LinkTitle href="/ifo#ifo-how-to">
            {t("How to Take Part")} »
          </LinkTitle>
        )
      }
      content={<ContentText>{tips}</ContentText>}
    />
  );
}
