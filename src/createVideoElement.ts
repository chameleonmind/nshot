export const createVideoElement = (source: MediaStream) => {
  const videoElement = document.createElement('video')
  videoElement.autoplay = true
  videoElement.muted = true
  videoElement.srcObject = source
  videoElement.setAttribute('style', 'position: fixed; top: 0; left: 0; z-index: -1; visibility: hidden;')

  return videoElement
}
