// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   username: "Bret",
//   age: 44,
//   fullName: function(){return `${this.name} ${this.surname}`}
// };

// -----------DOT NOTATION-----------

// console.log("------DOT NOTATION------")

// console.log(person.name)
// console.log(person.surname)
// console.log(person.fullName())

// -----------CLOSED BRACKETS NOTATION-----------

// console.log("------CLOSED BRACKETS NOTATION------")

// console.log(person["name"])
// console.log(person["surname"])
// console.log(person["fullName"]())

// -----------CONSTRUCTOR FUNCTION-----------

// function Person(name, surname, age) {
//   // const obj = {}
//   this.name = name
//   this.surname = surname
//   this.age = age
//   this.fullName = `${this.name} ${this.surname}`
//   // return obj
// }

// const person1 = new Person("Yusuf", "Güngörür", 17);
// const person2 = new Person("Yusuf2", "Güngörür2", 18);
// console.log(person1);
// console.log(person1.fullName);
// console.log(person2);
// console.log(person2.fullName);

// -----------OBJECT CONSTRUCTOR-----------

// const person1 = new Object()
// person1.name = "Jhon"
// person1.surname = "Doe"
// person1.age = 40
// person1.fullName = `${person1.name} ${person1.surname}`
// console.log(person1)
// console.log(person1.fullName)

// -----------OBJECT - I-----------

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   fullName: function(){ return `${this.name} ${this.surname}` }
// }

// const leanne = Object.create(person)
// leanne.name = "yusuf"
// leanne.surname = "güngörür"
// leanne.age = 56
// leanne.isHuman = false

// console.log(leanne)
// console.log(leanne.fullName())

// -----------OBJECT - II-----------

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   age: 44,
//   fullName: function(){return `${this.name} ${this.surname}`}
// };

// console.log(person.hasOwnProperty("job") ? "Var":"Yok")

//---------------------

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// console.log(typeof yusuf.age)
// console.log(typeof yusuf.age.toString())
// console.log(yusuf.__proto__) //yusuf.getPrototypeOf(" x ") yeni kullanım
// yusuf.toString() = function(){
//   return "Yusuf came back again !"
// }

// console.log(yusuf.toString())

//---------------------

// Person.prototype.fullName = function(){return `${this.name} ${this.surname}`}
// Person.prototype.surname = "Akar"

// const yusuf = new Person("Yusuf", 18)
// const ravza = new Person("Ravza", 16)

// console.log(yusuf)
// console.log(ravza)

//---------------------

// const person = {
//   name: "XXXXXX",
//   surname: "XXXXXX",
//   age: 0,
//   fullname: function(){return `${this.name} ${this.surname}`}
// }

// const yusuf = Object.create(person)
// console.log(yusuf)
// console.log(yusuf.fullname())
// console.log(yusuf.age)
// yusuf.age = 10
// console.log(yusuf.age)
// console.log("surname" in yusuf)