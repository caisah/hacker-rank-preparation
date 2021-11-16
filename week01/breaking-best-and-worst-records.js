function breakingRecords(scores) {
  let breakingMin = 0
  let breakingMax = 0
  let lastMin = scores[0]
  let lastMax = scores[0]

  scores.slice(1).forEach(score => {
    if (score < lastMin) {
      breakingMin++
      lastMin = score
    }

    if (score > lastMax) {
      breakingMax++
      lastMax = score
    }
  })

  return [breakingMax, breakingMin]
}
