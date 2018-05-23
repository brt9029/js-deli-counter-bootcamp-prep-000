var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else { do {
      return `Currently serving ${katzDeliLine[0]}.`
      katzDeliLine.shift()
    } while (katzDeliLine.length > 0)
  }
}

function currentLine(katzDeliLine){
  var i = 0
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else { while (katzDeliLine.length < i){
    `The line is curretnly: ` + `${katzDeliLine[i+1]}. ` + `${katzDeliLine[i]}, `
    i ++
    }
    return line
  }
}