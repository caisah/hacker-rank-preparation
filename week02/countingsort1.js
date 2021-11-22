const N = 100

function countingSort(arr) {
  const frequencyArr = new Array(N).fill(0)

  arr.forEach(num => frequencyArr[num]++)

  return frequencyArr
}
