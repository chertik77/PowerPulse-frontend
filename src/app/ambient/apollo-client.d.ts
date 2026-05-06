import '@apollo/client'

declare module '@apollo/client' {
  interface DefaultContext {
    skipAuthRefresh?: boolean
  }
}
