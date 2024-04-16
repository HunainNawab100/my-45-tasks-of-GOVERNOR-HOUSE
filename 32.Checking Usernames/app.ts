let current_users :string[]=["admin","Eric","Ali","Hamza","Fatima"]
let new_users:string[]=["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower :string[]=current_users.map(user=>user.toLocaleLowerCase())

for(let new_user of new_users){
if(current_users_lower.includes(new_user.toLocaleLowerCase())){
    console.log(`Sorry ${new_user}, that name is taken`)
}
else{
    console.log(`Yes ${new_user}, is still is available list `)
}
}