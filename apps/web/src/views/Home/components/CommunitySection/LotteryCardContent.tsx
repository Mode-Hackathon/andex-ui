import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Skeleton,
  Button,
  ArrowForwardIcon,
  Balance,
} from "@pancakeswap/uikit";
import { NextLinkFromReactRouter } from "@pancakeswap/widgets-internal";

import { useTranslation } from "@pancakeswap/localization";
import { useIntersectionObserver } from "@pancakeswap/hooks";
import { useCakePrice } from "hooks/useCakePrice";
import { styled } from "styled-components";
import { fetchLottery, fetchCurrentLotteryId } from "state/lottery/helpers";
import { getBalanceAmount } from "@pancakeswap/utils/formatBalance";
import { SLOW_INTERVAL } from "config/constants";
import { useQuery } from "@tanstack/react-query";

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`;

const StyledBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradientGold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LotteryCardContent = () => {
  const { t } = useTranslation();
  const { observerRef, isIntersecting } = useIntersectionObserver();
  const [loadData, setLoadData] = useState(false);
  const cakePriceBusd = useCakePrice();
  const { data: currentLotteryId } = useQuery(
    ["currentLotteryId"],
    fetchCurrentLotteryId,
    {
      enabled: Boolean(loadData),
      refetchInterval: SLOW_INTERVAL,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const { data: currentLottery } = useQuery(
    ["currentLottery"],
    async () => fetchLottery(currentLotteryId?.toString() ?? ""),
    {
      enabled: Boolean(loadData),
      refetchInterval: SLOW_INTERVAL,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const cakePrizesText = t("%cakePrizeInUsd% in ANDX prizes this round", {
    cakePrizeInUsd: cakePriceBusd.toString(),
  });
  const [pretext, prizesThisRound] = cakePrizesText.split(
    cakePriceBusd.toString()
  );
  const amountCollectedInCake = currentLottery
    ? parseFloat(currentLottery.amountCollectedInCake)
    : null;
  const currentLotteryPrize = amountCollectedInCake
    ? cakePriceBusd.times(amountCollectedInCake)
    : null;

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true);
    }
  }, [isIntersecting]);

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="white" bold fontSize="16px">
          {t("Lottery")}
        </Text>
        {pretext && (
          <Text color="white" mt="12px" bold fontSize="16px">
            {pretext}
          </Text>
        )}
        {currentLotteryPrize && currentLotteryPrize.gt(0) ? (
          <StyledBalance
            fontSize="40px"
            bold
            prefix="$"
            decimals={0}
            value={getBalanceAmount(currentLotteryPrize).toNumber()}
          />
        ) : (
          <>
            <Skeleton width={200} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )}
        <Text color="white" mb="24px" bold fontSize="16px">
          {prizesThisRound}
        </Text>
        <Text color="white" mb="40px">
          {t("Buy tickets with ANDX, win ANDX if your numbers match")}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="/lottery" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {t("Buy Tickets")}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  );
};

export default LotteryCardContent;
