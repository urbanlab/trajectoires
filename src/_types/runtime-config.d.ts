export {}

declare global {
  interface Window {
    __APP_CONFIG__?: {
      VITE_AES_KEY?: string
    }
  }
}