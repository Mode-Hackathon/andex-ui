import { ChainId } from "@pancakeswap/chains";
import FixedStaking from "views/FixedStaking";

const FixedStakingPage = () => {
  return <FixedStaking />;
};

FixedStakingPage.chains = [ChainId.MODE_MAINNET];

export default FixedStakingPage;
