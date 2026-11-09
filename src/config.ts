function getRequiredEnv(name: keyof NonNullable<typeof window.__APP_CONFIG__>): string {
  const runtimeValue  = window.__APP_CONFIG__?.[name]
  const viteValue = import.meta.env[name]

  const value = runtimeValue || viteValue

  if (!value) {
    throw new Error(`Missing runtime config: ${name}`)
  }

  return value
}

// Runtime config (public/config.js generated at container start) takes precedence;
// import.meta.env is only a fallback for local dev (`npm run dev` with .env).
// Never read import.meta.env.VITE_AES_KEY directly elsewhere: in CI builds it is empty.
export const APP_CONFIG = {
  aesKey: getRequiredEnv('VITE_AES_KEY')
}