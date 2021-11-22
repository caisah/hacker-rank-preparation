function pangrams(s) {
  const start = 'a'.charCodeAt(0)
  const end = 'z'.charCodeAt(0)
  const diff = end - start

  const present = new Array(diff).fill(1)

  for (const letter of s) {
    const index = letter.toLowerCase().charCodeAt(0)

    present[index - start] = 0
  }

  return present.find(letter => letter === 1) ? 'not pangram' : 'pangram'
}
