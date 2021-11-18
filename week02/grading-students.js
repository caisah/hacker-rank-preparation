function roundGrade (grade) {
  if (grade < 38) {
    return grade
  }

  const base = Math.floor(grade / 10)
  let toRound = grade % 10
  let baseIncrement = 0

  if (toRound > 5) {
    if (toRound - 5 >= 3) {
      toRound = 0
      baseIncrement = 1
    }
  } else {
    if (5 - toRound < 3) {
      toRound = 5
    }
  }

  return (base + baseIncrement) * 10 + toRound
}

function gradingStudents (grades) {
  return grades.map(roundGrade)
}
