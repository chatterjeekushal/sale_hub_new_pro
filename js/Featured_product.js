

let color_circles = document.querySelectorAll(".color_circle");

let product_color = document.getElementById("product_color")

let product_price = document.querySelector(".product_price")

let product_image = document.querySelector("#product_image");

//console.log(product_image);

//console.log(color_circles);

Array.from(color_circles).forEach((element, index) => {


    element.addEventListener('click', function (e) {

        let color_target = e.target.id

        product_color.innerHTML = color_target;

        if (color_target == "Olivegreen") {

            product_price.innerHTML = "$120.00"
            product_image.src = "./img/product_image/image0_olivegreen.jpg"
        }

        else if (color_target == "Black") {
            product_price.innerHTML = "$140.00"

            product_image.src = "./img/product_image/image1_black.jpg"
        }

        else if (color_target == "Peich") {
            product_price.innerHTML = "$100.00"

            product_image.src = "./img/product_image/image2_peich.jpg"

        }


        else if (color_target == "satewhite") {
            product_price.innerHTML = "$160.00"

            product_image.src = "./img/product_image/image3_white.jpg"
        }


        else if (color_target == "purple") {
            product_price.innerHTML = "$150.00"

            product_image.src = "./img/product_image/image4_purple.jpg"
        }


        else {

            console.log("price not abalabel");
        }


    })

});









let product_panel_box = document.querySelectorAll(".product_panel_box");

let product_size = document.querySelector("#product_size")

console.log(product_size);

console.log(product_panel_box);



Array.from(product_panel_box).forEach((element, index) => {


    element.addEventListener('click', function (e) {

        product_size.innerHTML = e.target.id

    })
});


let close_data=document.querySelector(".notyfy_box_closer")

close_data.addEventListener('click',function(){

let pre=close_data.parentElement

pre.parentElement.style.display="none"

})


let dis_size=document.querySelectorAll(".dis")

dis_size.forEach((element, index) => {
    element.addEventListener('click', function(e) {
    
        if (e.target.id=="M" || e.target.id=="XL") {

            let pre = close_data.parentElement;
            pre.parentElement.style.display = "flex";
          
        } else {
            alert("something wrong");
        }
    });
});



