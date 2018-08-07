class Fullscreen {
  start(elm) {
    if (elm.requestFullscreen) {
      elm.requestFullscreen()
    } else if (elm.webkitRequestFullscreen) {
      elm.webkitRequestFullscreen()
    } else if (elm.mozRequestFullScreen) {
      elm.mozRequestFullScreen()
    } else if (elm.msRequestFullscreen) {
      elm.msRequestFullscreen()
    }
  }

  exit() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  get isFullscreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    )
  }

  get enabled() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    )
  }

  addEventListener(handler) {
    document.addEventListener('fullscreenchange', handler)
    document.addEventListener('webkitfullscreenchange', handler)
    document.addEventListener('mozfullscreenchange', handler)
    document.addEventListener('MSFullscreenChange', handler)
  }

  removeEventListener(handler) {
    document.removeEventListener('fullscreenchange', handler)
    document.removeEventListener('webkitfullscreenchange', handler)
    document.removeEventListener('mozfullscreenchange', handler)
    document.removeEventListener('MSFullscreenChange', handler)
  }
}

export const fullscreen = new Fullscreen()

export const SHOW = 1
export const HIDE = 0

/**
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
export function formatTime(seconds = 0, guide = seconds) {
  let s = Math.floor(seconds % 60)
  let m = Math.floor((seconds / 60) % 60)
  let h = Math.floor(seconds / 3600)
  const gm = Math.floor((guide / 60) % 60)
  const gh = Math.floor(guide / 3600)

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-'
  }

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? `${h}:` : ''

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`

  // Check if leading zero is need for seconds
  s = s < 10 ? `0${s}` : s

  return h + m + s
}
