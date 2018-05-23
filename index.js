var katzDeli = []

function takeANumber(line, katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine[-1]} in line.`
}

function nowServing(){
  return `Currently serving ${katzDeli[0]}.`
    katzDeli.shift()
}

function currentLine(){
  if (katzDeli.length > 0){
    return katzDeli()
  } else {
    return "The line is currently empty."
  }
}