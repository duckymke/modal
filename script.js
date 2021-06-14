const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal') // here we dont add the . for the class... also use the method "add" instead of toggle
});

closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
});