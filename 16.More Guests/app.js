var guest_list = ["ali", "farhan", " ayesha ", " raza"];
// for (let i = 0 ;i < guest_list.length; i++) {
//     console.log('Respected Sir/Medam   '+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
// }
var not_present = 'farhan';
var new_guest = 'arham';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam' + guest_list[i] + ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
}
guest_list.unshift("shaheen", "sarfaraz", " rizwan ");
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam' + guest_list[i] + ',\nWe  invited you on  dinner tomorrow. we  found big table so we decide to invite 3 more  guest \nthank you\n ');
}
