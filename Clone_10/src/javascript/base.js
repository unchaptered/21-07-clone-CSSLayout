const nav_right_1=document.querySelector("#nav_right_1"); // Community
const nav_right_2=document.querySelector("#nav_right_2"); // Retail
const nav_right_3=document.querySelector("#nav_right_3"); // FOod
const nav_right_1_title=document.querySelector("#nav_right_1 .nav_right_title");
const nav_right_2_title=document.querySelector("#nav_right_2 .nav_right_title");
const nav_right_3_title=document.querySelector("#nav_right_3 .nav_right_title");
const nav_open_class="open";
const nav_display_none="display-none";
const nav_open_id=[
    `nav_right_1`,
    `nav_right_2`,
    `nav_right_3`,
]
let nav_open_count=0;
nav_right_1.addEventListener("click",nav_open);
nav_right_2.addEventListener("click",nav_open);
nav_right_3.addEventListener("click",nav_open);

function nav_open(event){
    // Settings 
    // Variables
    const nav_id=event.target.id;
    switch(nav_id){
        case "nav_right_1":
            if(nav_right_1.classList.contains(nav_open_class)===true){
                nav_close(event);
                break;
            } else {
                nav_right_1_title.classList.remove(nav_display_none);
                nav_right_2_title.classList.remove(nav_display_none);
                nav_right_3_title.classList.remove(nav_display_none);
                nav_right_1_title.classList.add(nav_display_none);
                nav_right_1.classList.add(nav_open_class);
                nav_right_2.classList.add(nav_open_class);
                nav_right_3.classList.add(nav_open_class);
            }
            break;
        case "nav_right_2":
            if(nav_right_2.classList.contains(nav_open_class)===true){
                nav_close(event);
                break;
            } else {
                nav_right_1_title.classList.remove(nav_display_none);
                nav_right_2_title.classList.remove(nav_display_none);
                nav_right_3_title.classList.remove(nav_display_none);
                nav_right_2_title.classList.add(nav_display_none);
                nav_right_2.classList.add(nav_open_class);
                nav_right_3.classList.add(nav_open_class);
                break;
            }
        case "nav_right_3":
            if(nav_right_3.classList.contains(nav_open_class)===true){
                nav_close(event);
                break;
                } else {
                    nav_right_1_title.classList.remove(nav_display_none);
                    nav_right_2_title.classList.remove(nav_display_none);
                    nav_right_3_title.classList.remove(nav_display_none);
                nav_right_3_title.classList.add(nav_display_none);
                nav_right_3.classList.add(nav_open_class);
                break;
            }
    }
}
function nav_close(event){
    console.log(event.target.id);
    switch(event.target.id){
        case nav_open_id[0]:
            nav_right_1_title.classList.remove(nav_display_none);
            nav_right_2_title.classList.remove(nav_display_none);
            nav_right_3_title.classList.remove(nav_display_none);
            nav_right_1.classList.remove(nav_open_class);
            nav_right_2.classList.remove(nav_open_class);
            nav_right_3.classList.remove(nav_open_class);
            break;
        case nav_open_id[1]:
            nav_right_1_title.classList.remove(nav_display_none);
            nav_right_2_title.classList.remove(nav_display_none);
            nav_right_3_title.classList.remove(nav_display_none);
            nav_right_1.classList.remove(nav_open_class);
            nav_right_2.classList.remove(nav_open_class);
            nav_right_3.classList.remove(nav_open_class);
            break;
        case nav_open_id[2]:
            nav_right_1_title.classList.remove(nav_display_none);
            nav_right_2_title.classList.remove(nav_display_none);
            nav_right_3_title.classList.remove(nav_display_none);
            nav_right_1.classList.remove(nav_open_class);
            nav_right_2.classList.remove(nav_open_class);
            nav_right_3.classList.remove(nav_open_class);
            break;
    }
}
/* 여기까지가 네비게이션 바 여닫는 기능
*/

const site_logo=document.querySelector("#site_logo");
site_logo.addEventListener("click", scrollToTop);
function scrollToTop(event){
    window.scrollTo({top:0,behavior:'smooth'});

}