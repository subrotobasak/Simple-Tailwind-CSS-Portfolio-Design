let mobile_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");
let menu_close = document.getElementById("menu_close");

mobile_icon.addEventListener ("click", () =>{
    main_menu.classList.toggle('hidden');
})

menu_close.addEventListener ("click", () => {
    main_menu.classList.toggle('hidden');
})