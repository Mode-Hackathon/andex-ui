// import { goerliTestnetTokens } from '@pancakeswap/tokens'
import Trans from "components/Trans";
import { VaultKey } from "state/types";

export const vaultPoolConfig = {
  // [VaultKey.CakeVaultV1]: {
  //   name: <Trans>Auto ANDX</Trans>,
  //   description: <Trans>Automatic restaking</Trans>,
  //   autoCompoundFrequency: 5000,
  //   gasLimit: 380000n,
  //   tokenImage: {
  //     primarySrc: `/images/tokens/${goerliTestnetTokens.cake.address}.png`,
  //     secondarySrc: '/images/autorenew.svg',
  //   },
  // },
  // [VaultKey.CakeVault]: {
  //   name: <Trans>Stake ANDX</Trans>,
  //   description: <Trans>This product has been upgraded</Trans>,
  //   autoCompoundFrequency: 5000,
  //   gasLimit: 1100000n,
  //   tokenImage: {
  //     primarySrc: `/images/cakeGrey.png`,
  //     secondarySrc: '/images/autorenew-disabled.png',
  //   },
  // },
  // [VaultKey.CakeFlexibleSideVault]: {
  //   name: <Trans>Flexible ANDX</Trans>,
  //   description: <Trans>Reward paused for this position</Trans>,
  //   autoCompoundFrequency: 5000,
  //   gasLimit: 500000n,
  //   tokenImage: {
  //     primarySrc: `/images/cakeGrey.png`,
  //     secondarySrc: '/images/autorenew-disabled.png',
  //   },
  // },
  // [VaultKey.IfoPool]: {
  //   name: 'IFO ANDX',
  //   description: <Trans>Stake ANDX to participate in IFOs</Trans>,
  //   autoCompoundFrequency: 1,
  //   gasLimit: 500000n,
  //   tokenImage: {
  //     primarySrc: `/images/tokens/${goerliTestnetTokens.cake.address}.png`,
  //     secondarySrc: `/images/ifo-pool-icon.svg`,
  //   },
  // },
} as const;
