var katzDeli = []

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine[-1]} in line.`
}

function nowServing(){
  return katzDeli[0]
    katzDeli.shift()
}

function currentLine(){
  if (katzDeli.length > 0){
    return katzDeli()
  } else {
    return "The line is currently empty."
  }
}