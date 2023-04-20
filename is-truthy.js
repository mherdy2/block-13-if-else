// truthy and falsy
//  if else statements

// enter input values to be tested ("I am a string", false, null, undefined, 0, "")
let test = false;

// this will print true
if (test === "I am a string") {
  console.log("True");
}

// this will print "The boolean value false is falsy"
else if (test === false) {
  console.log("The boolean value false is falsy");
}

// this will print "The null value is falsy"
else if (test === null) {
  console.log("The null value is falsy");
}

// this will print "undefined is falsy"
else if (test === undefined) {
  console.log("undefined is falsy");
}

// this will print "The number 0 is falsy (the only falsy number)";
else if (test === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
}

// this will print "The empty string is falsy (the only falsy string)";
else if (test === "") {
  console.log("The empty string is falsy (the only falsy string");
}
