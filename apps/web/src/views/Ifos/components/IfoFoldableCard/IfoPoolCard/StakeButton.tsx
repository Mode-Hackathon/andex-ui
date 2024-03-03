import { useTranslation } from "@pancakeswap/localization";
import {
  isCakeVaultSupported,
  ANDX_VAULT_SUPPORTED_CHAINS,
} from "@pancakeswap/pools";
import { SpaceProps } from "styled-system";
import { useMemo } from "react";
import { Button, useModalV2, Flex, Text } from "@pancakeswap/uikit";

import { useActiveChainId } from "hooks/useActiveChainId";

import { NetworkSwitcherModal } from "./NetworkSwitcherModal";
import { useChainNames } from "../../../hooks/useChainNames";
import { ICakeLogo } from "../../Icons";

type Props = SpaceProps;

export function StakeButton(props: Props) {
  const { chainId } = useActiveChainId();
  const cakeVaultSupported = useMemo(
    () => isCakeVaultSupported(chainId),
    [chainId]
  );
  const { t } = useTranslation();
  const { onOpen, onDismiss, isOpen } = useModalV2();
  const chainNames = useChainNames(ANDX_VAULT_SUPPORTED_CHAINS);

  const tips = (
    <Flex flexDirection="column" justifyContent="flex-start">
      <ICakeLogo />
      <Text mt="0.625rem">
        {t(
          "Stake ANDX to obtain iANDX - in order to be eligible in this public sale."
        )}
      </Text>
    </Flex>
  );

  return !cakeVaultSupported ? (
    <>
      <NetworkSwitcherModal
        isOpen={isOpen}
        supportedChains={ANDX_VAULT_SUPPORTED_CHAINS}
        title={t("Stake ANDX")}
        description={t("Lock ANDX on %chain% to obtain iANDX", {
          chain: chainNames,
        })}
        buttonText={t("Switch chain to stake ANDX")}
        onDismiss={onDismiss}
        tips={tips}
      />
      <Button width="100%" onClick={onOpen} {...props}>
        {t("Stake ANDX")}
      </Button>
    </>
  ) : null;
}
