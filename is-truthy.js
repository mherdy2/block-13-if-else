// truthy and falsy
//  if else statements

// input values to be tested ("I am a string", false, null, undefined, 0, "")
let test = false;
if (test === "I am a string") {
  // this will print true
  console.log("True");
} else if (test === false) {
  // this will print "The boolean value false is falsy"
  console.log("The boolean value false is falsy");
} else if (test === null) {
  // this will print "The null value is falsy"
  console.log("The null value is falsy");
} else if (test === undefined) {
  // this will print "undefined is falsy"
  console.log("undefined is falsy");
} else if (test === 0) {
  // this will print "The number 0 is falsy (the only falsy number)";
  console.log("The number 0 is falsy (the only falsy number)");
} else if (test === "") {
  // this will print "The empty string is falsy (the only falsy string)";
  console.log("The empty string is falsy (the only falsy string");
}
