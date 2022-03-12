window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var NavBar =  document.getElementById("NavBar")

function showMenu(){
    NavBar.style.left = "-15px";
}

function hideMenu(){
    NavBar.style.left = "-300px";
}