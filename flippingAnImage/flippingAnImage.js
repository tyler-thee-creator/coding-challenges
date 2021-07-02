/*https://leetcode.com/problems/flipping-an-image/*/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */

 const flipAndInvertImage = (image) => {
  const flippedImage = [];
  const opposite = {
    0: 1,
    1: 0,
  };

  image.map((imageRow) => {
    const flippedRow = [];
    for (let i = imageRow.length - 1; i >= 0; i--) {
      flippedRow.push(opposite[imageRow[i]]);
    }
    flippedImage.push(flippedRow);
  });

  return flippedImage;
}

export default flipAndInvertImage;
