export interface ScreenshotOptions {
  cursorVisible?: boolean
  // width?: number
  // height?: number
  preferCurrentTab?: boolean
  size?: 'viewport' // | 'full-page'
  quality?: number // 0-1
  type?: 'png' | 'jpeg' | 'webp',
  timer?: number
}
