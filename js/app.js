$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
   
 
$(function(){
	let data = new Date();
	$("span.year").html(data.getFullYear());

	//scroll
	 $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });
});