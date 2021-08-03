// 메뉴 클릭시 맨위로
const menu_logo=document.querySelector("#nav_top_brand");
menu_logo.addEventListener("click",scrollTop);
function scrollTop(){
    window.scrollTo({top:0, behavior:'smooth'});
    
}
const menu_button_product=document.querySelector(".product");
const menu_button_instagram=document.querySelector(".instagram");
const menu_button_about_us=document.querySelector(".aboutus");
const menu_button_product_2=document.querySelector(".product2");
const menu_button_instagram_2=document.querySelector(".instagram2");
const menu_button_about_us_2=document.querySelector(".aboutus2");
menu_button_product.addEventListener("click",scrollToSomething);
menu_button_instagram.addEventListener("click",scrollToSomething);
menu_button_about_us.addEventListener("click",scrollToSomething);
menu_button_product_2.addEventListener("click",scrollToSomething);
menu_button_instagram_2.addEventListener("click",scrollToSomething);
menu_button_about_us_2.addEventListener("click",scrollToSomething);
let count_see_product=0;
const top_instagram=document.querySelector("#main_product").offsetTop;
const top_aboutus=document.querySelector("#nav_bottom").offsetTop;
function scrollToSomething(event){
    switch(event.target.classList[0]){
        case "product":
        case "product2":
            scrollToProduct_counting();
            break;
        case "instagram":
        case "instagram2":
            window.scrollTo({top:top_instagram, behavior:'smooth'});
            break;
        case "aboutus":
        case "aboutus2":
            window.scrollTo({top:top_aboutus, behavior:'smooth'});
            break;
        
    }
}

function scrollToProduct_counting(){
    switch(count_see_product){
        case 0:
            const product_1=document.querySelector(".main_img_div:nth-child(1)").offsetTop;
            window.scrollTo({top: product_1, behavior:'smooth'});
            count_see_product=count_see_product+1;
            break;
        case 1:
            const product_2=document.querySelector(".main_img_div:nth-child(2)").offsetTop;
            window.scrollTo({top: product_2, behavior:'smooth'});
            count_see_product=count_see_product+1;
            break;
        case 2:
            const product_3=document.querySelector(".main_img_div:nth-child(3)").offsetTop;
            window.scrollTo({top: product_3, behavior:'smooth'});
            count_see_product=count_see_product+1;
            break;
        case 3:
            const product_4=document.querySelector(".main_img_div:nth-child(4)").offsetTop;
            window.scrollTo({top: product_4, behavior:'smooth'});
            count_see_product=count_see_product+1;
            break;
        case 4:
            const product_5=document.querySelector(".main_img_div:nth-child(5)").offsetTop;
            window.scrollTo({top: product_5, behavior:'smooth'});
            count_see_product=0;
            break;
    }
}