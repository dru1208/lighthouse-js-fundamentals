function ageCalculator(name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth
  var statement = "" + name + " is " + age.toString() + " years old.";
  return statement
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));