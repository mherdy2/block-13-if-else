let param1A = 0,
  param1B = false,
  param2A = "horse",
  param2B = "horse";
// param1A should be strictly equal to param1B
// while param2A and param2B should be loose equal to each other
// and if all of the values are true it will return true otherwise false
if (param1A === param1B || param2A == param2B) {
  console.log(true);
} else {
  console.log(false);
}
