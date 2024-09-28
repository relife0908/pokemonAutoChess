import { loadPreferences } from "../../preferences"

export function enterFullScreen() {
  if (document.fullscreenEnabled && loadPreferences().fullscreen) {
    try {
      document.documentElement.requestFullscreen()
    } catch (e) {
      console.info(e)
    }
  }
}

export function exitFullScreen() {
  if (document.fullscreenEnabled) {
    try {
      document.exitFullscreen()
    } catch (e) {
      console.info(e)
    }
  }
}

export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    enterFullScreen()
  } else {
    exitFullScreen()
  }
}
