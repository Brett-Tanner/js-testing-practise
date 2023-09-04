export function analyzeArray(array: number[]) {
  const avg =
    array.reduce((sum, number) => {
      return sum + number;
    }, 0) / array.length;

  const min = array.reduce((lowest, number) => {
    return lowest > number ? number : lowest;
  }, Infinity);

  const max = array.reduce((highest, number) => {
    return highest > number ? highest : number;
  }, 0);

  const length = array.length;

  return { avg, min, max, length };
}
