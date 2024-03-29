/**
 * shape module.
 *
 * @module src/shape
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a string representing a right triangle.
 *
 * @param {number} base - The number of characters in the triangle's base.
 * @returns {string} A string of hash characters describing a right triangle.
 */
export function createRightTriangle (base) {
  let pyramid = ''

  for (let layer = 1; layer <= base; layer++) {
    for (let brick = 1; brick <= layer; brick++) {
      pyramid += '#'
    }
    pyramid += '\n'
  }
  return pyramid
}
