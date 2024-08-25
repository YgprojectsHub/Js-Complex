//Class lar nesneleri modülerleştirmeyi sağlar bu sayede daha rahat bakım yapılabilir.

//class Person {
//    constructor(name, surname, age) {
//        this.name = name
//        this.surname = surname
//        this.age = age
//        this.friends = ["Ela","Elif"]
//    }
//
//    fullName(){
//        return `${this.name} ${this.surname}`
//    }
//
//    static showName = "Person"
//
//    static stateMethod(){
//        console.log("stateMethod çalışıyor.")
//    }
//}

//const yusuf = new Person("Yusuf","Güngörür", 18)

//console.log(typeof Person)

//console.log(yusuf)
//console.log(yusuf instanceof Person)
//console.log(yusuf.fullName())

//console.log(yusuf.showName) //undefined
//console.log(yusuf.stateMethod()) //undefined

//console.log(Person.showName)
//console.log(Person.stateMethod())

// class Person {
//     constructor(name, surname, age) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }

//     fullName(){
//         return `${this.name} ${this.surname}`
//     }
// }

// const yusuf = new Person("Yusuf", "Güngörür", 17)

// class Engineer extends Person {}

// const ravza = new Engineer("Ravza", "Güngörür", 15)

// console.log(yusuf instanceof Person)

// console.log(ravza instanceof Person)
// console.log(ravza instanceof Engineer)

//class Person {
//    constructor(name, surname, age) {
//        this.name = name
//        this.surname = surname
//        this.age = age
//    }
//
//    fullName(){
//        return `${this.name} ${this.surname}`
//    }
//}
//
//class Engineer extends Person{
//    constructor(name, surname, age, job){
//        super(name, surname, age)
//        this.job = job
//    }
//
//    getMoney(){
//        console.log("Para Kazan.")
//    }
//}
//
//const yusuf = new Engineer("Yusuf", "Güngörür", 17, "software engineer")
// const ravza = new Person("Ravza", "Güngörür", 15)

// console.log(ravza)
//console.log(yusuf)
//console.log(yusuf.getMoney())
//console.log(yusuf.fullName())

// class ExtendedArray extends Array {
//     shuffle(){
//         this.sort(() => Math.random() - 0.5)
//     }
// }

// let myArr = new ExtendedArray(1,2,3,4,5)

// console.log(myArr instanceof ExtendedArray)
// console.log(myArr)
// myArr.shuffle()
// console.log(myArr)
