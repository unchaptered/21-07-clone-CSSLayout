const img_link="./src/img/index_main/";
const img_list=[
    {srcList:"house_01.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_02.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_03.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_04.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_05.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_06.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_07.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_08.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_09.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_10.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_11.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_12.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_13.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_14.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_15.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_16.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_17.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_18.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_19.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_20.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_21.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_22.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_23.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_24.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_25.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_26.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_27.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_28.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_29.jpg",
    titleList:`Instagram${Math.random()}`,
    },
    {srcList:"house_30.jpg",
    titleList:`Instagram${Math.random()}`,
    },
] // house_01 ~ house_03 length:30
const index_main_grid=document.querySelector("#index_main-grid");
const main_id="index_main-grid";
const img_class="index_main_img-src";
const title_class="index_main_img-title";


let img_list_random = [];
img_list_randomNum();
function img_list_randomNum () {
    for(var i=0; i<30; i++) {
    let n = Math.floor(Math.random() * 30);
    if (! sameNum(n)) {
    img_list_random.push(n);
    } else {
    i--;
    }
    }
    function sameNum (n) {
    return img_list_random.find((e) => (e === n));
    }
    return img_list_random;
}
operate_img();
// src/img/index_main/house_03.jpg
function operate_img(){
    let length_of_index_grid=0;
    let length_of_index_grid_undefined=100;
    let count;
    for(count=1; count<=length_of_index_grid_undefined; count++){
        if(index_main_grid.childNodes[count*2-1]===undefined){
            break;
        } else {
        }
        index_main_grid.childNodes[count*2-1].childNodes[1].src=`${img_link}${img_list[img_list_random[count-1]].srcList}`;
        index_main_grid.childNodes[count*2-1].childNodes[3].innerText=img_list[count-1].titleList;
    }
}

const nav_left=document.querySelector("#nav_left");
const nav_left_list=nav_left.childNodes[3];
generate_span();
function generate_span(){
    let count;
    for(count=1; count<=img_list_random.length; count++){
        const span=document.createElement("button");
        span.innerText=`${img_list[count-1].titleList}`;
        nav_left_list.appendChild(span);
    }
}


const button_projects=document.querySelector("#button_projects");
const button_practice=document.querySelector("#button_practice");
const button_expertise=document.querySelector("#button_expertise");
const button_news=document.querySelector("#button_news");
const button_exhibition=document.querySelector("#button_exhibition");
const button_contact=document.querySelector("#button_contact");
button_projects.addEventListener("click",button_achor);
button_practice.addEventListener("click",button_achor);
button_expertise.addEventListener("click",button_achor);
button_news.addEventListener("click",button_achor);
button_exhibition.addEventListener("click",button_achor);
button_contact.addEventListener("click",button_achor);

function button_achor(event){
    const event_id=event.target.id;
    switch (event_id){
        case "button_projects":
            window.scrollTo(0,0);
            break;
        case "button_practice":
            break;
        case "button_expertise":
            break;
        case "button_news":
            break;
        case "button_exhibition":
            break;
        case "button_contact":
            break;
    }
}