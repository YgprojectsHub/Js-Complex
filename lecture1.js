// VAR - LET - CONST - Hoisting

//LET------------

// let age = 40;
// console.log(age);

// age = 42;
// console.log(age);

//-----------
// let name3 = "Arin";
// console.log(name3);

// name3 = "Yusuf";
// console.log(name3);

//NOT -> Operatör içinde tanımlandığında operatör dışında çağırılamaz ve müdahale edilemez. (Block Scope)

//CONST------------

//const name1 = "Yusuf"
//console.log(name1)
//
//name1 = "Ravza"
//console.log(name1)

//NOT -> Const frameworklerde let ve Var dan daha fazla kullanılır bunun amacı kaza ile değerler değiştirilmesin kontrol altında tutulabilsin.
//NOT -> Const hafızada bir referansı tutar değiştirilmesine müsade etmez ancak tututtuğu referans değişken olabilir fakat const bununla ilgilenmez.
//NOT -> Yani const daha önce tanımlanmış olan bir dizinin objelerini doğrudan değiştirmesine müsade etmez buna ancak fonksiyonlar gibi aracılarla izin verir.

// const arr = {
//   name: "yusuf",
//   age: 34,
// };

//arr = {
//    name:"ravza",
//    age: 345
//}
//
//console.log(arr)

// arr.name = "ravza123";

// console.log(arr);

//----------

//const name2;
//name2 = ""
//console.log(name2)

//VAR------------

// var name4 = "Yusuf";
// console.log(name4);

// name4 = "Ravza";
// console.log(name4);

// //-----------

// var x = 1;

// if (x === 1) {
//   x = 10;
//   console.log(x);
// }

// console.log(x);

//NOT -> Operatör içinde tanımlandığında operatör dışında çağırılabilir ve müdahale edilebilir. (Global Scope)

//HOISTING------------

// console.log(rocket3)
// console.log(rocket2)
// console.log(rocket1)
// var rocket3 = "rocket is running"
// let rocket2 = "rocket is running"
// const rocket1 = "rocket is running"

//NOT -> Compiler(kod derleyici) önizleme yaparak kod dosyası içindeki (sadece) var ile tanımlanmış değişkenleri ilk önce en tepeye alır her birine undefined olarak değer atama yapar ve daha sonra yukarıdan aşağıya doğru okuyarak bulduğu değişkenlerin değerlerini yeniden atar ve derleme yapar.