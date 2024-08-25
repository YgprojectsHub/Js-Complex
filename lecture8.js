// Function Decleration
// Fonksiyon tanımlanmadan önce çalıştırılabilir

// console.log(square(4))

// function square(num){
//     return num*num
// }

// Function Expression
// Fonksiyon tanımlanmadan önce çalıştırılamaz

// const square2 = function(num){
//     return num*num
// }

// console.log(square2(6))

// Arrow Function Expression

// const square3 = function(num){return num*num}
// const square3 = (num) => {return num*num}
// const square3 = num => num*num

// console.log(square3(8))

// window.name = "Yusuf"

// function tellName(){
//     console.log(this.name)
// }

// tellName()

// const person = {
//     name: "yusuf",
//     tellName: function(){
//         console.log(this.name)
//     }
// }

// person.tellName()

// window.name = "Yusuf"

// const tellName = () => {
//     console.log(this.name)
// }

// tellName()

// const person = {
//     name: "yusuf",
//     tellName: function(){
//         console.log(this.name)
//     }
// }

// person.tellName()

////////////////////////////

// window.name = "Ravza"

// const person = {
//   name: "Yusuf",
//   tellName: function () {
//     console.log(this.name)

//     setTimeout(function () {
//       console.log(this.name)
//     }, 2000)
//   },
// }

// person.tellName()

// window.name = "Ravza"

// const person = {
//   name: "Yusuf",
//   tellName:() => {
//     console.log(this.name)

//     setTimeout(() => {
//       this.name = "Yusuf" // *Eğer bu satır silinir ise (Aşağıdakini oku)
//       console.log(this.name)
//     }, 2000) //Arrow function her daim değişkenin ilk değerini alır.
//   },
// }

// person.tellName()

////////////////////////

// const Person = (name, surname, age) => { //Bu kod array function old. için dolayısıyla sadece kendi içinde tanımlanan değişkenleri anlayabildiği için "this" metodunu ve içindeki değişkenleri algılayamamıştır.
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.fullname = function(){
//         return `${this.name} ${this.surname}`
//     }
// }

// const person1 = new Person("Ravza","Güngörür",17)

// console.log(person1)

///////////////////////

//CALL

//const studentResult = {
//    examResult: function(){
//        return `${this.name} --> ${this.grade}`
//    }
//}
//
//const student1 = {
//    name: "Yusuf",
//    grade: 100
//}
//
//const student2 = {
//    name: "Ravza",
//    grade: 80
//}
//
//console.log(studentResult.examResult.call(student1))
//console.log(studentResult.examResult.call(student2))