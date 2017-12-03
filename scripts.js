$(document).ready(function(){
  $(".boyunka_rekodzielo").text("Rękodzieło Boyunka").hide(3000).show(3000).css("color","yellow");
});

$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
	});

  /*Animacje - przejscia przy wczytywaniu strony*/
$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);
});
