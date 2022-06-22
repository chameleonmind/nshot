export const getImageType = (type: string) => {
  // valid type signature is image/jpeg, for example
  return 'image/' + type
}

export const getValueWithinRange = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value))
}

export const timer = (duration: number):Promise<void> => {
  return new Promise(resolve => {
    let dur = Math.round(duration)

    const timerEl = document.createElement('div')

    const styles = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '12px',
      'border-radius': '5px',
      'background-color': 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.9)',
      'font-family': 'sans-serif',
      'font-size': '60px',
      'line-height': 1,
      'font-weight': '900',
      'z-index': 1
    }

    const stringifiedStyles: string = Object.entries(styles).map((entry: unknown[]) => {
      return `${entry[0]}: ${entry[1]}`
    }).join('; ')

    timerEl.setAttribute('style', stringifiedStyles)

    timerEl.innerText = dur.toString()

    document.body.appendChild(timerEl)

    const tempInterval = setInterval(() => {
      dur = dur - 1
      timerEl.innerText = dur.toString()
      if (dur <= 0) {
        timerEl.remove()
        // wait for repaint
        setTimeout(() => {
          resolve()
        }, 0)
        clearInterval(tempInterval)
      }
    }, 1000)
  })
}
