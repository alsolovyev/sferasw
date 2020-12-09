/**
 * Toggle between adding and removing a class name from an element
 *
 * @param {HTMLElement} el - HTML element
 * @param {string} className - class name
 */
const toggleClass = (el, className) => {
  el.classList.toggle(className)
}


export default toggleClass
