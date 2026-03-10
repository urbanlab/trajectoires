function getRequiredEnv(name: keyof NonNullable<typeof window.__APP_CONFIG__>): string {
  const value = window.__APP_CONFIG__?.[name]

  if (!value) {
    throw new Error(`Missing runtime config: ${name}`)
  }

  return value
}

export const APP_CONFIG = {
  apiGristUrl: window.__APP_CONFIG__?.VITE_API_GRIST_URL ?? '',
  apiGristToken: window.__APP_CONFIG__?.VITE_API_GRIST_TOKEN ?? '',
  aesKey: getRequiredEnv('VITE_AES_KEY'),
}