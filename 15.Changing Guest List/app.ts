let guest_list : string [] = ["ali","farhan"," ayesha "," raza"];
for (let i = 0 ;i < guest_list.length; i++) {

    console.log('Respected Sir/Medam'+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
}
let not_pressent : string ="farhan";
let new_guest : string ="arham";
guest_list[1]=new_guest;
for (let i = 0 ;i < guest_list.length; i++) {

    console.log('Respected Sir/Medam'+guest_list[i]+ ',\nWe  invited you on  dinner tomorrow.\nthank you\n ');
}
console.log('Mr $(not_pressent) will not coming tommorrow dinner')
