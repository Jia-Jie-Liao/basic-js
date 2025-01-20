// 內建方法介紹 console.log() => 在控制台印出

// console.log("Hello js")
// console.log("Hi JS")

// 變數宣告 (var(ES5)、const(ES6)、let(ES6))

// let name = "user"
// console.log(name)
// let sentence = "你好!"
// console.log(name + sentence)

// 內建方法介紹 prompt() 與 alert()

// fruit = prompt("你最喜歡的水果是什麼?")
// alert(fruit)

// 第一個程式 小費計算機

let food = parseInt(prompt("這餐食物花費?"))
let tipPercentage = parseInt(prompt("小費%?")) / 100
let tipAmmount = food * tipPercentage
let total = food + tipAmmount
console.log("小費金額: " + tipAmmount)
console.log("總金額: " + total)