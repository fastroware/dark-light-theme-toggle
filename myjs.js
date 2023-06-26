var btn = document.getElementById("btn-toggler");
var main = document.getElementById("main");
btn.addEventListener("click", change_theme);

function change_theme()
{
    main.classList.toggle("dark-theme");
    if(main.classList == 'main dark-theme'){
        btn.innerHTML = 'Light Theme';
    } else {
        btn.innerHTML = 'Dark Theme';
    }
}