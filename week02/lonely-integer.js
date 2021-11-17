function lonelyinteger(arr) {
  const map = arr.reduce((acc, current) => {
    if (acc[current]) {
      delete acc[current]
    } else {
      acc[current] = true
    }
    return acc
  }, {})

  return Number(Object.keys(map)[0])
}
