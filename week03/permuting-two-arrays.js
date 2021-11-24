function twoArrays(k, A, B) {
  const n = A.length
  const sortedA = A.sort((a, b) => a - b)
  const reverseSorted = B.sort((a, b) => b - a)

  for (let i = 0; i < n; i++) {
    if (sortedA[i] + reverseSorted[i] < k) {
      return 'NO'
    }
  }

  return 'YES'
}
