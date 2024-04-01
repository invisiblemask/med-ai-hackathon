// app/providers.tsx
"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    
    <NextUIProvider>
      <MetaMaskProvider debug={false} sdkOptions={{
      logging:{
          developerMode: false,
        },
        communicationServerUrl: process.env.NEXT_PUBLIC_COMM_SERVER_URL,
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        i18nOptions: {
          enabled: true,
        },
        dappMetadata: {
          name: "Demo React App",
          url: "",
        }
    }}>
      {children}
      </MetaMaskProvider>
    </NextUIProvider>
    
  );
}
