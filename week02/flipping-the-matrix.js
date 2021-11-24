function max(...args) {
  return args.reduce((max, current) => {
    return (current > max) ? current : max
  })
}

function flippingMatrix(matrix) {
  const n = matrix.length
  const middle = n / 2
  let acc = 0

  for (let i = 0; i < middle; i++) {
    for (let j = 0; j < middle; j++) {
      acc += max(
        matrix[i][j],
        matrix[i][n - j - 1],
        matrix[n - i - 1][j],
        matrix[n - i - 1][n - j - 1]
      )
    }
  }
  return acc
}
