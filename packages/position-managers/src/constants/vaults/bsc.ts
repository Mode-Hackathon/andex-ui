// import { bscTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { Strategy, VaultConfig } from '../../types'
import { MANAGER } from '../managers'

export const vaults: VaultConfig[] = [
  // {
  //   id: 11,
  //   idByManager: 7,
  //   name: 'BRIL',
  //   address: '0x1De20A5825ADFc665F634A2A7A3b1c9e3D0d2987',
  //   adapterAddress: '0xD2EE2ed27963E91c0860AbAEfd0590A546342c83',
  //   currencyA: bscTokens.eth,
  //   currencyB: bscTokens.usdc,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOW,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 1,
  //   idByManager: 1,
  //   name: 'BRIL',
  //   address: '0xF8C4d24Af47cBD87E3C8Cc368fcd7e3cd2a13083',
  //   adapterAddress: '0x6F34909c663e6E6dA32b73f0aa5aD7bdABf21a63',
  //   currencyA: bscTokens.cake,
  //   currencyB: bscTokens.usdt,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.MEDIUM,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   priceFromV3FarmPid: 3,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 2,
  //   idByManager: 2,
  //   name: 'BRIL',
  //   address: '0x799Ea58D15429fa7C42cc211e2181FD4EF54ec37',
  //   adapterAddress: '0x443454bd4916E84EB3de7b50F4D7f6B384E72457',
  //   currencyA: bscTokens.usdt,
  //   currencyB: bscTokens.wbnb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOW,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: true,
  //   allowDepositToken1: false,
  //   priceFromV3FarmPid: 5,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 3,
  //   idByManager: 3,
  //   name: 'BRIL',
  //   address: '0xCd03B3757BC956e312F639dA1661d18DB7e72ED7',
  //   adapterAddress: '0x2cFE4c59286D06630eA9f6Da8b2887BaC1AD9c4C',
  //   currencyA: bscTokens.cake,
  //   currencyB: bscTokens.wbnb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.MEDIUM,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   priceFromV3FarmPid: 1,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 4,
  //   idByManager: 4,
  //   name: 'BRIL',
  //   address: '0x2044bCaaDa8370b4ee8Ad47DaAD290B80878D068',
  //   adapterAddress: '0x259C5a1f3482C3988c546745A876E3f1017533df',
  //   currencyA: bscTokens.usdt,
  //   currencyB: bscTokens.btcb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOW,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   priceFromV3FarmPid: 7,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 5,
  //   idByManager: 5,
  //   name: 'BRIL',
  //   address: '0x819c1C2FeF70Eb45919Ce7c7936cC0da95E30A33',
  //   adapterAddress: '0x0CD23a6DcDF86535dF5b160E0adc0C7C46f80BaC',
  //   currencyA: bscTokens.cake,
  //   currencyB: bscTokens.btcb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.MEDIUM,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 6,
  //   idByManager: 6,
  //   name: 'BRIL',
  //   address: '0x7216B5ae51a459Add75Dc3d0f1B030996da82aE0',
  //   adapterAddress: '0xdE4810cF706F2df6a4Ab063D7008a575Fb2B6c4C',
  //   currencyA: bscTokens.cake,
  //   currencyB: bscTokens.eth,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.MEDIUM,
  //   strategy: Strategy.YIELD_IQ,
  //   manager: MANAGER.BRIL,
  //   isSingleDepositToken: true,
  //   allowDepositToken0: false,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.bril.finance/',
  //   strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
  //   learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  // },
  // {
  //   id: 7,
  //   idByManager: 1,
  //   name: 'RANGE',
  //   address: '0x00da85bD6C4e417f9EfC07807d6a0381045B037C',
  //   adapterAddress: '0x81dA9a3bE0490E23e0D5d31A0fC542405E45d7Ff',
  //   currencyA: bscTokens.usdt,
  //   currencyB: bscTokens.wbnb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOW,
  //   strategy: Strategy.PASSIVE,
  //   manager: MANAGER.RANGE,
  //   isSingleDepositToken: false,
  //   allowDepositToken0: true,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.rangeprotocol.com/',
  //   strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  //   learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  // },
  // {
  //   id: 8,
  //   idByManager: 2,
  //   name: 'RANGE',
  //   address: '0xA43f877b66BBaaBE41eB1E538549F2fA45aceBD4',
  //   adapterAddress: '0x2eF089d192E4b48544049900A22472cFDB384898',
  //   currencyA: bscTokens.usdt,
  //   currencyB: bscTokens.wbnb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOW,
  //   strategy: Strategy.ACTIVE,
  //   manager: MANAGER.RANGE,
  //   isSingleDepositToken: false,
  //   allowDepositToken0: true,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.rangeprotocol.com/',
  //   strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  //   learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  // },
  // {
  //   id: 9,
  //   idByManager: 3,
  //   name: 'RANGE',
  //   address: '0xe521f04d91721ba3F91E6E8E4d3cE16A2CaA8b3e',
  //   adapterAddress: '0x517C545BB754164cE1b416aA512cA80c72092Ae3',
  //   currencyA: bscTokens.usdt,
  //   currencyB: bscTokens.usdc,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.LOWEST,
  //   strategy: Strategy.PEGGED,
  //   manager: MANAGER.RANGE,
  //   isSingleDepositToken: false,
  //   allowDepositToken0: true,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.rangeprotocol.com/',
  //   strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  //   learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  // },
  // {
  //   id: 10,
  //   idByManager: 4,
  //   name: 'RANGE',
  //   address: '0x88F98992D95BF894B99fE7d47f58bDbF6da394f8',
  //   adapterAddress: '0x57260da74fabcD3e7aB93F6edf0D898d1648f919',
  //   currencyA: bscTokens.cake,
  //   currencyB: bscTokens.wbnb,
  //   earningToken: bscTokens.cake,
  //   feeTier: FeeAmount.MEDIUM,
  //   strategy: Strategy.PASSIVE,
  //   manager: MANAGER.RANGE,
  //   isSingleDepositToken: false,
  //   allowDepositToken0: true,
  //   allowDepositToken1: true,
  //   managerInfoUrl: 'https://www.rangeprotocol.com/',
  //   strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  //   learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  // },
]
