type car ={
    manufacture :string
    model:string
    [key:string]:any;
}
function createcar(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar:car=createcar("toyota","carola",{color:"siler",year:"2024"})
console.log(mycar)