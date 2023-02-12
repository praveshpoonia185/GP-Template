(function ($, Drupal) {

	"use strict";
	Drupal.behaviors.creativetemplate = {
		attach: function (context, settings) {
			$(document).ready(function () {
				$('.field--name-field-slder-image').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    dots: true,
					responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						}
					}, {
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}, {
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}]
				});
			});
		}
	};


})(jQuery, Drupal);