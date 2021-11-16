function matchingStrings(strings, queries) {
  const o = strings.reduce((res, str) => {
    if (res[str]) {
      res[str]++
    } else {
      res[str] = 1
    }

    return res
  }, {})

  return queries.map(query => {
    const elem = o[query]

    return elem ? elem : 0
  })
}
