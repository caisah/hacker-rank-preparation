function flippingBits(n) {
  const arr = Array(32).fill(0)
  let num = n
  let i = 0

  while (num > 0) {
    arr[i] = num % 2
    num = Math.floor(num / 2)
    i++
  }

  return arr.map(item => (item + 1) % 2).reduce((acc, current, i) => {
    return acc + (current ? current * Math.pow(2, i) : 0)
  }, 0)
}
