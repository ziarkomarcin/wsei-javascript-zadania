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
  
    // Z A D A N I E  6
  
  const myNewObjStr = { 
    div1: 'to jest div1', 
    span1: 'to jest span1', 
    div2: { 
      div3: 'to jest div3(2)', 
    }, 
    span2: 'to jest span2', 
    /* dopisałem sobie cyferki, 
    żeby mi się nie mieszało */
  }

  const r00t = document.getElementById('root');
  
  const firstDiv = document.createElement('div');
firstDiv.innerText = myNewObjStr.div1;

const firstSpan = document.createElement('span');
firstSpan.innerText = myNewObjStr.span1;

firstDiv.append(firstSpan);

document.body.append(firstDiv, r00t);

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = myNewObjStr.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = myNewObjStr.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, r00t);
  
    // Z A D A N I E  7
  
  var myOLlist = document.createElement('ol');
  myOLlist.id = "firstList";
  var myFirstButton = document.createElement('button');
  myFirstButton.id = "firstButton";
  myFirstButton.innerText = 'first OL list';

  var q = document.createElement('li');
  q.innerText = "Q";
  var w = document.createElement('li');
  w.innerText = "W";
  var e = document.createElement('li');
  e.innerText = "E";
  var r = document.createElement('li');
  r.innerText = "R";
  var t = document.createElement('li');
  t.innerText = "T";
  var y = document.createElement('li');
  y.innerText = "Y";

  myOLlist.appendChild(q);
  myOLlist.appendChild(w);
  myOLlist.appendChild(e);
  myOLlist.appendChild(r);
  myOLlist.appendChild(t);
  myOLlist.appendChild(y);

  
  var myNextOLlist = document.createElement('ol');
  myNextOLlist.id = "secondList";

  var mySecondButton = document.createElement('button');
  mySecondButton.id = "secondButton";
  mySecondButton.innerText = "second OL list";

  root.appendChild(myOLlist);
  root.appendChild(myFirstButton);
  root.appendChild(myNextOLlist);
  root.appendChild(mySecondButton);

  function toTWO(){
    var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if( listOfElements1.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }
  }
  document.querySelector('#firstButton').addEventListener('click', toTWO);

  function toOne(){
    var listTwo =document.querySelector("#firstList");
    var listOne =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if(listOfElements1.length < 1){
      document.querySelector("#secondButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#firstButton").disabled = false;
    }

  }
  document.querySelector('#secondButton').addEventListener('click', toOne);
  

});
