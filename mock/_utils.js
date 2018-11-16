
/**
 * delay function
 * @param {number} time ms 毫秒
 */
export const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};