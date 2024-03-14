

let homelink=document.getElementById("home_list");

let navhome=document.querySelector(".nav_home");

let manindocument=document.querySelector("section");



homelink.addEventListener("mouseenter",()=>{

navhome.classList.remove("d_none");

})



manindocument.addEventListener("mouseenter",()=>{

    navhome.classList.add("d_none");
    
    })



let bloglink=document.getElementById("blog_list");

let navblog=document.querySelector(".nav_blog")


bloglink.addEventListener("mouseenter",()=>{

    navblog.classList.remove("d_none");
    
    })


    manindocument.addEventListener("mouseenter",()=>{

        navblog.classList.add("d_none");
        
        })



        // search area java script


        let searchlink=document.querySelector(".search_list");

        let searcharea=document.querySelector(".search_area");

    searchlink.addEventListener("click",()=>{

searcharea.classList.remove("search_area_top")

    })

    let close=document.querySelector(".close")

    close.addEventListener('click',()=>{

        searcharea.classList.add("search_area_top");
        
    })


    let account=document.querySelector(".account");

    let account_list=document.querySelector(".account_list");

    account.addEventListener('mouseenter',function(){

        account_list.classList.remove("d_none")

    })

    manindocument.addEventListener("mouseenter",()=>{

        account_list.classList.add("d_none");
        
        })