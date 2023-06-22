
var menuTitleDad = document.querySelector(".title-dad .menu")

back.addEventListener('click', function(){
    tab.classList.add('hidden-back')
})
next.addEventListener('click', function(){
    tab.classList.add('hidden-next')
})  
function anMenu(){
    menuTitleDad.classList.toggle('menu-dad')
} 

function san_pham(index) {
    window.location.href = "San_pham_" + index + ".html";
  }
  
     

