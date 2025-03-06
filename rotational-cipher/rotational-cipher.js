export const isLetter = (letter) => {
  return /^[a-zA-Z]$/.test(letter)
}

export const isUpperCase = (letter) => {
  return /^[A-Z]$/.test(letter)
}

export const rotate = (input, key) => {
  let ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"]
  let letters = input.split("");

  for (let position = 0; position < letters.length; position++) {
    let letter = letters[position]
    let letter_position = ALPHABET.indexOf(letter.toLowerCase()) + key

    if (letter_position >= ALPHABET.length) {
      letter_position -= ALPHABET.length
    }

    let new_letter = ALPHABET[letter_position]

    if (isLetter(letter)) {
      if (isUpperCase(letter)) {
        letters[position] = new_letter.toUpperCase()
      } else {
        letters[position] = new_letter
      }
    }
  }

  return letters.join("")
}
