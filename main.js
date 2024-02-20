// !====q1=====


// var result=window.prompt("enter a number");
// console.log(result);


// !=====q2====


// var result2=window.prompt("enter a number");
// if(result2 %3 === 1 || result2 %4===1){
//   console.log("no");
// }else{
//   console.log("yes");
// };


// !====q3=====


// var result=window.prompt("enter first number");
// var result2=window.prompt("enter second number");
// if(+result> +result2){
//   console.log(result);
// }else{
//   console.log(result2);
// };


// !====q4=====

// var result=window.prompt("enter first number");
// if(+result> 0){
//   console.log("positive");
// }else{
//   console.log("negative");
// };


// !====q5=====

// var num1 = parseInt(prompt("enter the first int"));
// var num2 = parseInt(prompt("enter the second int"));
// var num3 = parseInt(prompt("enter the third int"));
// //assume the first number is  both the maximum and the minimum
// var max = num1;
// var min = num1;
// //compare the 2nd num with the max and min
// if(num2 > max){
//   max = num2;
// }
// if(num2<min){
//   min = num2;
// }
// //compare 3rd with max and min
// if(num3 > max){
//   max = num3;
// }
// if (num3 < min){
//   min = num3;
// }
// console.log("the max is :" + max);
// console.log("the min is :" + min);

// !====q6=====

// var num = parseInt(prompt("enter an int"));
// if(num%2 ===1){
//   console.log("odd");
// }else{
//   console.log("even");
// }

// !=====q7======

// var letter = prompt("enter a letter to know if it is a vowel char");
// if(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"||letter=="A"||letter=="E"||letter=="I"||letter=="O"||letter=="U"){
//   console.log("vowel");
// }else{
//   console.log("consonant");
// }

// !====q8======

// var num = parseInt(prompt("enter a num"));
// for(i=1;i<=num;i++){
//   console.log(i);
// }

// !====q9=====

// var num = parseInt(prompt("enter a num"));
// for(i=1;i<=12;i++){
//   console.log(num*i)
// }

// !=====q10=====

// var num = parseInt(prompt("enter a num"));
// for(i=1;i<=num;i++){
//   if(i %2== 0){
//     console.log(i)
//   }
// }

// !====q11======

// function calculatepower(base,exponent){
//   let result = 1;
//   for(i = 0;i < exponent;i++){
//     result *= base;
//   }
//   return result;
// }
// var base = parseInt(prompt("enter the base"));
// var exponent = parseInt(prompt("enter the exponet"));
// var power = calculatepower(base,exponent);
// console.log(`the power of ${base}
// and exponent is : ${exponent} the power is ${power}`);

// !=====q12=======

// function calculate_sum(sub1,sub2,sub3,sub4,sub5){
//   var result = sub1 + sub2 + sub3 +sub4 + sub5
//   return result;
// }
// function calculate_averrage(sub1,sub2,sub3,sub4,sub5){
//   var result = (sub1 + sub2 + sub3 +sub4 + sub5) / 5;
//   return result;
// };

// var sub1 = parseInt(prompt("enter the sub1 score"));
// var sub2 = parseInt(prompt("enter the sub2 score"));
// var sub3 = parseInt(prompt("enter the sub3 score"));
// var sub4 = parseInt(prompt("enter the sub4 score"));
// var sub5 = parseInt(prompt("enter the sub5 score"));
// var sum = calculate_sum(sub1,sub2,sub3,sub4,sub5);
// var average = calculate_averrage(sub1,sub2,sub3,sub4,sub5);
// console.log(`the total is : ${sum}
// and the average is : ${average}
// the percentage is : ${average}%`);

// !=======q13=======

// var employee={
//     name:"ahmed",
//     age:25,
//     brother:{ name:"ahmed",
// friend:{
//     phone:"011",
// }}
// }
// console.log(employee.brother.friend.phone);
// !==========q14========
// var physicsMark = Number(window.prompt("enter mark of physic sub"));
// var chemistryMark = Number(window.prompt("enter mark of chemistry sub"));
// var biologyMark = Number(window.prompt("enter mark of biology sub"));
// var mathmaticsMark = Number(window.prompt("enter mark of mathmatics sub"));
// var computerMark = Number(window.prompt("enter mark of computer sub"));
// var percentage = (physicsMark+chemistryMark+biologyMark+mathmaticsMark+computerMark)/500*100;
// if(percentage>=90){
//     window.alert("grade A")
// }else if(percentage>=80){
//     window.alert("grade B")}
// else if(percentage>=70){
//     window.alert("grade c")}
// else if(percentage>=60){
//     window.alert("grade D")}
// else if(percentage>=40){
//     window.alert("grade E")}
// else if(percentage<=40){
//     window.alert("grade F")}
// !==============q15============
// var monthNumber = window.prompt("enter month number");
// switch(monthNumber){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         window.alert("31");
//         break
//     case '2':
//         window.alert("28 days in common year and 29 in leap year");
//         break
//     case '4':
//     case '6':
//     case '9':

//     case '11':
//         window.alert("30 d");
//         break

// }
// !============q16==========
// var char = window.prompt("enter char");
// switch (char) {
//     case "a":
//     case "A":
//     case "E":
//     case "e":
//     case "i":
//     case "u":
//     case "o":
//         window.alert("vowel");
//         break;
//         default:
//             window.alert("consonant");
//             break;
// }

// !===========q17=======

// var num1 = window.prompt("enter num 1");
// var num2 = window.prompt("enter num 2");
// switch(num1>num2){
//     case true:
//         window.alert(num1);
//         break;
//         case false:
//             window.alert(num2);
//             break;
// }
// !===============q18=========

// var number = window.prompt("enter a num");
// switch(number%2==0){
//     case true:
//         window.alert("even");
//         break;
//         case false:
//             window.alert("odd");
//             break;

// }

// !==========q19==========

// var number = Number(window.prompt("enter number"));
// switch(number>0){
//     case true:
//         window.alert("positive");
//         break;
//         case false:
//             switch(number == 0){
//                 case true:
//                     window.alert("num is zero");
//                     break;
//                     case false:
//                         window.alert("num is negative");
//                         break;
//             }
// }

// !========q20===========

// `var num1 = Number(window.prompt("enter first number"));
// var sign = window.prompt("enter a sign");
// var num2 = Number(window.prompt("enter second number"));
// switch(sign){
//     case "+":
//         window.alert(num1+num2);
//         break;
//         case "-":
//             window.alert(num1-num2);
//             break;
//             case "*":
//                 window.alert(num1*num2);
//                 break;
//                 case "/":
//                     window.alert(num1/num2)
//                     break;
// }`