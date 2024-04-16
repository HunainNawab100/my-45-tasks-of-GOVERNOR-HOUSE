let guest_list : string [] = ["ali","farhan"," ayesha "," raza"];
// for (let i = 0 ;i < guest_list.length; i++) {

//     console.log('Respected Sir/Medam   '+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
// }

var not_present = 'farhan';
var new_guest = 'arham';
guest_list[1]= new_guest;
// for (let i = 0 ;i < guest_list.length; i++) {

//     console.log('Respected Sir/Medam'+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
// }
guest_list.unshift("shaheen","sarfaraz"," rizwan ");
// for (let i = 0 ;i < guest_list.length; i++) {

//     console.log('Respected Sir/Medam'+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow. we  found big table so we decide to invite 3 more  guest \nthank you\n ');
// }
console.log('/nunfortunately we can not arrange big table, only two table allow')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
console.log(`Sorry Sir/Medam ${remove_guest} , you are not invited for   dinner tomorrow.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam'+guest_list[i]+ ',\nYou are still invited on tommorrow dinner \nthank you\n ');

    
}
guest_list.splice(0,2)
console.log(guest_list)