// NEW OBJECT SYNTAX

//1 - Shorthand Properties

// let name2 = "Yusuf", age = 5

// const myObj = {
//     name: name,
//     age: age
// }

// const myObj = {
//     name2,
//     age
// }

// console.log(myObj.name2)
// console.log(myObj.age)

//2 - Computed Property Names

// let prop1 = "name"

// let myObj1 = {}

// myObj1[prop1] = "yusuf"
// console.log(myObj1)

//----------

// let prop2 = "name"

// let myObj2 = {
//     [prop2]: "yusuf"
// }

// console.log(myObj2)

//3 - Short Method Syntax

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   username: "Bret",
//   age: 44,
//   fullName(){return `${this.name} ${this.surname}`}
// };

// console.log(person.fullName())

//4 - Object Destructuring

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   age: 44,
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// let myVar1 = person.name
// console.log(myVar1)

// let myVar2 = person.age
// console.log(myVar2)

// let { name: myVar1, age: myVar2 } = person;
// console.log(myVar1);
// console.log(myVar2);

// let { name,age } = person;
// console.log(name);
// console.log(age);

// const books = [
//   {
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
// ];

// for(const {title, body} of books){
//     console.log("title: "+title, "-body: "+body)
// }

//5 - Spread Operator in Object Literals

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   age: 44,
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// const person2 = {...person}

// console.log(person2)

// const myObj1 = {
//     name : "yusuf",
//     age: 6
// }

// const myObj2 = {
//     job: "student",
//     gender: "male"
// }

// const yusuf = {...myObj1,...myObj2}
// console.log(yusuf)

//6 - REST Operator in Object Literals

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   age: 44,
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// const {name, surname, age} = person
// console.log(name)
// const {name,age, ...rest} = person

// console.log(name)
// console.log(rest)

// 7 - Object Values - Object Entries

// const person = {
//   name: "Leanne",
//   surname: "Graham",
//   age: 44,
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))