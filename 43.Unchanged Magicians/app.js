function show_Magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    var greatmegicians = [];
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
    return greatmegicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
var greatmegicians2 = make_great2(magicians3);
show_Magicians(magicians3);
show_Magicians(greatmegicians2);
