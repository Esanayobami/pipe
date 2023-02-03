let openMenu = document.getElementById("openmenu");
let closeMenu = document.getElementById("closemenu");
let menu = document.getElementById("menu");

    if(openmenu){
        openMenu.addEventListener("click" , () =>{
            menu.classList.add("menuclass")
        })
    };
    if(closeMenu){
        closeMenu.addEventListener("click" , ()=>{
            menu.classList.remove("menuclass")
        })
    };