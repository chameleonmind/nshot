# Nshot

> Allow users to make screenshots of their screen using a native Screen Capture API

## Features

- Initiate screen capture from web apps easily, 
- Grab screenshots of current tab, other tabs, whole display or whatever the native Screen Capture API supports,
- Screenshots in multiple image types (png, jpeg or webp),
- Set quality of the screenshot taken (works only for jpeg type),
- Timer to delay the screenshot,
- Check if browser supports Screen Capture API.

### Coming soon

- Full page screenshot
- Hide or show cursor on screenshot

## How to use

1. Install the package:

``` 
npm install nshot
```

2. Import where needed

```
import { useScreenCapture } from 'nshot'
```

3. Use it

The above method returns a promise which resolves as a base64 string of the screenshot. 

``` 
useScreenCapture(options)
    .then(response => {
        // do whatever you need with base64 string you will receive here as response 
    })
    .catch(error => {
        // catch any errors here, for example, if user has canceled screen capture
    }) 
```

4. Available options

```javascript
{
    preferCurrentTab: boolean // true/false, whether the Screen Capture API should offer the current tab first
    quality: number // a number between 0.01 and 1, determines the image quality, works only on jpeg format
    format: string // format of the screenshot, supported formats: png, jpeg and webp
    timer: number // number of seconds to wait before taking a screenshot. An overlay will be shown on top with countdown
}
```

So, the complete function could look something like this
```javascript
useScreenCapture({
    preferCurrentTab: true,
    quality: 1,
    format: 'jpeg',
    timer: 3
  })
      .then(response => {
          // your own function to download screenshot
          downloadScreenshot(response)
      })
      .catch((error) => {
          // catch error
      })
```

Additionally, you can check if browser supports the Screen Capture API by using provided flag `isScreenCaptureSupported`

```javascript
import { isScreenCaptureSupported } from 'nshot'

if (isScreenCaptureSupported) {
    // take screenshot
}
```
