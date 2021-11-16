const OPERATION = {
  SPLIT: 'S',
  COMBINE: 'C'
}

const TYPE = {
  METHOD: 'M',
  CLASS: 'C',
  VARIABLE: 'V'
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function combine(str) {
   const arr = str.split(' ')
   const rest = arr.slice(1).map(capitalize).join('')

   return arr[0] + rest
}

function split(str) {
  const arr = []
  let acc = ''

  for (letter of str) {
    const lowerCased = letter.toLowerCase()

    if (lowerCased === letter) {
      acc += letter
    } else {
      acc && arr.push(acc)
      acc = lowerCased
    }
  }

  arr.push(acc)

  return arr.join(' ')
}

function processInput(input) {
  const operation = input[0]
  const type = input[2]
  let toProcess = input.slice(4)

  if (operation === OPERATION.SPLIT) {
    switch(type) {
      case(TYPE.METHOD): {
        return split(toProcess.slice(0, toProcess.length - 2))
      }

      case(TYPE.CLASS): {
        return split(toProcess)
      }

      case(TYPE.VARIABLE): {
        return split(toProcess)
      }

      default: {
        return ''
      }
    }
  }

  switch(type) {
      case(TYPE.METHOD): {
        return combine(toProcess) + '()'
        break;
      }

      case(TYPE.CLASS): {
        return capitalize(combine(toProcess))
        break;
      }

      case(TYPE.VARIABLE): {
        return combine(toProcess)
        break;
      }

      default: {
        return ''
      }
    }
}


function processData(input) {
  const inputArray = (input.includes("\r")) ? input.split("\r\n") : input.split("\n")

  inputArray.forEach(str => console.log(processInput(str)))
}
