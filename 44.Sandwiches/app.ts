function sandwich (... item: string[]):void{
    console.log("Sandwich order:")

    for(let i=0;i<item.length;i++){
        console.log('- ${items[i]}')
    }
}
console.log("enjoy your sandwich Hunain Nawab")
sandwich('capsicum','tomato','chicken')
sandwich('beef','cheese')
sandwich('garlic chicken',"mayo sauce")