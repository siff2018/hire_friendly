/*
I hereby  I create production code for these productive functions
*/

export function double(arr){
   if(Array.isArray(arr)){

       return arr.map(num => num * 2)


   }else{
    throw new Error("You have not passed Array!")
   }

}



