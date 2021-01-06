document.addEventListener('DOMContentLoaded', () => {

  // Z A D A N I E  1
    
      // .1.
      document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
      // .2.
      document.addEventListener('mousemove', (event) => console.log(event));
      // .3.
      document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
      // .4.
      document.addEventListener('keypress', (event) => console.log(event));
      // .5.
      document.addEventListener('scroll', (event) => console.log(event));
      // .6.
      document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
  
  // Z A D A N I E  2
  
      document.querySelector('#ex2').addEventListener("click", function(){
        var a = document.querySelector('#ex2');
        var attrib = a.dataset.text;
        var txt = document.querySelector('#span-ex2')
        txt.innerHTML = attrib;
    });
    
  // Z A D A N I E  3
  
  function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

switchColor();

    // Z A D A N I E  4
    
    function checkInputText(target) {
        var chars = /^[a-zA-Z]+$/;

        return chars.test(target.value);
    }
    document.querySelector('#input-test').addEventListener('change', (event) => {
        var isItOk = checkInputText(event.target);
        var itWasntOk = document.querySelector('#ex3-err');

        if (isItOk == false) {
            itWasntOk.innerText = "Nie możesz wpisywać cyfr!";
            return;
        }
        itWasntOk.innerText = "";
    });
    
    // Z A D A N I E  5
  
});
