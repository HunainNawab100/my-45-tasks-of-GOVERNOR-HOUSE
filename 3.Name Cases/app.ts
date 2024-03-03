
//  lowercase
let personName : string = "Hunain"
  console.log("lowercase:", personName.toLowerCase());

//  Uppercase
  console.log("Uppercase:", personName.toUpperCase());
  
//  titlecase
 console.log("titlecase:", personName.replace(/\b\w/g,c=>c.toUpperCase()));