(function($){
	$(document).ready(function() {

		// Show the popup when any button is clicked
		$(".popup-btn").click(function() {
			$("#myPopup").fadeIn();  // Use fadeIn() for smooth display
		});

		// Hide the popup when the close button is clicked
		$(".close-btn").click(function() {
			$("#myPopup").fadeOut();  // Use fadeOut() for smooth hide
		});

		// Hide the popup if clicked outside the popup content
		$(window).click(function(event) {
		if ($(event.target).is("#myPopup")) {
			$("#myPopup").fadeOut();
		}
		});

		$('.map-locator span').on('click', function() {
			$('.map-locator').removeClass('clicked');
			$(this).parent('.map-locator').addClass('clicked');
		});

		$('#dot-one span').on('click', function(){
			$('#clicked').text("Aeroport Nice Cote d'Azur")
		});

		$('#dot-two span').on('click', function(){
			$('#clicked').text('Cap 3000')
		});

		$('#dot-three span').on('click', function(){
			$('#clicked').text('Village des pêcheurs du Cros-de-Cagnes')
		});

		$('#dot-four span').on('click', function(){
			$('#clicked').text('Musee Renior')
		});

		$('#dot-five span').on('click', function(){
			$('#clicked').text('center-ville')
		});

		$('#dot-six span').on('click', function(){
			$('#clicked').text('Ploygone Riviera')
		});

		// Mobile dela post slide activation
		$('.dela-slider').owlCarousel({
			items: 1
		});




		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);