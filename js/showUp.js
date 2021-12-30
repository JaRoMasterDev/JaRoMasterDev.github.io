document.getElementById("upbtn");

let showUp = () => {
    var scrollY = window.scrollY;
    if(scrollY > 300){
        upbtn.className = "show";
    }
    else{
        upbtn.className = "hide";
    }
}

window.addEventListener("scroll", showUp)