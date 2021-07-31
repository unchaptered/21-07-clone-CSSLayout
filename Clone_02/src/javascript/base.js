const nav_top_left_menu=document.querySelector("#button_simple_menu");
const nav_top_left_nai_sutdio=document.querySelector("#button_nail_studio");
const nav_menu_nail_studio=[
    "Book a Manicure",
    "Our Location",
    "Our Lookbook",
    "Private Event",
    "Gift Card",
];
const nav_top_left_shop_product=document.querySelector("#button_shop_product");
const nav_menu_shop_product=[
    "Shop Nail Care",
    "Shop Power Couples",
    "Shop Singles",
    "Shop All",
    "My Account",
]
const nav_top_middle_logo=document.querySelector("#button_logo");
const nav_top_right_journal=document.querySelector("#button_journal");
const nav_top_right_shopping_bag=document.querySelector("#button_shopping_bag");
const nav_top_more=document.querySelector("#nav_top_more");
const nav_top_more_1=document.querySelector("#nav_top_more .nav_top_more_menu:nth-child(1)");
const nav_top_more_2=document.querySelector("#nav_top_more .nav_top_more_menu:nth-child(2)");
const nav_top_more_3=document.querySelector("#nav_top_more .nav_top_more_menu:nth-child(3)");
const nav_top_more_4=document.querySelector("#nav_top_more .nav_top_more_menu:nth-child(4)");
const nav_top_more_5=document.querySelector("#nav_top_more .nav_top_more_menu:nth-child(5)");
const nav_top_id=[
    "button_simple_menu",  // 0
    "button_nail_studio",  // 1
    "button_shop_product", // 2
    "button_logo",         // 3
    "button_journal",      // 4
    "button_shopping_bag"  // 5
]
nav_top_left_menu.addEventListener("click",menu_folding_boolean_change);
nav_top_left_nai_sutdio.addEventListener("click",menu_folding_boolean_change);
nav_top_left_shop_product.addEventListener("click",menu_folding_boolean_change);
nav_top_middle_logo.addEventListener("click",menu_folding_boolean_change);
nav_top_right_journal.addEventListener("click",menu_folding_boolean_change);
nav_top_right_shopping_bag.addEventListener("click",menu_folding_boolean_change);

let menu_folding_boolean=false; //false 는 접혀있는 상태
let menu_folding_type=""; //현재 공백
// 1단계 폴더 펼쳐진지 확인
function menu_folding_boolean_change(event){
    if(menu_folding_boolean===false){
        menu_folding_type=event.target.id;
        nav_top_more_folding(event);
        menu_folding_boolean=true;
        console.log(`1단계 menu_folding_boolean_change true 폴더열기`);
    } else {
        console.log(`1단계 열려있는 폴더 닫을지 결정하기 메서드`);
        menu_folding_type_check(event);
    }
}
// 2단계 중복 여부 확인
function menu_folding_type_check(event){
    //현재 펼쳐진 메뉴가 뭔지 판단하고
    //같은 버튼을 눌렀으면 메뉴바를 닫고
    //다른 메뉴바를 눌렀으면 내용만 교체
        console.log(`menu_folding_type 기존 = ${menu_folding_type}`);
        console.log(`event.target.id   대체 = ${event.target.id}`);
    if(menu_folding_type===event.target.id){
        console.log(`메뉴 닫기`);
        menu_folding_type="";
        nav_top_more_reset(event);
        menu_folding_boolean=false;
    } else {
        console.log(`메뉴 대체`);
        menu_folding_type=event.target.id;
        nav_top_more_reset(event);
        nav_top_more_folding(event);
        menu_folding_boolean=true; //true로 유지
    }
}
// 3단계 내용 채우기
function nav_top_more_folding(event){
    switch(menu_folding_type){
        case nav_top_id[0]:
            break; //menu
        case nav_top_id[1]:
            if(menu_folding_boolean===true){
                nav_top_more.classList.remove("display-none");
            } else {
                nav_top_more.classList.add("display-none");
            }
            nav_top_more_1.innerHTML=nav_menu_nail_studio[0];
            nav_top_more_2.innerHTML=nav_menu_nail_studio[1];
            nav_top_more_3.innerHTML=nav_menu_nail_studio[2];
            nav_top_more_4.innerHTML=nav_menu_nail_studio[3];
            nav_top_more_5.innerHTML=nav_menu_nail_studio[4];
            break; //studio
        case nav_top_id[2]:
            if(menu_folding_boolean===true){
                nav_top_more.classList.remove("display-none");
            } else {
                nav_top_more.classList.add("display-none");
            }
            nav_top_more_1.innerHTML=nav_menu_shop_product[0];
            nav_top_more_2.innerHTML=nav_menu_shop_product[1];
            nav_top_more_3.innerHTML=nav_menu_shop_product[2];
            nav_top_more_4.innerHTML=nav_menu_shop_product[3];
            nav_top_more_5.innerHTML=nav_menu_shop_product[4];
            break; //product
        case nav_top_id[3]:
            window.scrollTo(0,0);
            break; //logo
        case nav_top_id[4]:
            break; //journal
        case nav_top_id[5]:
            break; //shopping bag
        default: break;
    }
}  //nav_menu_nail_studio[];
// 3단계 메뉴닫고 초기화
function nav_top_more_reset(event){
    nav_top_more.classList.add("display-none");
    nav_top_more_1.innerHTML="1";
    nav_top_more_2.innerHTML="1";
    nav_top_more_3.innerHTML="1";
    nav_top_more_4.innerHTML="1";
    nav_top_more_5.innerHTML="1";
}