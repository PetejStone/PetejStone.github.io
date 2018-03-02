(function($) {

    $.fn.scrollSlide = function(options) {
    	// Default Settings
		var settings = $.extend({
			direction   : 'right', 	// Direction (Slide From)
			speed       : 1000,  	// Speed of animation
			scrollstart : 200,  	// Scroll position to start slide in
			slideback   : false 	// Should object slide back on scroll up?
		}, options);

		return this.each( function() {
			var object = $(this);
			// Hide object initially
			object.css('display','none');

			// On scroll
			$(window).scroll(function(e){
				var y = $(this).scrollTop();

				// Check scroll start value
				if(y >= settings.scrollstart){
					object.show('slide', {direction: settings.direction}, settings.speed);
				}

				// If object should slide back out on scroll up
				if(y < settings.scrollstart && settings.slideback == true){
					object.hide('slide', {direction: settings.direction}, settings.speed);
				}




			});
		});

	};

}(jQuery));



if ($(window).width() > 950 && $(window).width() < 1400) {
  $(document).ready(function(){
        $('.slide-left-0').scrollSlide({
            direction   : 'left',
            scrollstart : 0,
            speed       : 500
        });

        $('.slide-right-0').scrollSlide({
            direction   : 'right',
            scrollstart : 0,
            speed       : 500
        });

        $('.slide-left-50').scrollSlide({
            direction   : 'left',
            scrollstart : 200,
            speed       : 500
        });

        $('.slide-right-200').scrollSlide({
            direction   : 'right',
            scrollstart : 200,
            speed       : 500
        });

        $('.slide-right-300').scrollSlide({
            direction   : 'right',
            scrollstart : 300,
            speed       : 500
        });

        $('.slide-left-400').scrollSlide({
            direction   : 'left',
            scrollstart : 350,
            speed       : 500
        });
        $('.slide-left-500').scrollSlide({
            direction   : 'left',
            scrollstart : 500,
            speed       : 500
        });
        $('.slide-left-900').scrollSlide({
            direction   : 'left',
            scrollstart : 900,
            speed       : 500
        });
        $('.slide-right-900').scrollSlide({
            direction   : 'right',
            scrollstart : 900,
            speed       : 500
        });

      });
}
