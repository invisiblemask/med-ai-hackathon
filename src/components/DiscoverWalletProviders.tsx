"use client"

import styles from './DiscoverWalletProviders.module.css'
import { useState } from 'react'
import { useSyncProviders } from '../hooks/useSyncProviders'
import { formatAddress } from '@/utils'

export const  DiscoverWalletProviders = () => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
  const [userAccount, setUserAccount] = useState<string>('')
  const providers = useSyncProviders()

  console.log('providers', providers)
  console.log("user", userAccount)
  
  const handleConnect = async(providerWithInfo: EIP6963ProviderDetail) => {
    console.log('providerWithInfo', providerWithInfo)
    const accounts = await providerWithInfo.provider
      .request({method:'eth_requestAccounts'})
      .catch(console.error)
      
    if(accounts?.[0]) {
      setSelectedWallet(providerWithInfo)
      setUserAccount(accounts?.[0])
    }
  }

  const onClick = (name: string) => {
    const check = providers.find((el) => el.info.name === name)
    if(check){
        handleConnect(check)
    }else{
        alert(`Create a ${name} Account`)
    }
  }
 
  return (
    <>
      <h2>Wallets Detected:</h2>
      <div className='' onClick={()=> onClick("MetaMask")}>MetaMask</div>
      <div onClick={()=> onClick("Phantom")}>Phantom</div>
      <hr />
      <h2 className={styles.userAccount}>{ userAccount ? "" : "No " }Wallet Selected</h2>
      { userAccount &&
        <div className={styles.walletDetails}>
          <div className={styles.logo}>
            <img src={selectedWallet?.info.icon} alt={selectedWallet?.info.name} />
            <div>{selectedWallet?.info.name}</div>
            <div>({formatAddress(userAccount)})</div>
            <div><strong>uuid:</strong> {selectedWallet?.info.uuid}</div>
            <div><strong>rdns:</strong> {selectedWallet?.info.rdns}</div>
          </div>
        </div>
      }
    </>
  )
}