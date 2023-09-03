export function reverseString(string: string) {
  const stringArray = string.split("");
  const endIndex = stringArray.length - 1;

  return stringArray
    .map((_, index) => {
      return stringArray[endIndex - index];
    })
    .join("");
}
