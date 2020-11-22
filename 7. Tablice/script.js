// Z A D A N I E  1

const tab = [1, 2, 3, 4];
console.log(tab);

// Z A D A N I E  2

    const tab2 = [1, 2, "XD", 3, 4, 5, "XD2", 6, 7, 8, 9, "XD3", 0];
  // . 1 .  
    console.log(tab2[0], tab2[1]); 
  // . 2 .
    console.log(tab2[tab2.length-1]);
  // . 3 .
    console.log(tab2);
  // . 4 .
    for (let x = 1; x < tab2.length - 1; x += 2) {
    console.log(tab2[x]);
    }
  // . 5 .
    console.log(tab2.filter((value) => typeof value === 'string'));
  // . 6 .
    console.log(tab2.filter((value) => typeof value === 'number'));

// Z A D A N I E  3

const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  // . 1 .
    var sum = 0;
for (var a = 0; a < numbers.length; a++) {
  sum += numbers[a];
}
    console.log(sum);
  // . 2 .
    var diff = 0;
for (var b = 0; b < numbers.length; b++) {
  diff -= numbers[b];
}
    console.log(diff);
  // . 3 .
    console.log(sum/numbers.length);
  // . 4 .
    console.log(tab2.filter(x => x % 2 == 0));
  // . 5 .
    console.log(tab2.filter(x => x % 2 != 0));
  // . 6 .
    let max = Math.max(...numbers);
    console.log(max);
  // . 7 . 
    let min = Math.min(...numbers);
    console.log(min);
  // . 8 .
    numbers.reverse();
    console.log(numbers);

// Z A D A N I E  4

    function xxx(tab){
    return tab.reduce((a,b) => (a+b));
}
console.log(xxx([1,2,3,4,5]));

// Z A D A N I E  5

function xxx(tab){
    let average = tab.reduce((a, b) => a += b) / tab.length;

    tab.map((a) => console.log(a * average));
}
xxx([1,2,3,4,5]);

// Z A D A N I E  6
