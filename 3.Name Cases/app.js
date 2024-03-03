//  lowercase
var personName = "Hunain";
console.log("lowercase:", personName.toLowerCase());
//  Uppercase
console.log("Uppercase:", personName.toUpperCase());
//  titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
