// 1- Write a program that allow to user enter number then print it

// var num = prompt("enter your num");
// console.log(num)

// ========================================================================================================================

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var canDivide = prompt("is the can divide by 3 and 4")

// if (canDivide%3===0 && canDivide%4===0) {
//   console.log("yes")
// } else {
//   console.log("no")
// }

// ========================================================================================================================

// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if (num1 > num2) {
//   console.log(num1)
// } else if (num1 < num2) {
//   console.log(num2)
// }

// ========================================================================================================================

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var num = prompt("Enter number");

// if (num>=0) {
//   console.log("positive")
// } else if (num<0) {
//   console.log("negative")
// }


// ========================================================================================================================

// 5- Write a program that take 3 integers from user then print the max element and the min element.

// var num1 = prompt("Enter number 1");
// var num2 = prompt("Enter number 2");
// var num3 = prompt("Enter number 3");

// if (num1>num2 && num1>num3) {
//   console.log("max element = " + num1 )

//   //nested if

//   if (num2<num1 && num2<num3) {
//   console.log("min element = " + num2 )
//   } else if (num3<num1 && num3<num2) {
//   console.log("min element = " + num3 )
//   }


// } else if (num2>num1 && num2>num3) {
//   console.log("max element = " + num2 )

//     //nested if

//   if (num1<num3 && num1<num2) {
//   console.log("min element = " + num1 )
//   } else if (num3<num1 && num3<num2) {
//   console.log("min element = " + num3 )
//   }

  
// } else if (num3>num1 && num3>num2) {
//   console.log("max element = " + num3 )

//     //nested if

//   if (num1<num3 && num1<num2) {
//   console.log("min element = " + num1 )
//   } else if (num2<num1 && num2<num3) {
//   console.log("min element = " + num2 )
//   }

// }

// ========================================================================================================================

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var num = prompt("Enter your number");

// if (num%2===0) {
//   console.log("even")
// } else {
//   console.log("odd")
// }

// ========================================================================================================================

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var x = prompt("Enter character");

// if (x=='a' || x=='e' || x=='i' || x=='o' || x=='u') {
//   console.log(x + " is vowel");
// } else {
//   console.log(x + " is consonant");
// }

// ========================================================================================================================

// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var num = prompt("Enter your number");

// for (var i = 1; i <= num; i++) {
//   console.log(i)
// }

// ========================================================================================================================

// 9- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var num = prompt("Enter your number");

// for (var i = 1; i <= 12; i++) {
//   console.log(i*num)
// }

// ========================================================================================================================

// 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var num = prompt("Enter your number");

// for (var i = 0; i <= num; i+=2) {
//   console.log(i)
// }

// ========================================================================================================================

// 11- Write a program that take two integers then print the power

// var num = Number(prompt("Enter the number"));
// var power = Number(prompt("Enter the power"));
// var x = 1 ;

// for (var i = 1; i <= power; i++) {
//   x = x*num
// }

// console.log(x)

// ========================================================================================================================

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var sub1 = Number(prompt("Enter the deg of subject 1"));
// var sub2 = Number(prompt("Enter the deg of subject 2"));
// var sub3 = Number(prompt("Enter the deg of subject 3"));
// var sub4 = Number(prompt("Enter the deg of subject 4"));
// var sub5 = Number(prompt("Enter the deg of subject 5"));

// var total = sub1+sub2+sub3+sub4+sub5;
// var avg = total/5

// console.log("Total marks = " + total);
// console.log("Average Marks = " + avg);
// console.log("Percentage = " + ((avg/100)*100) + "%");

// ========================================================================================================================

// 13-Write a program to input month number and print number of days in that month.

// var monthNum= Number(prompt("Enter the num of month"));

// if (monthNum==1 || monthNum==3 || monthNum==5 || monthNum==7 || monthNum==8 || monthNum==10 || monthNum==12) {
//   console.log("Days in Month: 31");
// } else if (monthNum==4 || monthNum==6 || monthNum==9 || monthNum==11) {
//   console.log("Days in Month: 30");
// } else if (monthNum==2) {
//   console.log("Days in Month: 28    ! 29 days in leap years");
// } else {
// console.log("enter num from 1 to 12");
// }

// ========================================================================================================================

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

// var sub1 = Number(prompt("Enter the deg of subject 1"));
// var sub2 = Number(prompt("Enter the deg of subject 2"));
// var sub3 = Number(prompt("Enter the deg of subject 3"));
// var sub4 = Number(prompt("Enter the deg of subject 4"));
// var sub5 = Number(prompt("Enter the deg of subject 5"));

// var total = sub1+sub2+sub3+sub4+sub5;
// var avg = total/5

// var percentage = ((avg/100)*100);

// if (percentage<=100 && percentage>=90) {

//   console.log("Percentage >= " + percentage + " : Grad A");

// } else if (percentage<90 && percentage>=80) {

//   console.log("Percentage >= " + percentage + " : Grad B");

// } else if (percentage<80 && percentage>=70) {

//   console.log("Percentage >= " + percentage + " : Grad C");

// } else if (percentage<70 && percentage>=60) {

//   console.log("Percentage >= " + percentage + " : Grad D");

// } else if (percentage<60 && percentage>=40) {

//   console.log("Percentage >= " + percentage + " : Grad E");

// } else if (percentage<40) {

//   console.log("Percentage >= " + percentage + " : Grad F");

// } else {

//   console.log("Enter correct degree");

// }

// ========================================================================================================================

// *************************************************   Using switch case   *************************************************

// ========================================================================================================================

// 15- Write a program to print total number of days in month

// var monthNum= Number(prompt("Enter the num of month"));

// switch (monthNum) {
//   case 1:
//     console.log("Days in Month: 31");
//     break;
//   case 2:
//     console.log("Days in Month: 28    ! 29 days in leap years");
//     break;
//   case 3:
//     console.log("Days in Month: 31");
//     break;
//   case 4:
//     console.log("Days in Month: 30");
//     break;
//   case 5:
//     console.log("Days in Month: 31");
//     break;
//   case 6:
//     console.log("Days in Month: 30");
//     break;
//   case 7:
//     console.log("Days in Month: 31");
//     break;
//   case 8:
//     console.log("Days in Month: 31");
//     break;
//   case 9:
//     console.log("Days in Month: 30");
//     break;
//   case 10:
//     console.log("Days in Month: 31");
//     break;
//   case 11:
//     console.log("Days in Month: 30");
//     break;
//   case 12:
//     console.log("Days in Month: 31");
//     break;
//   default:
//     break;
// }

// ========================================================================================================================

// 16- Write a program to check whether an alphabet is vowel or consonant

// var x = prompt("Enter character");

// switch (x) {
//   case "a":
//     console.log(x + " is vowel");
//     break;
//   case "e":
//     console.log(x + " is vowel");
//     break;
//   case "i":
//     console.log(x + " is vowel");
//     break;
//   case "o":
//     console.log(x + " is vowel");
//     break;
//   case "u":
//     console.log(x + " is vowel");
//     break;

//   default:console.log(x + " is consonant");
//     break;
// }

// ========================================================================================================================

// 17- Write a program to find maximum between two numbers

// var num1 = Number(prompt("Enter number 1"));
// var num2 = Number(prompt("Enter number 2"));

// switch (num1 & num2) {
//   case Number(num1>num2):
//     console.log("max element = " + num1 );
//     break;
//   case Number(num1<num2):
//     console.log("max element = " + num2 );
//     break;

//   default:
//     break;
// }

// ========================================================================================================================

// 18- Write a program to check whether a number is even or odd

// var num = prompt("Enter your number")%2;

// switch (num) {
//   case 0:
//     console.log("even");
//     break;
//   case 1:
//     console.log("odd");
//     break;
//   default:
//     break;
// }

// ========================================================================================================================

// 19- Write a program to check whether a number is positive or negative or zero

// var num = Number(prompt("Enter your number"));
// var zero = 0; 

// switch (num & zero) {

//   case Number(num<0):
//     console.log("positive");
//     break;

//   case Number(num>0):
//     console.log("negative");
//     break;

//   default:
//     break;
// }

// ========================================================================================================================

// 20- Write a program to create Simple Calculator

// var num1 = Number(prompt("Enter first number"));
// var op = prompt("Enter operation");
// var num2 = Number(prompt("Enter second number"));

// switch (op) {
//   case "+":
//     console.log(num1+num2);
//     break;
//   case "-":
//     console.log(num1-num2);
//     break;
//   case "*":
//     console.log(num1*num2);
//     break;
//   case "/":
//     console.log(num1/num2);
//     break;

//   default:
//     break;
// }