let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  // section.forEach(sec =>{
  //   let top = window.scrollY;
  //   let height = sec.offsetHeight;
  //   let offset = sec.offsetTop - 150;
  //   let id = sec.getAttribute('id');

  //   if(top => offset && top < offset + height){
  //     navLinks.forEach(links =>{
  //       links.classList.remove('active');
  //       document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
  //     });

  //   };

  // });
}




var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

 
// function popup-box
const contentItems = document.querySelector(".content-item");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

contentItems.addEventListener("click", function (event) {
  console.log(event.target.tagName.toLowerCase())
  if (event.target.tagName.toLowerCase() == "button") {
    const item =event.target.parentElement;
    const title = item.querySelector("h4").innerHTML;
    const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    popup.querySelector("h4").innerHTML = title;
    popup.querySelector(".popup-body").innerHTML = readMoreCont;
    popupBox();
    
  }
});

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

function popupBox(){
  popup.classList.toggle("open");
}
