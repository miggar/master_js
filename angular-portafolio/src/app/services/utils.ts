// https://medium.com/@OlegVaraksin/what-is-the-best-way-to-write-utilities-in-typescript-e3cae916fe30

/**
 * Get a nested object property value
 * Checks for a nested object property and returns its value.
 * http://www.etnassoft.com/2017/03/13/snippet-accediendo-de-forma-elegante-a-una-propiedad-profunda-en-un-objeto-javascript
 * @param   obj     An object given
 * @param   key     The needed key
 * @return          The value of that key.
 */
export function getProp(obj: object, key: string): any {
  return key.split('.').reduce((o, x) => {
    return typeof o === 'undefined' || o === null ? o : o[x];
  }, obj);
}

export function jeremias(): void {
  console.log('%cJeremias', 'background: red; color:yellow; padding: 0 4px');
}

// https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click
export function scrollToTop(): void {
  const scrollToTopInterval = window.setInterval(() => {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 20); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTopInterval);
    }
  }, 16);
}
