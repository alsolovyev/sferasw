import SmoothScroll from 'smooth-scroll'
import LazyLoad from 'vanilla-lazyload'
import Rellax from 'rellax'
import toggleMenu from './libs/toggleMenu'
import Gallery from './libs/Gallery'
import greeting from './libs/greeting'


/** The initial HTML document has been completely loaded and parsed */
document.addEventListener('DOMContentLoaded', () => {

})

/** The whole page has been completely loaded, including all dependent resources (stylesheets and images) */
window.addEventListener('load', () => {
  /** Navigation bar*/
  toggleMenu('menu-shown')


  /** Smooth scroll */
  new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: (anchor, toggle) => {
      if (toggle.href === '#') return 0
      return window.getComputedStyle(anchor).marginTop
    },
    updateURL: true,
    popstate: true,
    topOnEmptyHash: true
  })

  /** Lazy load images */
  new LazyLoad({
    threshold: -100,
    class_loaded: 'lazy__loaded'
  })

  /** Gallery */
  new Gallery({
    container: document.getElementById('gallery')
  })

  /** Parallax effect */
  new Rellax('.rellax', {  })

  /** Greetings, Sire! */
  greeting()
})
