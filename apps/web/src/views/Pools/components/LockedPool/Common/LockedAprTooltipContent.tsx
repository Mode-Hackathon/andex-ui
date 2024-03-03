import { useTranslation } from "@pancakeswap/localization";

export default function LockedAprTooltipContent() {
  const { t } = useTranslation();
  return (
    <>
      {t(
        "To continue receiving ANDX rewards, please migrate your Fixed-Term Staking ANDX Balance to veANDX"
      )}
    </>
  );
}
