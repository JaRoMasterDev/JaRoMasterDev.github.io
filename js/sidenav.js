const openNav = () => {
    document.getElementById("nav").className == "active" ? 
    document.getElementById("nav").className = "" : 
    document.getElementById("nav").className = "active"
}