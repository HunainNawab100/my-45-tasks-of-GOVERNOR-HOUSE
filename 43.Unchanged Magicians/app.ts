
function show_Magicians(Magicians:string[]):void {
    for (const magician of Magicians){
        console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
    }
}

function make_great2(magicians :string[]): string[] {
    const greatmegicians :string[]=[];
    for(let i =0; i < magicians.length; i++){
        magicians[i]=magicians[i]+' The Great'
    }
    return greatmegicians;
}
const magicians3 :string[]=["usman","haseeb","wajahat"];
const greatmegicians2 :string[]=make_great2(magicians3)

show_Magicians(magicians3)
show_Magicians(greatmegicians2)
