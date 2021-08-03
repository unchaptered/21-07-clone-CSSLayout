const menu_button=document.querySelector("#nav_menu-button");
const menu_folding=document.querySelector("#nav_top-menu");
const menu_none="display-none";
menu_button.addEventListener("click",open_menu);
function open_menu(event){
    console.log(menu_folding.classList);
    console.log(menu_folding.classList.length);
    let length_of_class=menu_folding.classList.length;
    let check_about_folding=0; //상수
    while(length_of_class!==0){
        if(menu_folding.classList[length_of_class-1]===menu_none){
            check_about_folding=check_about_folding+1;
        } else {
            // 아니면 넘어감
        }
        length_of_class=length_of_class-1;
    }

    if(check_about_folding===1){ //접혀 있다는 뜻
        menu_folding.classList.remove(menu_none);
    } else if (check_about_folding===0){ //펼쳐져 있다는 뜻 
        menu_folding.classList.add(menu_none);
    } else {
        console.log(`에러가 발생했습니다.`);
    }
}