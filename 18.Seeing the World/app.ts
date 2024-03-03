let placesToVisits : string[] = ["tokyo","Pakistan","America","Japan","China"];

console.log("Orignal  order:",placesToVisits);

console.log("Alphabetical order:",[...placesToVisits].sort());

console.log("Orignal  order after sorting:",placesToVisits);

console.log(" Reverse Alphabetical order:",[...placesToVisits].sort().reverse());


console.log("Orignal  order after reverse and sorting:",placesToVisits);


placesToVisits.reverse();

console.log("Back to orignal  Order:",placesToVisits);

placesToVisits.sort();
console.log("sorted in alphabetical Order:",placesToVisits);

placesToVisits.sort((a,b)=>b.localeCompare(a) );
console.log("sorted in reverse alphabetical Order:",placesToVisits);