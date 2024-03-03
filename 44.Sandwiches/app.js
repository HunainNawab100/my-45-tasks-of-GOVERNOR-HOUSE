function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < item.length; i++) {
        // console.log(''.concat{...items[i]}  );
        console.log(JSON.parse(JSON.stringify(item[i])));

    }
}
console.log("enjoy your sandwich Hunain Nawab");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', "mayo sauce");
