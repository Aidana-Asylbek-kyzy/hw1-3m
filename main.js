// let i = 0;
// function printArrayValues(){
//     i++;
//     console.log(i, ' array ');
//     if(i === 3){
//         return;
//     }else{
//         return printArrayValues();
//     }
// }

// printArrayValues();

///////////////////////////////

// const str = 'Myname457isAlex';
// const regex = /\D/g;
// const result = str.match(regex);
// console.log(result);

///////////////////////////////

// const str = 'Hello\tWorld\nTest';
// const regex = /\s/gmi;
// const result = str.match(regex);
// console.log(result);

///////////////////////////
const str = 'loremipsumdolor';
const regex = /o/g;
const result = str.match(regex);
console.log(result.length);