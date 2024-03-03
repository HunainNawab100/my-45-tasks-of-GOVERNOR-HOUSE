var users = ["admin", "eric", "haseeb", "ali", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("hello admin, would u like to see a status report ");
    }
    else {
        console.log('hello $(user), thank u for loggin in again');
    }
}
