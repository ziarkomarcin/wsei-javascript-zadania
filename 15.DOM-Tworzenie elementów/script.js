document.addEventListener('DOMContentLoaded', () => {

// Z A D A N I E  1

var exe = document.querySelector('#root');
  var newElem = document.createElement('div');
  newElem.innerHTML = 'To jest nowy element';
  exe.appendChild(newElem);
  
 // Z A D A N I E  2
  
  var ol = document.createElement('ol');

  var first = document.createElement('li');
  first.innerText = "Cherry";
  var second = document.createElement('li');
  second.innerText = "Orange";
  var third = document.createElement('li');
  third.innerText = "Peach";
  var fourth = document.createElement('li');
  fourth.innerText = "Apple";
  var fifth = document.createElement('li');
  fifth.innerText = "Watermelon";
  var sixth = document.createElement('li');
  sixth.innerText = "Sea Buckthorn";

  exe.appendChild(ol);
  ol.appendChild(first);
  ol.appendChild(second);
  ol.appendChild(third);
  ol.appendChild(fourth);
  ol.appendChild(fifth);
  ol.appendChild(sixth);
  
  // Z A D A N I E  3
  

});
