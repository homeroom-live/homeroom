import { findDOMNode } from 'react-dom'

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

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {Element} el Element from which to get offset
 * @return {Object}
 */
export function findElPosition(el) {
  let box

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect()
  }

  if (!box) {
    return {
      left: 0,
      top: 0,
    }
  }

  const docEl = document.documentElement
  const body = document.body

  const clientLeft = docEl.clientLeft || body.clientLeft || 0
  const scrollLeft = window.pageXOffset || body.scrollLeft
  const left = box.left + scrollLeft - clientLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const scrollTop = window.pageYOffset || body.scrollTop
  const top = box.top + scrollTop - clientTop

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top),
  }
}

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {Element} el Element on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */
export function getPointerPosition(el, event) {
  const position = {}
  const box = findElPosition(el)
  const boxW = el.offsetWidth
  const boxH = el.offsetHeight

  const boxY = box.top
  const boxX = box.left
  let pageY = event.pageY
  let pageX = event.pageX

  if (event.changedTouches) {
    pageX = event.changedTouches[0].pageX
    pageY = event.changedTouches[0].pageY
  }

  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH))
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW))

  return position
}

// blur an element
export function blurNode(reactNode) {
  const domNode = findDOMNode(reactNode)
  if (domNode && domNode.blur) {
    domNode.blur()
  }
}

// check if an element has a class name
export function hasClass(elm, cls) {
  const classes = elm.className.split(' ')
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true
    }
  }
  return false
}
