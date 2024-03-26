interface EIP1193Provider {
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: Error | null, response: any) => void) => void
    send?: (request: { method: string, params?: Array<any> }, callback: (error: Error | null, response: any) => void) => void
    request: (request: { method: string, params?: Array<any> }) => Promise<any>
  }
  
  
  interface EIP6963ProviderInfo {
    rdns: string;
    uuid: string;
    name: string;
    icon: string;
  }
  
  interface EIP6963ProviderDetail {
    info: EIP6963ProviderInfo;
    provider: EIP1193Provider;
  }
  
  type EIP6963AnnounceProviderEvent = {
    detail:{
      info: EIP6963ProviderInfo,
      provider: Readonly<EIP1193Provider>
    }
  }