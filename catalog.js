


//hover icon active

  let catalog_slider=document.querySelectorAll(".catalog_slider");

  let heart=document.querySelectorAll(".bi-heart");

  let images=document.querySelectorAll(".bi-images");

let catalogimage=document.querySelectorAll("#catalog_image1");

  
  

  catalog_slider.forEach((element,index,array) => {
    
element.addEventListener('mouseenter',(e)=>{



  // remove the class from the clicked element

heart[index].classList.remove("catalog_icon_active")

images[index].classList.remove("catalog_icon_active")

catalogimage[0].src="./img/catalog_slider0.1.jpg"

catalogimage[1].src="./img/catalog_slider0.2.jpg"
catalogimage[2].src="./img/catalog_slider0.3.jpg"
catalogimage[3].src="./img/catalogimg4.jpg"

})


element.addEventListener('mouseleave',()=>{

heart[index].classList.add("catalog_icon_active")


images[index].classList.add("catalog_icon_active")

catalogimage[0].src="./img/catalogslider1.jpg"
catalogimage[1].src="./img/catalogimg2.jpg"
catalogimage[2].src="./img/catalogimg3.jpg"
catalogimage[3].src="./img/catalog_slider0.4.jpg"

})

  });




































var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });




