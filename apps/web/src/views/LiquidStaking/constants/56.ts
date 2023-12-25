import { NATIVE, WETH9 } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { goerliTestnetTokens } from '@pancakeswap/tokens'
import { LiquidStakingList, FunctionName } from 'views/LiquidStaking/constants/types'
import { WBETH, SNBNB } from 'config/constants/liquidStaking'
// FAQs
import { EthWbethFaq } from 'views/LiquidStaking/constants/FAQs/EthWbethFaq'
import { BnbSnbnbFaq } from 'views/LiquidStaking/constants/FAQs/BnbSnbnbFaq'
// ABI
import { wbethBscABI } from 'config/abi/wbethBSC'
import { snBnbABI } from 'config/abi/snBNB'

const liquidStaking: LiquidStakingList[] = [
  {
    stakingSymbol: 'ETH / wBETH',
    contract: WBETH[ChainId.MODE_MAINNET],
    token0: WETH9[ChainId.MODE_MAINNET],
    token1: goerliTestnetTokens.weth,
    abi: wbethBscABI,
    shouldCheckApproval: true,
    approveToken: WETH9[ChainId.MODE_MAINNET],
    aprUrl: 'https://www.binance.com/bapi/earn/v1/public/pos/cftoken/project/getPurchasableProject',
    exchangeRateMultiCall: [
      {
        abi: wbethBscABI,
        address: WBETH[ChainId.MODE_MAINNET],
        functionName: FunctionName.exchangeRate,
      },
    ],
    stakingMethodArgs: ['convertedStakeAmount', 'masterChefAddress'],
    stakingOverrides: [],
    FAQs: EthWbethFaq(),
  }
]

export default liquidStaking
