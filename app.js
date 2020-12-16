// let n = +prompt("Enter Number")
//  function isEven(n){
//      if(n%2===0){
//          return true;
//      }else{
//          return false;
//      }
//  }
// document.write(isEven());



// var dayOfWk = 0;

// dayOfWk = +prompt("Enter A Day")
// // var abc = dayOfWk.toLowerCase();
// if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
//      alert("Whoopee!");
//      }
//      else if (dayOfWk === "Fri") {
//      alert("TGIF!");
//      }
//      else {
//      alert("Shoot me now!");
//      }






// var studentMarks = "";
// studentMarks = +prompt("Enter Percentage");

// switch (true) {
//     case (studentMarks >= 80 && studentMarks <=100):
//         document.write("Well Done" + " " + "A");
//         break;

//         case (studentMarks >= 70 && studentMarks <=79):
//             document.write("Good Work" + " " + "B");
//             break;

//         case (studentMarks >= 60 && studentMarks <=69):
//         document.write("Need To Improve" + " " + "C");
//         break;

//         case (studentMarks >= 50 && studentMarks <=59):
//             document.write(" Hard Work Required" + " " + "D");
//             break;
//             default:
//                 document.write("Noting Matched" + " " + "F")
// }



// var studentMarks = "";
// studentMarks = prompt("Enter Grade");

// switch (studentMarks) {
//     case "A":
//         console.log("Well Done");
//         break;

//     case "B":
//         console.log("Good Work");
//         break;

//     case "C":
//         console.log("Need To Improve");
//         break;

//     case "D":
//         console.log(" Hard Work Required");
//         break;
//     default:
//         console.log("Nothing Matched")
// }

// var even = [];

// var i = 0;
// while (even.length < 10) {
//     if (i % 2 === 0) {
//         even.push(i);
//     }
//     document.write(i);
//     i++
// }


// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 0);



do{

    let num1 = +prompt("Enter Frist Number");
    let num2 = +prompt("Enter Secound Number");
   
    let c = num1 + num2
    alert(c);
  var confrim =  prompt("Do You Want Again y/n").toLowerCase();
}while(confrim === "y") 
alert("Tanks For Using Program");


