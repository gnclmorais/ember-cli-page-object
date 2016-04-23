import Ember from 'ember';
import { findElementWithAssert, buildSelector, getContext } from '../helpers';

/**
 * Clicks elements matched by a selector.
 *
 * @example
 *
 * // <button class="continue">Continue<button>
 * // <button>Cancel</button>
 *
 * const page = PageObject.create({
 *   continue: clickable('button.continue')
 * });
 *
 * // clicks on element with selector 'button.continue'
 * page.continue();
 *
 * @example
 *
 * // <div class="scope">
 * //   <button>Continue<button>
 * // </div>
 * // <button>Cancel</button>
 *
 * const page = PageObject.create({
 *   continue: clickable('button.continue', { scope: '.scope' })
 * });
 *
 * // clicks on element with selector '.scope button.continue'
 * page.continue();
 *
 * @example
 *
 * // <div class="scope">
 * //   <button>Continue<button>
 * // </div>
 * // <button>Cancel</button>
 *
 * const page = PageObject.create({
 *   scope: '.scope',
 *   continue: clickable('button.continue')
 * });
 *
 * // clicks on element with selector '.scope button.continue'
 * page.continue();
 *
 * @public
 *
 * @param {string} selector - CSS selector of the element to click
 * @param {Object} options - Additional options
 * @param {string} options.scope - Nests provided scope within parent's scope
 * @param {number} options.at - Reduce the set of matched elements to the one at the specified index
 * @param {boolean} options.resetScope - Ignore parent scope
 * @param {String} options.testContainer - Context where to search elements in the DOM
 * @return {Descriptor}
 */
export function clickable(selector, options = {}) {
  return {
    isDescriptor: true,

    value() {
      const fullSelector = buildSelector(this, selector, options);
      const context = getContext(this);

      if (context && findElementWithAssert(this, selector, options)) {
        Ember.run(() => {
          if (options.testContainer) {
            Ember.$(fullSelector, options.testContainer).click();
          } else {
            context.$(fullSelector).click();
          }
        });
      } else {
        /* global click */
        click(fullSelector, options.testContainer);
      }

      return this;
    }
  };
}
