function estimateStrength(string){
  let strengths = {}
  if (isOver8Char(string)) {
    strengths.isOver8Char = true
  }
  if (hasLowerCase(string)) {
    strengths.hasLowerCase = true
  }
  if (hasUpperCase(string)) {
    strengths.hasUpperCase = true
  }
  if (hasNumber(string)) {
   strengths.hasNumber = true
  }
  if (hasSpecialChar(string)){
    strengths.hasSpecialChar = true
  } 
  strengths.score = Object.keys(strengths).length
  return strengths
}

function isOver8Char(string) {
  return string.length > 8
}

function hasLowerCase(string){
  return (/[a-z]/).test(string)
}

function hasUpperCase(string){
  return (/[A-Z]/).test(string)
}

function hasNumber(string){
  return (/[0-9]/).test(string)
}

function hasSpecialChar(string){
  return (/\W/).test(string)
}


module.exports = estimateStrength