function isNonDegenerateTriangle([a, b, c]) {
  return (a + b > c) && (b + c > a) && (a + c > b)
}

function perimeter([a, b, c]){
  return a + b + c
}

function max(triplet) {
  return triplet.reduce((maximum, current) => {
    if (current > maximum) {
      return current
    }

    return maximum
  }, 0)
}

function min(triplet) {
  return triplet.reduce((maximum, current) => {
    if (current < maximum) {
      return current
    }

    return maximum
  }, 0)
}

function getMaxPerimeterTuple(triplet, [_, newTriplet]) {
  const maxNewTriplet = max(newTriplet)
  const maxTriplet = max(triplet)

  if (maxNewTriplet > maxTriplet) {
    return [_, newTriplet]
  } else if (maxNewTriplet === maxTriplet) {
    const minNewTriplet = min(newTriplet)
    const minTriplet = min(triplet)

    if (minNewTriplet > minTriplet) {
      return [_, newTriplet]
    }
  }

  return [_, newTriplet]
}

function maximumPerimeterTriangle(sticks){
  let maxPerimeterTuple = [0, []]
  const len = sticks.length

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++){
      for (let k = j + 1; k < len; k++) {
        const triplet = [sticks[i], sticks[j], sticks[k]]

        if (isNonDegenerateTriangle(triplet)) {
          const currentPerimeter = perimeter(triplet)

          if (currentPerimeter > maxPerimeterTuple[0]) {
            maxPerimeterTuple = [currentPerimeter, triplet]
          } else if (currentPerimeter === maxPerimeterTuple) {
            maxPerimeterTuple = getMaxPerimeterTuple(triplet, maxPerimeterTuple)
          }
        }
      }
    }
  }

  return maxPerimeterTuple[0] ? maxPerimeterTuple[1].sort((a, b) => a - b) : [-1]
}
