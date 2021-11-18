function diagonalDifference(arr) {
  const len = arr.length
  let diag1 = 0
  let diag2 = 0

  for (let i = 0; i < len; i++) {
    const j = len - i - 1

    diag1 += arr[i][i]
    diag2 += arr[i][j]
  }

  return Math.abs(diag1 - diag2)
}
