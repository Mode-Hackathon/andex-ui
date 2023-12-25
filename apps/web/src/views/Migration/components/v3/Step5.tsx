import { useTranslation } from "@pancakeswap/localization";
import { Heading, AtomBox } from "@pancakeswap/uikit";
import { useMemo } from "react";
import { useCakePrice } from "hooks/useCakePrice";
// import { useFarmsV3WithPositionsAndBooster } from 'state/farmsV3/hooks'
// import FarmTable from 'views/Farms/components/FarmTable/FarmTable'
// import { useCakeVaultUserData } from 'state/pools/hooks'
// import { V3FarmWithoutStakedValue } from 'views/Farms/FarmsV3'
import { useAccount } from "wagmi";

export function Step5() {
  // const { farmsWithPositions: farmsV3, userDataLoaded: v3UserDataLoaded } = useFarmsV3WithPositionsAndBooster()
  const { farmsWithPositions: farmsV3, userDataLoaded: v3UserDataLoaded } = {
    farmsWithPositions: [],
    userDataLoaded: {},
  };

  const { address: account } = useAccount();

  const farmsLP = useMemo(
    () => farmsV3.map((f: any) => ({ ...f, version: 3 } as any)),
    [farmsV3]
  );

  const userDataReady = !account || (!!account && v3UserDataLoaded);
  // useCakeVaultUserData()

  const cakePrice = useCakePrice();

  const { t } = useTranslation();

  return (
    <>
      {/* <FarmTable
        header={
          <AtomBox borderTopRadius="32px" p="24px" bg="gradientCardHeader">
            <Heading>{t("Farms")}</Heading>
          </AtomBox>
        }
        farms={farmsLP}
        cakePrice={cakePrice}
        userDataReady={userDataReady}
      /> */}
      <div>Tjis is supposed to be a farm table</div>
    </>
  );
}
