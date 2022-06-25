/**
 * @vitest-environment jsdom
 */
import { createVideoElement } from '../src/createVideoElement'
import { describe, expect, it } from 'vitest'

describe('Create video element utility', () => {
  it('should return a video HTML element', () => {
    const videoElement = createVideoElement({} as MediaStream)
    expect(videoElement.tagName).toEqual('VIDEO')
  })
})
