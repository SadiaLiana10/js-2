/* OPERATORS

(1) arithmetic
   + , -, /, *1, **(exponentiation), %(modulus), ++(increment), --(decrement)

   let a = 10;
   let b = 50;
   let c = a - b;
   console.log(c);

   let a = 2;
   let b = 3;
   let c = a ** b;
   console.log(c);  

   let a = 33;
   let c = a % 2;
   console.log(c);
   (even=0 , odd=1)

   let a = 5;
   console.log(a++);
   console.log(a);

(2) assignment
    = , +=

    let a = 10;
    a += 5;
    console.log(a);

(3) comparison
    ==, ===(equal value and equal type), !=, !==, <, >, <=, >=

   let a = 5;
   let b = 5;
   console.log(a == b);

   let a = 5;
   let b = "5";
   console.log(a === b);

   let a = 5;
   let b = 5;
   console.log(a === b);

   let a = 5;
   let b = 5;
   console.log(a !== b);

   let a = 5;
   let b = 5;
   console.log(a < b);

(4) logical
    &&(and), ||(or), !(not)

    let a = 80;
    if(a >= 80 && a<=100){
        console.log("A+");
    }

    let a = 70;
    if(a >= 80 && a<=100){
        console.log("A+");
    }else{
        console.log("B")
    }



 */

    //  let rs = document.querySelector(".rs")
    //  let a = prompt(`enter first number`);
    //  let b = prompt(`enter second number`);
    //  let result = Number(a) + Number(b);
    //  document.write(result)
   

//    function funName(a){
//     console.log(`this is out first function..` +a);
//    }
//    funName(50)

// function funName(){
//     console.log(`this is out first function..`);
// }
// function newFun(a=50){
//     console.log(`this is out second function..` +a);
// }
// newFun()

let light = document.querySelector(`.light`);
let on = document.querySelector(`.on`);
let off = document.querySelector(`.off`);
 
on.addEventListener(`click`, function(){
  light.src = `https://www.w3schools.com/js/pic_bulbon.gif`
});

off.addEventListener(`click`, function(){
    light.src = `https://www.w3schools.com/js/pic_bulboff.gif`
  });
   
 

 

 

