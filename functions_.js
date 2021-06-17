 // Using jQuery's animate() method to add smooth page scroll
/*$('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 1000, function() {

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });

    // Prevent default anchor click behavior
    return false;
});*/

$(function() {
  $(".nav-link").on("click", (event) => {
    $(".navbar-nav").find(".active").removeClass('active');
    $(event.target).parent().addClass('active');
  });
  });
  
   $(function() {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
  });
  });
  
  function printHash() {
  var hs = this.hash;
  var par = ('a[href="'+ hs + '"]');
  bcout.innerHTML = this.hash.substr(1);
  $(".navbar-nav").find(".active").removeClass('active');
  $(".navbar-nav").find('a[href="'+ this.hash + '"]').parent().addClass('active');
  
  }

  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



/* Form */
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Drop a note! tonja.rantanen@gmail.com ' + recipient
  modalBodyInput.value = recipient
})