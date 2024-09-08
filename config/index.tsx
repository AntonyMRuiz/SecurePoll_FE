import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { avalancheFuji, mainnet, sepolia } from 'wagmi/chains'

export const projectId = 'f4422c3396b84f4989548725b3351370'

const metadata = {
  name: 'secure-poll',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const spnet = {
    id: 2364,
    name: 'SPNET',
    network: 'SPNET',
    nativeCurrency: {
      name: 'SNET Token',
      symbol: 'SNET',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://nm758ssr-9650.use2.devtunnels.ms/ext/bc/SPNET/rpc'],
      },
    },
    testnet: true,
}

const chains = [mainnet, sepolia, spnet, avalancheFuji] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})