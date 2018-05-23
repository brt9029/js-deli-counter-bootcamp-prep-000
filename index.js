var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine
  }
}

function currentLine(){
  var line = "The line is currently: "
  while (i < katzDeliLine.length){
    line += `${katzDeliLine[i]}` + "." + `${katzDeliLine[i-1]}` + ", "
    i ++
  }
}