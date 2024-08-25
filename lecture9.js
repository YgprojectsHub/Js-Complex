//JS Single Thread
//JS Synchronous

// const func1 = () => {
//     console.log("Func 1 Console Log 1")
//     console.log("Func 1 Console Log 2")
//     alert("Alert Message 1")
// }

// const func2 = () => {
//     console.log("Func 2 Console Log 1")
//     console.log("Func 2 Console Log 2")
//     alert("Alert Message 2")
// }

// func1()
// func2()

//Senkronize derleyicide asenkron fonksiyon sorunu.

// let x = 10;
// console.log(x);

// setTimeout(() => {
//   x = x + 5;
// }, 2000);

// console.log(x);

// x = x + 5;
// console.log(x);

//Call stack sorunu

// function func1(){
//     console.log("Ben birinciyim.")
//     func2()
//     console.log("Ben tekrar birinciyim.")
// }

// function func2(){
//     console.log("Ben ikinciyim.")
//     func3()
//     console.log("Ben tekrar ikinciyim.")
// }

// function func3(){
//     console.log("Ben üçüncüyüm.")
// }

// func1()

// Callback Function

// setTimeout(() => {
//     console.log("Benim adım yusuf.")
// }, 1000)

///////////////

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

// Callback Hell

//fs.readdir(source, function (err, files) {
//  if (err) {
//    console.log("Error finding files: " + err);
//  } else {
//    files.forEach(function (filename, fileIndex) {
//      console.log(filename);
//      gm(source + filename).size(function (err, values) {
//        if (err) {
//          console.log("Error identifying file size: " + err);
//        } else {
//          console.log(filename + " : " + values);
//          aspect = values.width / values.height;
//          widths.forEach(
//            function (width, widthIndex) {
//              height = Math.round(width / aspect);
//              console.log(
//                "resizing " + filename + "to " + height + "x" + height
//              );
//              this.resize(width, height).write(
//                dest + "w" + width + "_" + filename,
//                function (err) {
//                  if (err) console.log("Error writing file: " + err);
//                }
//              );
//            }.bind(this)
//          );
//        }
//      });
//    });
//  }
//});
