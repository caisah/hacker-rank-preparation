function sockMerchant(n, ar) {
  const aggregate = {}

  ar.forEach(color => {
    aggregate[color] = aggregate[color] ? aggregate[color] + 1 : 1
  })

  return Object.values(aggregate).reduce((sum, num) => sum + Math.floor(num / 2), 0)
}
