const { capitalize, reverse, contains } = require("./stringUtils");

console.log(capitalize("hello"));            // Hello
console.log(reverse("LaunchCode"));           // edoChcnuaL
console.log(contains("JavaScript", "Script")); // true
console.log(contains("JavaScript", "Python")); // false
