let btn = document.getElementById("btn");
let close = document.querySelector("close");
let modalContent =document.querySelector("modal-content");

btn.addEventListener("click", function() {
  modalContent.style.display = "block";
  alert("tuşa basıldı.");
  console.log("hello");
} ) ;

/*close.addEventListener("click",closeModal);

function openModal() {
   modal.style.display = "block";
}

function closeModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// CLOSE MODAL
function closeModal() {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}*/
