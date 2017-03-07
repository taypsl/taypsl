//form submit 
var contactMessage = "";

$('#submit').on('click', function() {
	contactMessage = $('#contact').serialize();
	$.ajax({
        url: "//formspree.io/tayparsell@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the message! I\'ll be in touch within the next 24 hours.');
    return false;
})