export interface ScreenshotOptions {
  // cursorVisible?: boolean
  preferCurrentTab?: boolean
  // size?: 'viewport' | 'full-page'
  quality?: number // 0-1
  format?: 'png' | 'jpeg' | 'webp',
  timer?: number
}
