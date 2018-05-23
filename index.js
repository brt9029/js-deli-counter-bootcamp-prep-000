var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine[-1]} in line.`
}

function nowServing(katzDeliLine){
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