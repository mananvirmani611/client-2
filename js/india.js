$("gallery-img-1").on("click", function(){

})
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('gallery-img-1')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
