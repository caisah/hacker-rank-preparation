function findMedian(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const middle = Math.floor(arr.length / 2)

  return arr[middle]
}
