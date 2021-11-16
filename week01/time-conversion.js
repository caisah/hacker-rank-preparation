function timeConversion(s) {
  const isPM = s[8] === 'P'
  const hour = Number(s.slice(0, 2))
  const rest = s.slice(2, s.length - 2)

  if (hour === 12) {
    if(isPM) {
      return `${hour}${rest}`
    } else {
      return `00${rest}`
    }
  } else if (isPM) {
    const newHour = hour + 12

    return `${newHour}${rest}`
  } else {
    let newHour = hour

    if (hour < 10) {
      newHour = `0${hour}`
    }

    return `${newHour}${rest}`
  }
}
