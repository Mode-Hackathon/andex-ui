import { useTranslation } from "@pancakeswap/localization";
import {
  AddIcon,
  Balance,
  Flex,
  IconButton,
  Message,
  MessageText,
  MinusIcon,
  Skeleton,
  Text,
  useModal,
} from "@pancakeswap/uikit";
import { Pool } from "@pancakeswap/widgets-internal";
import { LearnMoreLink } from "views/CakeStaking/components/SyrupPool";
import { useIsMigratedToVeCake } from "views/CakeStaking/hooks/useIsMigratedToVeCake";

import { Token } from "@pancakeswap/sdk";
import { getBalanceNumber } from "@pancakeswap/utils/formatBalance";
import BigNumber from "bignumber.js";
import { LightGreyCard } from "components/Card";
import { useCakePrice } from "hooks/useCakePrice";
// import { useVaultPoolByKey } from 'state/pools/hooks'
import { getVaultPosition, VaultPosition } from "utils/cakePool";
import NotEnoughTokensModal from "../../Modals/NotEnoughTokensModal";
import VaultStakeModal from "../VaultStakeModal";

interface HasStakeActionProps {
  pool: Pool.DeserializedPool<Token>;
  stakingTokenBalance: BigNumber;
  performanceFee: number;
}

const HasSharesActions: React.FC<
  React.PropsWithChildren<HasStakeActionProps>
> = ({ pool, stakingTokenBalance, performanceFee }) => {
  // const { userData } = useVaultPoolByKey(pool.vaultKey)
  const { userData } = { userData: {} as any };

  const {
    balance: { cakeAsBigNumber, cakeAsNumberBalance },
  } = userData;
  const isMigratedToVeCake = useIsMigratedToVeCake();

  const lockPosition = getVaultPosition(userData);

  const { stakingToken } = pool;
  const { t } = useTranslation();
  const cakePriceBusd = useCakePrice();
  const stakedDollarValue = cakePriceBusd.gt(0)
    ? getBalanceNumber(
        cakeAsBigNumber.multipliedBy(cakePriceBusd),
        stakingToken.decimals
      )
    : 0;

  const [onPresentTokenRequired] = useModal(
    <NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />
  );
  const [onPresentStake] = useModal(
    <VaultStakeModal
      stakingMax={stakingTokenBalance}
      performanceFee={performanceFee}
      pool={pool}
    />
  );
  const [onPresentUnstake] = useModal(
    <VaultStakeModal
      stakingMax={cakeAsBigNumber}
      pool={pool}
      isRemovingStake
    />,
    true,
    true,
    `withdraw-vault-${pool.sousId}-${pool.vaultKey}`
  );
  return (
    <LightGreyCard>
      <Flex mb="16px" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <Balance
            fontSize="20px"
            bold
            value={cakeAsNumberBalance}
            decimals={5}
          />
          <Text as={Flex} fontSize="12px" color="textSubtle" flexWrap="wrap">
            {cakePriceBusd.gt(0) ? (
              <Balance
                value={stakedDollarValue}
                fontSize="12px"
                color="textSubtle"
                decimals={2}
                prefix="~"
                unit=" USD"
              />
            ) : (
              <Skeleton mt="1px" height={16} width={64} />
            )}
          </Text>
        </Flex>
        <Flex>
          <IconButton
            variant="secondary"
            onClick={() => {
              onPresentUnstake();
            }}
            mr="6px"
          >
            <MinusIcon color="primary" width="24px" />
          </IconButton>
          <IconButton
            disabled
            variant="secondary"
            onClick={
              stakingTokenBalance.gt(0)
                ? onPresentStake
                : onPresentTokenRequired
            }
          >
            <AddIcon color="primary" width="24px" height="24px" />
          </IconButton>
        </Flex>
      </Flex>
      <Message variant="warning" mb="16px">
        <MessageText>
          {lockPosition === VaultPosition.Flexible ? (
            <>
              {t(
                "Flexible ANDX pool is discontinued and no longer distributing rewards."
              )}
              <LearnMoreLink withArrow />
            </>
          ) : isMigratedToVeCake ? (
            t(
              "Extending or adding ANDX is not available for migrated positions. To get more veANDX, withdraw from the unlocked ANDX pool position, and add ANDX to veANDX."
            )
          ) : (
            t(
              "The lock period has ended. To get more veANDX, withdraw from the unlocked ANDX pool position, and add ANDX to veANDX."
            )
          )}
        </MessageText>
      </Message>
    </LightGreyCard>
  );
};

export default HasSharesActions;
