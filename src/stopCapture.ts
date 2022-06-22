export const stopCapture = (video: HTMLVideoElement) => {
  // @ts-ignore
  const tracks = video?.srcObject.getTracks()

  tracks.forEach((track: any) => track.stop())
  video.srcObject = null
  video.remove()
}
