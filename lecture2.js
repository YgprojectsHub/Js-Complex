//NOT: Parametre fonksiyonun girdi olarak alacağı değerlere denir.
//NOT: Argüman fonksiyon çalıştırmak için kullanılan kod parçası

// Function Expression

//const square1 = function(num){
//    return num*num
//}
//
//console.log(square1)
//console.log(square1(4))

// FIRST - CLASS FUNCTİONS

// const myArr = [6, "Arin", () => {console.log(myArr[0])}]

// myArr[2]() // <- bu son paranteze Invoke denir

//-----------

// const child = {
//     name: "Arin",
//     age: 5,
//     childDetail: () => console.log(`Benim adım ${myObj.name} ve yaşım ${myObj.age}`)
// }

// child.childDetail()

//-----------

// console.log(20 * (() => {return 12})()) // IIFE (Fonksiyonu doğrudan çalıştırma)

// "Function Expression is not hoisted"

// console.log(square(5))

// var square = function (num) {
//     return num+num
// }

// FIRST - CLASS FUNCTIONS CONTUINE

// const addFunc = function(num, func){
//     console.log(num + func())
// }

// addFunc(10, () => {return 5})

//-----------

// const myFunc = function (num) {
//   return function toDouble() {
//     console.log(num * 2);
//   };
// };

// myFunc(7)()

// const result = myFunc(7);
// result()

//IIFE(Immediately Invoked function Expression - Hemen Çağrılan Fonksiyon İfadesi)

// (function(){
//     console.log(5+12)
// }())

//Fonksiyonlar Nesnedir

// function cross(n1,n2){
//     return n1*n2
// }

// console.log(cross.length)