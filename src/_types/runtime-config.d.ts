export {}

declare global {
  interface Window {
    __APP_CONFIG__?: {
      VITE_API_GRIST_URL?: string
      VITE_API_GRIST_TOKEN?: string
      VITE_AES_KEY?: string
    }
  }
}