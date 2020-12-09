import toggleClass from './toggleClass';

/**
 * Toggle menu
 *
 * @param {string} className - css selector
 */
const toggleMenu = className => {
  document.querySelector('[data-show-menu]').addEventListener('click', () => {
    toggleClass(document.body, className)
  })
}


export default toggleMenu
