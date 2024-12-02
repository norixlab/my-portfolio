/**
 * Animates an element by sliding it in from the left.
 * @param {number} delay Delay before animation starts.
 * @param {number} duration Duration of the animation.
 * @returns An object with "hidden" and "visible" properties, each defining the animation options.
 */
export function slideInFromLeft(delay: number, duration: number) {
  return {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

/**
 * Animates an element by sliding it in from the right.
 * @param {number} delay Delay before animation starts.
 * @param {number} duration Duration of the animation.
 * @returns An object with "hidden" and "visible" properties, each defining the animation options.
 */
export function slideInFromRight(delay: number, duration: number) {
  return {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

/**
 * Animates an element by sliding it in from the top.
 * @param {number} delay Delay before animation starts.
 * @param {number} duration Duration of the animation.
 * @returns An object with "hidden" and "visible" properties, each defining the animation options.
 */
export function slideInFromTop(delay: number, duration: number) {
  return {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}
/**
 * Animates an element by sliding it in from the bottom.
 * @param {number} delay Delay before animation starts.
 * @param {number} duration Duration of the animation.
 * @returns An object with "hidden" and "visible" properties, each defining the animation options.
 */

export function slideInFromBottom(delay: number, duration: number) {
  return {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}
