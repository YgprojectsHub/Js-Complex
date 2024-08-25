//Promise

// const books = [
//     {name: "Pinball 1973", author: "Haruki Murakami"},
//     {name: "Özgürlük", author: "Zygmunt Bauman"},
//     {name: "Türkiye'de Çağdaşlaşma", author: "Niyazi Berkes"}
// ]

// const listBooks = () => {
//     books.map((book, index) => console.log(`Index: ${index}, Book name: ${book.name}, Book author: ${book.author}.`))
// }

// const addNewBook = (book, callback) => {
//     books.push(book)
//     callback()
// }

// addNewBook({name: "Berlin Hatıralarım", author: "Hüsrev Gerede"}, listBooks)

// const promise1 = new Promise((resolve, reject) => {
//     resolve("DATA")
//     reject("ERROR")
// });

// console.log(promise1)

//promise1
//    .then((val) => console.log(val))
//    .catch((reason) => console.log(reason))
//    .finally(() => console.log("ÇALIŞ KÖLE"))

//pending(undefined) - fulfield - rejected => PROMISE STATE

