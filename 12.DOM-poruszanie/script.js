   // Z A D A N I E  1

document.addEventListener('DOMContentLoaded', () => {
    // .1.
    console.log(document.querySelector('#buz').parentElement);
    // .2.
    console.log(document.querySelector('#baz').previousElementSibling);
    // .3.
    console.log(document.querySelector('#foo').children);
    // .4.
    console.log(document.querySelector('#foo').parentElement);
    // .5.
    console.log(document.querySelector('#foo').children[0]);
    // .6.
    console.log((function() {
        let foo = document.querySelector('#foo');
        let number = foo.children.length-1;
        let midChild = Math.round(number / 2);
        return foo.children[midChild];

 }));
});
   // Z A D A N I E  2
                
    let downloadTxt = function(elementId) {
        let el = document.querySelector(`#${elementId}`);
        el.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    downloadTxt('ex2');
                
   // Z A D A N I E  3

  document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

   // Z A D A N I E  4

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });

   // Z A D A N I E  5

    let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    // .1.
    function first(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .2.
    function second(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .3.
    function third(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .4.
    function fourth(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .5.
    function fifth(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', third)});

   // Z A D A N I E  6

    // .1.
    let a  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
    // .2.
    let b = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    // .3.
    let c = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
});
