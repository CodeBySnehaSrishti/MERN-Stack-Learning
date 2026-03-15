// DATA TYPES
// console.log(typeof(123))
// console.log(typeof("sneha"))
// console.log(typeof(true))

// VARIABLES

// var yourName=prompt("who the hell are you?")
// alert("oh!, hello " + yourName)

// STRING LENGTH

// var yourName = "Sneha";
// console.log(yourName.length)

// COUNT LETTERS
// var letters =prompt("letter limit is 50")
// var lettersLenght =letters.length;
// alert("you have written "+ lettersLenght +" letters and "+ (50-lettersLenght)+" left")

//SlICING AND EXTRACTING PARTS OF A STRING

// var tweet = prompt("write under 140 letters")
// var letters140 = tweet.slice(0,140)
// alert(letters140)

// shortfom
// alert(prompt("Compose your tweet").slice(0,140))

// Changing Casing in Text

// alert(prompt("enter your name").toUpperCase())

// alert(prompt("enter your name").toLowerCase())

// var yourName = prompt("enter your name")
// var first = yourName.slice(0,1)
// var second = yourName.slice(1,yourName.length)
// var f =first.toUpperCase()
// var s =second.toLowerCase()
// alert("hello" +( f+s))

// ARITHMETIC AND MODULO OPERATOR

// alert(5%2)
// alert(5/2)

// Q. Dog age to human age formula

// var dogAge=prompt("enter your dog age")
// var age = ((dogAge - 2) * 4) + 21
// alert("the age of your dog is "+dogAge+" and the human age is "+age)

// CREATING AND CALLING FUNCTION

// function greating(){
//     console.log("hello")
//     console.log("how are you?")
// }
// console.log("hello")
// greating()

//  PARAMETERS AND ARGUMENTS

// function getMilk(bottle){
//     console.log("leave house")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("buy "+ bottle +"bottle of milk")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("movedown")
//     console.log("movedown")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("enterhouse")
// }
// getMilk(12)
// ===============================

// function getMilk(money){
//     console.log("leave house")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")

//     var numberOfBottle =Math.floor(money/1.5);
//     console.log("buy "+ numberOfBottle +" bottle of milk")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("movedown")
//     console.log("movedown")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("enterhouse")
// }
// getMilk(5)

// how many days, weeks, and months we have left if we live until 70 years
life = prompt("enter your age")
function lifeInWeeks(age){
    var yearsRemaining = 70 -age;
    var days = yearsRemaining * 365;
    var weeks =yearsRemaining * 52;
    var months =yearsRemaining * 12;
    var years =yearsRemaining
    alert("you have "+ days + " days, " + weeks +" weeks , and "+ months +" months " +years+ " years left");
}
lifeInWeeks(life)


























