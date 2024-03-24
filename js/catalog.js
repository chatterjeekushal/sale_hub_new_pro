

let catalog_image_main1=document.querySelector("#catalog_image_main1")

//console.log(catalog_image_main1);

let circle_catalog1=document.querySelectorAll("#circle_catalog1")

//console.log(circle_catalog1);

Array.from(circle_catalog1).forEach((element,index) => {
    
    element.addEventListener('click',function(){

        catalog_image_main1.src=`./img/slide1image/image${index}.jpg`
        
    })
});





// slide 2

let catalog_image_main2=document.querySelector("#catalog_image_main2")

let circle_catalog2=document.querySelectorAll("#circle_catalog2");


Array.from(circle_catalog2).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main2.src=`./img/slide2image/image${index}.jpg`
    })
    
});



//slide 3


let catalog_image_main3=document.querySelector("#catalog_image_main3")

let circle_catalog3=document.querySelectorAll("#circle_catalog3")


Array.from(circle_catalog3).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main3.src=`./img/slide3image/image${index}.jpg`
    })
    
});


let catalog_image_main4=document.querySelector("#catalog_image_main4")

let circle_catalog4=document.querySelectorAll("#circle_catalog4")


Array.from(circle_catalog4).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main4.src=`./img/slide4image/image${index}.jpg`
    })
    
});


let catalog_image_main5=document.querySelector("#catalog_image_main5")

let circle_catalog5=document.querySelectorAll("#circle_catalog5")


Array.from(circle_catalog5).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main5.src=`./img/slide5image/image${index}.jpg`
    })
    
});


let catalog_image_main6=document.querySelector("#catalog_image_main6")

let circle_catalog6=document.querySelectorAll("#circle_catalog6")


Array.from(circle_catalog6).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main6.src=`./img/slide6image/image${index}.jpg`
    })
    
});



let catalog_image_main7=document.querySelector("#catalog_image_main7")

let circle_catalog7=document.querySelectorAll("#circle_catalog7")


Array.from(circle_catalog7).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main7.src=`./img/slide7image/image${index}.jpg`
    })
    
});




let catalog_image_main8=document.querySelector("#catalog_image_main8")

let circle_catalog8=document.querySelectorAll("#circle_catalog8")


Array.from(circle_catalog8).forEach((element,index) => {


    element.addEventListener('click',function(){

        catalog_image_main8.src=`./img/slide8image/image${index}.jpg`
    })
    
});