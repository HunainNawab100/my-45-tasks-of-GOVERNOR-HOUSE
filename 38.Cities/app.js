function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = ' i love typescript'; }
    console.log("you a order the ".concat(size) ,"shirt that says".concat(text));
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'i need big shirt to wear');
