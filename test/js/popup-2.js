
const jobList = document.querySelector(".job-list-container");
const popup = document.querySelector(".popup-1")
const popupCloseBtn = popup.querySelector(".btn");
const popupCloseIcon = popup.querySelector(".popup-close-btn");

jobList.addEventListener("click", function (event) {
//   console.log(event.target.tagName.toLowerCase())
  if (event.target.tagName.toLowerCase() == "button") {
    const title = document.querySelector(".job-title").innerHTML;
    const readMoreCont = document.querySelector(".read-more-cont").innerHTML;
    popup.querySelector(".popup-header h2").innerHTML = title;
    popup.querySelector(".popup-detail").innerHTML = readMoreCont;
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
  popup.classList.toggle("active");
}