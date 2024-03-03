var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisits = ["tokyo", "Pakistan", "America", "Japan", "China"];
console.log("Orignal  order:", placesToVisits);
console.log("Alphabetical order:", __spreadArray([], placesToVisits, true).sort());
console.log("Orignal  order after sorting:", placesToVisits);
console.log(" Reverse Alphabetical order:", __spreadArray([], placesToVisits, true).sort().reverse());
console.log("Orignal  order after reverse and sorting:", placesToVisits);
placesToVisits.reverse();
console.log("Back to orignal  Order:", placesToVisits);
placesToVisits.sort();
console.log("sorted in alphabetical Order:", placesToVisits);
placesToVisits.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical Order:", placesToVisits);
