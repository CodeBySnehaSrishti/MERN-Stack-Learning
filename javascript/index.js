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


// life = prompt("enter your age")
// function lifeInWeeks(age){
//     var yearsRemaining = 70 - age;
//     var days = yearsRemaining * 365;
//     var weeks =yearsRemaining * 52;
//     var months =yearsRemaining * 12;
//     var years =yearsRemaining
//     alert("you have "+ days + " days, " + weeks +" weeks , and "+ months +" months " +years+ " years left");
// }
// lifeInWeeks(life)

// FUNCTION PART 3: OUTPUTS & RETURN VALUES###############################################################

// ex.1>

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
//     return money % 1.5 ;
// }
// var change = getMilk(4);
// console.log(change);




// ex.2>


// function getMilk(money){
//     console.log("leave house")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("buy "+ calcBottles(money,1.5) +" bottles of milk")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("movedown")
//     console.log("movedown")
//     console.log("moveleft")
//     console.log("moveleft")
//     console.log("enterhouse")
//     return calcChange(money,1.5)
// }
// function calcBottles (startingMoney, costPerBottle){
//     var numberOfBottles =Math.floor (startingMoney, costPerBottle);
//     return numberOfBottles;
// }
// function calcChange(startingAmount, costPerBottle){
//     var number =change = startingAmount % costPerBottle;
//     return change;
// }
// console.log("hello, master " +  getMilk(5));



// CHALLENGE :CREATE A BMI CALCULATOR

// function bmiCalculator(weight ,height){
//     var bmi =weight / Math.pow(height,2);
//     return Math.round(bmi); 
// }
// var bmi = bmiCalculator(55 , 1.73);
// console.log(bmi)


// RANDOM NUMBER GENERATION IN JS 

// EX.1 > 
// var n = Math.random();
// n = n*6;
// n = Math.floor(n)+1;
// console.log(n);

// EX.2

// prompt("enter your name")
// prompt("enter your crush name")
// var loveScore = Math.random() * 100;
// var score = Math.floor(loveScore) +1
// alert("your love score is " + score +" % ")







// CONTROL STATEMENT:

// prompt("enter your name")
// prompt("enter your their name")
// var loveScore = Math.random() * 100;
// var score = Math.floor(loveScore) + 1;
// if (score > 70) {
//     alert("your score is " + score + " you love each other ")
// }
// if (score > 30 && score <= 70) {
//     alert("your score is " + score + "% you  are just good friend")
// }
// if (score <= 30){
//     alert("your score is " + score + " % you are toggether like oil and water")
// }
// prompt("enter your name")
// prompt("enter their name")
// var loveScore = Math.random() * 100;
// var loveScore = Math.floor(loveScore) + 1;
// if(loveScore > 70){
//     alert ("your score is "+loveScore+" % you love each other"  )
// }
// if(loveScore > 30 && love <=70 ){
//     alert ("your score is "+loveScore+" % you are just good friend"  )
// }

// if(loveScore <= 30 ){
//     alert ("your score is "+loveScore+" % you are togather like oil and water"  )
// }
// var year = prompt("enter year to find leap year !")
// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//             return "leap year"
//             }
//             else {
//                 return "Not leap year."
//             }
//         }
//         else {
//             return "Not leap year."
//         }
//     }
//     else {
//         return "Not leap year."
//     }
// }
// var result = isLeap(year)
// alert("year is "+result)

// COLLECTION WORKING WITH JS ARRAY

// var guestList = ["sneha", "srishti", "kishu", "shriyansh", "shashwat", "megha"]
// var guestName = prompt("what is your name ? ")
// guestList.includes(guestName)

// if (guestList.includes(guestName)) {
//     alert("welcome !")
// } else {
//     alert("sorry, maybe next time")
// }

















