const nav_menu_folding=document.querySelector("#btn_menu-folding");
const nav_nail_studio=document.querySelector("#btn_nail_studio");
const nav_shop_product=document.querySelector("#btn_shop_product");
const nav_logo=document.querySelector("#btn_logo");
const nav_journal=document.querySelector("#btn_journal");
const nav_shopping=document.querySelector("#btn_shopping");
const nav_shopping_count=document.querySelector("#btn_shopping-count");
const nav_menu=document.querySelector("#nav-top_second");
const nav_menu_1=document.querySelector("#nav-top_second button:nth-child(1)");
const nav_menu_2=document.querySelector("#nav-top_second button:nth-child(2)");
const nav_menu_3=document.querySelector("#nav-top_second button:nth-child(3)");
const nav_menu_4=document.querySelector("#nav-top_second button:nth-child(4)");
const nav_menu_5=document.querySelector("#nav-top_second button:nth-child(5)");

const menu_sort_of_id=[
    "btn_menu-folding",     // 0 replace
    "btn_nail_studio",      // 1 replace
    "btn_shop_product",     // 2 replace
    "btn_logo",             // 3
    "btn_journal",          // 4
    "btn_shopping",         // 5
    "btn_shopping-count",   // 6
];
const menu_detail_nail_studio=[
    "Book a Manicure",
    "Our Location",
    "Our Lookbook",
    "Private Event",
    "Gift Card",
];
const menu_datail_shop_product=[
    "Shop Nail Care",
    "Shop Power Couples",
    "Shop Singles",
    "Shop All",
    "My Account",
];
const display_none="display-none";
let menu_boolean=false; //false 는 접혀있는 지 확인
let menu_name_id="";

nav_menu_folding.addEventListener("click",menu_click);
nav_nail_studio.addEventListener("click",menu_click);
nav_shop_product.addEventListener("click",menu_click);
nav_logo.addEventListener("click",menu_click);
nav_journal.addEventListener("click",menu_click);
nav_shopping.addEventListener("click",menu_click);
nav_shopping_count.addEventListener("click",menu_click);

// 세부 메뉴 클릭
// nav_menu_1.addEventListener("click",menu_click);
// nav_menu_2.addEventListener("click",menu_click);
// nav_menu_3.addEventListener("click",menu_click);
// nav_menu_4.addEventListener("click",menu_click);
// nav_menu_5.addEventListener("click",menu_click);

nav_menu_folding.classList.add(display_none);

function menu_click(event){
    let click_id;
    if(event.target.id===""){
        click_id=event.target.parentNode.id;
        console.log(`공백 ${event.target.parentNode.id}`);
    } else {
        click_id=event.target.id;
        console.log(event.target.id);
    }

    if (click_id===menu_sort_of_id[3]){
        menu_text_replace(click_id);
    } else if (click_id===menu_sort_of_id[4]) {
        menu_text_replace(click_id);
    } else if (click_id===menu_sort_of_id[5]) {
        menu_text_replace(click_id);
    } else if (click_id===menu_sort_of_id[6]) {
        menu_text_replace(click_id);
    } else {
        console.log(`#${click_id}`);
        switch (menu_boolean){
            case false:
                if(menu_name_id===click_id){ //같은 메뉴 2번 클릭
                    menu_close();
                } else {
                    menu_open(click_id);
                }
                break;
            case true:
                menu_open(click_id);
                break;
            default: console.log("에러가 발생했습니다.");
        }
    }
}

function menu_open(click_id){
    menu_name_id=click_id;
    console.log(`menu_open()`);
    nav_menu.parentNode.classList.remove(display_none);
    menu_text_replace(click_id);
}
function menu_close(event){
    menu_name_id="";
    console.log(`menu_close()`);
    nav_menu.parentNode.classList.add(display_none);
}
function menu_text_replace(click_id){
    console.log(`클릭한 아이디는 ${click_id}`);
    nav_menu_5.classList.remove(display_none);
    switch (click_id) {
        case "btn_menu-folding":
            nav_menu_1.innerHTML=`${menu_sort_of_id[1]}`;
            nav_menu_2.innerHTML=`${menu_sort_of_id[2]}`;
            nav_menu_3.innerHTML=`${menu_sort_of_id[4]}`;
            nav_menu_4.innerHTML=`${menu_sort_of_id[5]}`;
            nav_menu_5.classList.add(display_none);
            break;
        case "btn_nail_studio":
            nav_menu_1.innerHTML=`${menu_detail_nail_studio[0]}`;
            nav_menu_2.innerHTML=`${menu_detail_nail_studio[1]}`;
            nav_menu_3.innerHTML=`${menu_detail_nail_studio[2]}`;
            nav_menu_4.innerHTML=`${menu_detail_nail_studio[3]}`;
            nav_menu_5.innerHTML=`${menu_detail_nail_studio[4]}`;
            break;
        case "btn_shop_product":
            nav_menu_1.innerHTML=`${menu_datail_shop_product[0]}`;
            nav_menu_2.innerHTML=`${menu_datail_shop_product[1]}`;
            nav_menu_3.innerHTML=`${menu_datail_shop_product[2]}`;
            nav_menu_4.innerHTML=`${menu_datail_shop_product[3]}`;
            nav_menu_5.innerHTML=`${menu_datail_shop_product[4]}`;
            break;
        case menu_sort_of_id[3]: // logo
            window.scrollTo(0,0);
            console.log(`다른 기능 시행 : ${menu_sort_of_id[3]}`);
            break;
        case menu_sort_of_id[4]:
            console.log(`다른 기능 시행 : ${menu_sort_of_id[4]}`);
            break;
        case menu_sort_of_id[5]:
            console.log(`다른 기능 시행 : ${menu_sort_of_id[5]}`);
            break;
        case menu_sort_of_id[6]:
            console.log(`다른 기능 시행 : ${menu_sort_of_id[6]}`);
            break;
        default: console.log("에러가 발생했습니다.");
    }
}