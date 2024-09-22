//Menu Bar Open and Close function
var menuIcon=document.querySelector(".menu-icon")
var Sidebar=document.querySelector(".side-bar")
var container=document.querySelector(".container")

menuIcon.onclick=function(){

    Sidebar.classList.toggle("small-side")
    container.classList.toggle("large-container")
}
