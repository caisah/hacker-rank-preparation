function print(sum, len) {
  console.log(Number.parseFloat(sum / len).toFixed(6))
}

function plusMinus(arr) {
  let pos = 0
  let neg = 0
  let zero = 0
  const len = arr.length

  arr.forEach(num => {
    if (num > 0) {
      pos++
    } else if (num < 0) {
      neg++
    } else {
      zero++
    }
  })
  print(pos, len)
  print(neg, len)
  print(zero, len)
}
