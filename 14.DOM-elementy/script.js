// Z A D A N I E  1

document.addEventListener('DOMContentLoaded', () => {
  var tagsTab = [];
    document.querySelectorAll('.more-divs').forEach((element) => {
        if (!tagsTab.includes(element.tagName)) {
            tagsTab.push(element.tagName);
        }
    });
    console.log(tagsTab);
    
// Z A D A N I E  2
  
  function display(a) {
    // . 1 .
        console.log(a.innerHTML);
    // . 2 .
        console.log(a.outerHTML);
    // . 3 .
        console.log([...a.classList].join(''));
    // . 4 .
        console.log([...a.classList]);
    // . 5 .
        console.log(a.dataset)
    }

    display(document.querySelector('.short-list'));    
    
    
});
