// Z A D A N I E  1

let number1 = 1;
let number2 = 2;

if(number1>number2) {
  console.log('Liczba1 jest większa');  
} else {
  console.log('Liczba2 jest większa');  
} 

// Z A D A N I E  2

let q = 226;
let w = 18;
let e = 10;

if (q > w) {
    if (q > e) {
        console.log("Liczba q jest największa");
    } else {
        console.log("Liczba e jest największa");
    }
} else if (w > e) {
    console.log("Liczba w jest największa");
} else {
    console.log("Liczba e jest największa");
}

// Z A D A N I E  3

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Z A D A N I E  4

let number1= 0;

for (let i = 0; i <= 10; i++) {
   number1 += i;
}

console.log(number1);

// Z A D A N I E  5 

var n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}

// Z A D A N I E  6

for (let x = 1; x <= 10; x++) {
    for (let z = 1; z <= 10; z++) {
        console.log("x= " + x + ", z= " + z);
    }
}

// Z A D A N I E  7 

console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

// Z A D A N I E  8.a

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Z A D A N I E  8.b

let star = ' *';

for(let x = 0; x < 5; x++) {
 var result = '';
 for(y = 0; y < 5 - x; y++) {
 result += ' ';
 }
 for(z = 0; z < x + 1; z++) {
 result += star;
 }
 console.log(result);
 }
