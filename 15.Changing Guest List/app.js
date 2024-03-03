var guest_list = ["ali", "farhan", " ayesha ", " raza"];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam' + guest_list[i] + ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
}
var not_pressent = "farhan";
var new_guest = "arham";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam' + guest_list[i] + ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
}
console.log('Mr '  .concat(not_pressent) ,'will not coming tommorrow dinner');
