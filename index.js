var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  while (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine = katzDeliLine.shift()
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(){
  var i = 0
  var line = ""
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else while (i < katzDeliLine.length) {
    
    i ++
  }
}