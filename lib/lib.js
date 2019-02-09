const calculateFrequency = (list, letter) => {
  let frequency = 0

  for (let element of list) {
    if (element === letter) {
      frequency++
    }
  }

  // for (let element of list) frequency = list[i] === letter ? frequency++ : frequency

  return frequency
}

module.exports = {
  calculateFrequency
}
