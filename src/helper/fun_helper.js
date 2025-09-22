/*
I hereby  I create production code for these productive functions
*/

export function double(arr = []){
   if(!Array.isArray(arr)){

       throw new Error("You have not passed Array!")   

    }

    //  check each value in array is a number if not throw new error

    if(!arr.every(val => typeof val === "number")){
        throw new Error("Array must be contain numbers")
    }
    
    return arr.map(num => num * 2)
}


// onlyeven()


export function onlyEven(arr = []){

    if(!Array.isArray(arr)){
        throw new Error("You have not passed Array!")
    }
   
    return arr.filter((e)=>{return e % 2 == 0})
}