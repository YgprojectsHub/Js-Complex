// JS  CLASSES

// Constructor function-------------

// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// // this.fullName = fullName
// }

// Person.prototype.fullName = function(){
//     return this.name+" "+this.surname
// }

// Person.prototype.friends = ["Ela","Rüzgar"];

// const yusuf = new Person("Yusuf", "Güngörür", 17);
// const ravza = new Person("Ravza", "Güngörür", 16);

// console.log(yusuf);
// console.log(yusuf.friends);

// console.log(ravza);
// console.log(ravza.friends);

// yusuf.friends.push("Yağmur") //yusuf arkadaşı ravzaya da eklendi ve bu bir sorundur. Tam bu noktada devreye Class yapısı giriyor.
// console.log(yusuf.friends);
// console.log(ravza.friends);

// Class Declarition-------------

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.friends = ["Ela","Elif"]
//     }

//     fullName(){
//         return this.name+" "+this.surname
//     }
// }

// Class Expression-------------

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.friends = ["Ela","Elif"]
//     }

//     fullName(){
//         return this.name+" "+this.surname
//     }
// }

// const yusuf = new Person("Yusuf","Güngörür", 23)
// const ravza = new Person("Elis","Güngörür", 20)

// console.log(yusuf)
// console.log(ravza)
// console.log(yusuf.fullName())
// console.log(ravza.fullName())

// console.log(yusuf.friends)
// console.log(ravza.friends)

// ravza.friends.push("Yağmur")
// console.log(yusuf.friends)
// console.log(ravza.friends)

// console.log(Person)
// console.log(typeof Person)