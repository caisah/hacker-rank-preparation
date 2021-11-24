function split(arr, n) {
  const len = arr.length
  const res = []

  for (let i = 0; i < len - n + 1; i++) {
    res.push(arr.slice(i, i + n))
  }

  return res
}

function birthday(s, d, m) {
  let acc = 0

  split(s, m).forEach(arr => {
    if (arr.reduce((sum, current) => sum + current) === d) {
      acc++
    }
  })

  return acc
}
