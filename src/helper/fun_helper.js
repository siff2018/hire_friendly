/*
I hereby  I create production code for these productive functions
*/

function validationNumberArray(arr){

   if(!Array.isArray(arr)){

       throw new Error("You have not passed Array!")   

    }

    //  check each value in array is a number if not throw new error

    if(!arr.every(val => typeof val === "number")){
        throw new Error("Array must be contain numbers")
    }
}


export function double(arr = []){

    validationNumberArray(arr);
    return arr.map(num => num * 2)
}


// onlyeven()


export function onlyEven(arr = []){

 validationNumberArray(arr);
   
    return arr.filter((e)=>{return e % 2 == 0})
}


export function sum(arr = []){
validationNumberArray(arr);

return arr.reduce((acc,cur)=> acc + cur)
}


export function countBy(word){

    return word.length
}


// counter maker


export function counterMaker(){
let count= 0;

return function(){

    return count++;
}


}

let counter = counterMaker()

