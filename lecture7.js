//console.log(this)
//console.log(this.location)
//console.log(this.location.href)
//console.log(window.location.href)
//console.log(this === window)

//Function Declarition
// function func1(){
//     this.name = "Yusuf"
//     //console.log(this)
//     //console.log(this.location)
//     //console.log(this.location.href)
//     //console.log("/////////////////////////////////////////")
//     console.log(this.name)
//     console.log(this.age)
// }

//Function Expression
// const func2 = function(){
//     this.age = 40
//     //console.log(this)
//     //console.log(this.location)
//     //console.log(this.location.href)
//     console.log(this.age)
//     console.log(this.name)
// }

// func1()
// func2()

// Constructor Function

// function Person(name, surname, age) {
//   const obj = {}

//   obj.name = name;
//   obj.surname = surname;
//   obj.age = age;

//   return obj
// }

// const yusuf = new Person("Yusuf","Güngörür",17)
// console.log(yusuf)

// function Person(name, surname, age) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.fullName = function(){return `${this.name} ${this.surname}`}
// }

// const yusuf = new Person("Yusuf", "Güngörür", 17);
// console.log(yusuf);
// console.log(yusuf.fullName());

// const yusuf = {
//     name: "Yusuf",
//     func: function(){
//         console.log(this === yusuf)
//         console.log(this === window)
//         console.log("/////////////////////////////////////")
//         setTimeout(function(){ //-> SetTimeOut olağan akışa uymadığı için this metodu field ları içermiyor ve global değere eşitleniyor 
//             console.log(this === yusuf)
//             console.log(this === window)
//         }, 2000)
//     }
// } 

// yusuf.func()

