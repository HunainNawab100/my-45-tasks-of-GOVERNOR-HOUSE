let users : string []=["admin","eric","haseeb","ali","fatima"]

if(users.length===0){
    console.log("we need to find some users ")
}
else{
    for(let user of users){
        if(user=="admin"){
            console.log(" hello admin , would u like to see a status report?")
        }
        else{
            console.log("hello $(user), thank u for logging in again")
        }
    }
}