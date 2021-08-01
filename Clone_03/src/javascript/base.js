const index_num_1=document.querySelector("#index_num_1");
const index_num_2=document.querySelector("#index_num_2");
const index_num_3=document.querySelector("#index_num_3");
const index_num_4=document.querySelector("#index_num_4");
const index_num_5=document.querySelector("#index_num_5");
const index_num_6=document.querySelector("#index_num_6");
const index_num_7=document.querySelector("#index_num_7");
const index_num_8=document.querySelector("#index_num_8");
const index_num_9=document.querySelector("#index_num_9");
const index_num_10=document.querySelector("#index_num_10");
const index_title=document.querySelector("#index_title");
const index_img=document.querySelector("#index_img");
const index_menu=document.querySelector("#index_menu");
const index_food_name=document.querySelector("#index_empty_1");
const index_menu_close=document.querySelector("#index_menu_close");
const index_menu_close_title=document.querySelector("#index_menu_title");
let index_img_file=document.querySelector(".index_img_file-resize");
const index_num_list=[
    "index_num_1", // index_num_list[0]
    "index_num_2", // index_num_list[1]
    "index_num_3", // index_num_list[2]
    "index_num_4", // index_num_list[3]
    "index_num_5", // index_num_list[4]
    "index_num_6", // index_num_list[5]
    "index_num_7", // index_num_list[6]
    "index_num_8", // index_num_list[7]
    "index_num_9", // index_num_list[8]
    "index_num_10", // index_num_list[9]
    "index_title", // index_num_list[10]
];
const index_img_list=[
    "./src/img/no_product_randering/0.jpg", // index_img_list[0]
    "./src/img/no_product_randering/1.jpg", // index_img_list[1]
    "./src/img/no_product_randering/2.jpg", // index_img_list[2]
    "./src/img/no_product_randering/3.jpg", // index_img_list[3]
    "./src/img/no_product_randering/4.jpg", // index_img_list[4]
    "./src/img/no_product_randering/5.jpg", // index_img_list[5]
    "./src/img/no_product_randering/6.jpg", // index_img_list[6]
    "./src/img/no_product_randering/7.jpg", // index_img_list[7]
    "./src/img/no_product_randering/8.jpg", // index_img_list[8]
    "./src/img/no_product_randering/9.jpg", // index_img_list[9]
    "./src/img/no_product_randering/10.jpg" // index_img_list[10]
];
const food_name=[
    "Top 10 popular dishes",
    "Beef Stake",
    "Toast Sandwitch",
    "Avocado Salad",
    "Garden Vagetable",
    "Well-done Salmon",
    "Cold Pasta",
    "Hot Crap Soup",
    "Thin Beef Stake",
    "Western Brunch",
    "Egg and Bacon",
]
index_num_1.addEventListener("mouseover",hover_event);
index_num_2.addEventListener("mouseover",hover_event);
index_num_3.addEventListener("mouseover",hover_event);
index_num_4.addEventListener("mouseover",hover_event);
index_num_5.addEventListener("mouseover",hover_event);
index_num_6.addEventListener("mouseover",hover_event);
index_num_7.addEventListener("mouseover",hover_event);
index_num_8.addEventListener("mouseover",hover_event);
index_num_9.addEventListener("mouseover",hover_event);
index_num_10.addEventListener("mouseover",hover_event);
index_title.addEventListener("mouseover",hover_event);
index_menu.addEventListener("click",open_menu);
index_menu_close.addEventListener("click",close_menu);
index_menu_close_title.addEventListener("click",close_menu);
// box 에 hover 시 index_img 체인지


const food_ads_real=document.querySelector("#index_text-animation");
const food_ads_0=document.querySelector("#index_text-animation span:nth-child(1)");
const food_ads_1=document.querySelector("#index_text-animation span:nth-child(2)");
const food_ads_2=document.querySelector("#index_text-animation span:nth-child(3)");
const food_ads_3=document.querySelector("#index_text-animation span:nth-child(4)");
const food_ads_4=document.querySelector("#index_text-animation span:nth-child(5)");
const food_ads_5=document.querySelector("#index_text-animation span:nth-child(6)");
const food_ads_6=document.querySelector("#index_text-animation span:nth-child(7)");
const food_ads_7=document.querySelector("#index_text-animation span:nth-child(8)");
const food_ads_8=document.querySelector("#index_text-animation span:nth-child(9)");
const food_ads_9=document.querySelector("#index_text-animation span:nth-child(10)");
const food_ads_10=document.querySelector("#index_text-animation span:nth-child(11)");
food_ads_method();
function food_ads_method() {
    food_ads_0.innerHTML="[`20년 최고 인기 음식 리스트]";
    food_ads_1.innerHTML="1위 "+food_name[1];
    food_ads_2.innerHTML="2위 "+food_name[2];
    food_ads_3.innerHTML="3위 "+food_name[3];
    food_ads_4.innerHTML="4위 "+food_name[4];
    food_ads_5.innerHTML="5위 "+food_name[5];
    food_ads_6.innerHTML="6위 "+food_name[6];
    food_ads_7.innerHTML="7위 "+food_name[7];
    food_ads_8.innerHTML="8위 "+food_name[8];
    food_ads_9.innerHTML="9위 "+food_name[9];
    food_ads_10.innerHTML="10위 "+food_name[10];
}



function hover_event(event){
    console.log(event.target.id);
    console.dir(index_img_file.src);
    switch(event.target.id){
        case index_num_list[0]:
            console.log(`이미지 전환 ${index_img_list[1]}`);
            index_food_name.innerHTML=food_name[1];
            index_img_file.src=`${index_img_list[1]}`;
            break;
        case index_num_list[1]:
            console.log(`이미지 전환 ${index_img_list[2]}`);
            index_food_name.innerHTML=food_name[2];
            index_img_file.src=`${index_img_list[2]}`;
            break;
        case index_num_list[2]:
            console.log(`이미지 전환 ${index_img_list[3]}`);
            index_food_name.innerHTML=food_name[3];
            index_img_file.src=`${index_img_list[3]}`;
            break;
        case index_num_list[3]:
            console.log(`이미지 전환 ${index_img_list[4]}`);
            index_food_name.innerHTML=food_name[4];
            index_img_file.src=`${index_img_list[4]}`;
            break;
        case index_num_list[4]:
            console.log(`이미지 전환 ${index_img_list[5]}`);
            index_food_name.innerHTML=food_name[5];
            index_img_file.src=`${index_img_list[5]}`;
            break;
        case index_num_list[5]:
            console.log(`이미지 전환 ${index_img_list[6]}`);
            index_food_name.innerHTML=food_name[6];
            index_img_file.src=`${index_img_list[6]}`;
            break;
        case index_num_list[6]:
            console.log(`이미지 전환 ${index_img_list[7]}`);
            index_food_name.innerHTML=food_name[7];
            index_img_file.src=`${index_img_list[7]}`;
            break;
        case index_num_list[7]:
            console.log(`이미지 전환 ${index_img_list[8]}`);
            index_food_name.innerHTML=food_name[8];
            index_img_file.src=`${index_img_list[8]}`;
            break;
        case index_num_list[8]:
            console.log(`이미지 전환 ${index_img_list[9]}`);
            index_food_name.innerHTML=food_name[9];
            index_img_file.src=`${index_img_list[9]}`;
            break;
        case index_num_list[9]:
            console.log(`이미지 전환 ${index_img_list[10]}`);
            index_food_name.innerHTML=food_name[10];
            index_img_file.src=`${index_img_list[10]}`;
            break;
        case index_num_list[10]://title
            console.log(`이미지 전환 기본이미지`);
            index_food_name.innerHTML=food_name[0];
            index_img_file.src=`${index_img_list[0]}`;
            break;
    }
}

function open_menu(event){
    food_ads_real.classList.add("index_display-none");
    index_menu_close.parentNode.parentNode.classList.add("index_menu-big");
    index_menu_close.parentNode.parentNode.classList.remove("index_display-none");
}
function close_menu(event){
    food_ads_real.classList.remove("index_display-none");
    index_menu_close.parentNode.parentNode.classList.remove("index_menu-big");
    index_menu_close.parentNode.parentNode.classList.add("index_display-none");
}