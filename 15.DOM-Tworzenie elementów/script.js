document.addEventListener('DOMContentLoaded', () => {

// Z A D A N I E  1

var exe = document.querySelector('#root');
  var newElem = document.createElement('div');
  newElem.innerHTML = 'To jest nowy element';
  exe.appendChild(newElem);
  
 // Z A D A N I E  2
  
  const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
  const myList = document.createElement('ol');
  myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));  
  
  // Z A D A N I E  3
  
  newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});
  
    // Z A D A N I E  4
  
   var btn = document.createElement('button');
  btn.innerText = 'Click&Hide';
  btn.addEventListener('click', (event) => event.target.remove());
  exe.appendChild(btn);
  
  // Z A D A N I E  5
  
  var random = Math.round(Math.random() * 10);

  for (var a = 0; a < random; a++) {
      var someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      exe.appendChild(someDiv);
  }
  
  

});
