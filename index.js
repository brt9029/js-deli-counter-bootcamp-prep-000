var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else { while (katzDeliLine.length > 0) {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
  }
}

function currentLine(katzDeliLine){
  var i = 0
  var linePlace = `${[i+1]}. `
  var personName = `${katzDeliLine[i]}`
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    while (i < katzDeliLine.length){
      return "The line is currently: " + linePlace + personName + `, `
      i++
    }
  }
}