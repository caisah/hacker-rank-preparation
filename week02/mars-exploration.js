function marsExploration(s) {
  const comparator = 'SOS'
  let sum = 0
  let i = 0

  for (let letter of s) {
    if (i === 3) {
      i = 0
    }
    if (letter !== comparator[i]) {
      sum++
    }
    i++
  }

  return sum
}
