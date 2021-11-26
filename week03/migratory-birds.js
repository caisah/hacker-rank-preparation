function migratoryBirds(arr) {
  const accumulator = {}

  arr.forEach(num => {
    accumulator[num] = accumulator[num] ? accumulator[num] + 1 : 1
  })

  const maxValue = Object.values(accumulator).reduce((max, num) => max > num ? max : num, -1)
  const maxArray = Object.entries(accumulator).filter(([k, v]) => v === maxValue)

  return maxArray.reduce((min, [key]) => {
    const num = Number(key)

    return min < num ? min : num
  }, Infinity)
}
