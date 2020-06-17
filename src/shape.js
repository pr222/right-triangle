/**
 * shape module.
 *
 * @module src/shape
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
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
  let triangle = ''

  for (let row = 1; row <= base; row++) {
    for (let col = 1; col <= row; col++) {
      triangle += '#'
    }
    triangle += '\n'
  }

  // ALTERNATIVE SOLUTION
  // for (let row = '#'; row.length <= base; row += '#') {
  //   triangle += `${row}\n`
  // }

  return triangle
}
