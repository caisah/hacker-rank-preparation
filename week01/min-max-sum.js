function miniMaxSum(arr) {
  let min = Infinity
  let max = -Infinity
  let sum = 0

  arr.forEach(num => {
    sum = sum + num
    if (num >= max) {
      max = num
    }

    if (num <= min) {
      min = num
    }
  })

  console.log(sum - max, sum - min)
}
