console.log("java linked");

$(document).on("click", "#contact-submit", function(event) {
  event.preventDefault();
  console.log("clicked");
  var conName = $("#contact-name")
    .val()
    .trim();
  var conEmail = $("#contact-email")
    .val()
    .trim();
  var conMessage = $("#contact-message")
    .val()
    .trim();

  var newMessage = {
    name: conName,
    email: conEmail,
    message: conMessage
  };

  console.log("contact info");
  console.log(newMessage);
  $.ajax("/contact/new", {
    method: "POST",
    data: newMessage
  }).then(function() {
    console.log("added new contact info");
  });
  $("#contact-name").val("");
  $("#contact-email").val("");
  $("#contact-message").val("");
  $(".modal").addClass("active-modal");
});
$(document).on("click", "#modal-close", function(x) {
  x.preventDefault();
  $(".modal").removeClass("active-modal");
});
