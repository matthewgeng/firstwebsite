//https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
//https://stackoverflow.com/questions/15044326/jquery-scripts-not-working-due-to-use-of-noconflict
(function($) {
    $(function() {
      $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
}); 
	   
    });
})(jQuery);




