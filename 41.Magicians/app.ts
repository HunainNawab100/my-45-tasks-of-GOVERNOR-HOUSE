function show_Magicians(Magicians:string[]):void {
    for (const magician of Magicians){
        console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
    }
}
const magician :string[]=["ali","hamza","bilal"]
show_Magicians(magician)

