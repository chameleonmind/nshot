import { createVideoElement } from './createVideoElement'
import { renderFrameOnCanvas } from './renderFrameOnCanvas'
import { stopCapture } from './stopCapture'
import { ScreenshotOptions } from './types'
import { getImageType, getValueWithinRange, timer } from './utils'

const defaultOptions: ScreenshotOptions = {
  preferCurrentTab: true,
  quality: 0.75,
  format: 'png'
}

export const useScreenCapture = async (options: ScreenshotOptions): Promise<string> => {
  const mergedOptions = {
    ...defaultOptions,
    ...options
  }
  return new Promise((resolve, reject) => {
    navigator.mediaDevices.getDisplayMedia({
      // @ts-ignore
      preferCurrentTab: mergedOptions.preferCurrentTab,
      video: {
        frameRate: 30
      }
    })
      .then(async (res: MediaStream) => {
        // display countdown overlay if there is timer defined
        if (mergedOptions.timer) {
          await timer(mergedOptions.timer)
        }
        // create video element to stream the screen contents
        const video = createVideoElement(res)
        document.body.appendChild(video)

        // copy video frame to canvas
        const canvas = await renderFrameOnCanvas(video)

        // convert canvas content to base64 encoded image
        const imageType = getImageType(mergedOptions.format || 'png')
        const imageQuality = getValueWithinRange(mergedOptions.quality || 1, 0.01, 1)

        // get screenshot in base64 encoding
        const screenshot = canvas.toDataURL(imageType, imageQuality)

        // clean up
        stopCapture(video)
        canvas.remove()

        resolve(screenshot)
      })
      .catch(e => {
        reject(e)
      })
  })
}
