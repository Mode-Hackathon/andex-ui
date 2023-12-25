import { ChainId } from '@pancakeswap/chains'
import { vaults as bscVaults } from '../src/constants/vaults/bsc'
import { vaults as ethVaults } from '../src/constants/vaults/eth'

export const vaultsConfigChainMap = {
  [ChainId.MODE_TESTNET]: ethVaults,
  [ChainId.MODE_MAINNET]: bscVaults,
}
