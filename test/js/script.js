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

 
