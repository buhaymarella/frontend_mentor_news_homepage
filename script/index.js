
function show_menu(){
    document.querySelector('#nav-link-cp').style.display = "block";
    document.querySelector('#body').style.background = "hsla(240, 100%, 5%, 0.282)";

}
function hide_menu(){
    document.querySelector('#nav-link-cp').style.display = "none";
    document.querySelector('#body').style.background = "var(--Off-white)";
    document.querySelector('#nav-link-cp').addClassList('transition-hide');

}