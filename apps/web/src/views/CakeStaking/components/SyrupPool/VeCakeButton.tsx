import { memo } from "react";
import { Button } from "@pancakeswap/uikit";
import { useRouter } from "next/router";
import { useTranslation } from "@pancakeswap/localization";

const BUTTON_TEXT = {
  get: "Get veANDX now!",
  migrate: "Migrate to veANDX",
  check: "Check out veANDX",
};

export const VeCakeButton: React.FC<{ type: "get" | "migrate" | "check" }> =
  memo(({ type }) => {
    const { push } = useRouter();
    const { t } = useTranslation();
    return (
      <Button
        width="100%"
        onClick={() => {
          push("/cake-staking");
        }}
      >
        {t(BUTTON_TEXT[type])}
      </Button>
    );
  });
