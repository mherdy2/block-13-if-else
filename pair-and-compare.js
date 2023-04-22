let param1A = 11,
  param1B = "eleven",
  param2A = "four",
  param2B = "for";
// param1A should be strictly equal to param1B
// while param2A and param2B should be loose equal to each other
// and if one of the values are false it will return false otherwise true
if (param1A === param1B && param2A == param2B) {
  console.log(true);
} else {
  console.log(false);
}
