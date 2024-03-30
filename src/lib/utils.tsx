import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formatBalance = (rawBalance: string) => {
  const balance = (Number.parseInt(rawBalance) / 1000000000000000000).toFixed(2)
  return balance
}

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = Number.parseInt(chainIdHex)
  return chainIdNum
}

export const formatAddress = (addr: string) => {
  const upperAfterLastTwo = addr.slice(0,2) + addr.slice(2)
  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`
}

export function capitalize(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
