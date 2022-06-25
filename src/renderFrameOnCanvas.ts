export const renderFrameOnCanvas = (video: HTMLVideoElement): Promise<HTMLCanvasElement> => {
  return new Promise(resolve => {
    // @ts-ignore
    const videoSettings = video.srcObject?.getTracks()[0].getSettings()

    // Create a canvas with the video's size and draw the video frame on it
    const canvas = document.createElement('canvas')
    canvas.width = videoSettings?.width ?? 0
    canvas.height = videoSettings?.height ?? 0
    canvas.setAttribute('style', 'position: fixed; right: 0; top: 0; width: 100vw; height: 100vh;')
    const ctx = canvas.getContext('2d')

    video.addEventListener('play', function () {
      ctx?.drawImage(video, 0, 0)
      resolve(canvas)
    })
  })
}
