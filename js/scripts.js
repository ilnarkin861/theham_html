$(document).ready(function(){
	let searchForm = document.getElementById('search-form');

	document.getElementById('search-form-button').addEventListener('click', function(){
		!searchForm.classList.contains('visible') ? searchForm.classList.add('visible')	
		: searchForm.classList.remove('visible')
	});

	const mobileMenu = document.getElementById('mobile-menu');

    document.getElementById('menu-open-button').addEventListener('click', function(){
        document.body.style.overflow = "hidden";
        mobileMenu.classList.add('visible');
    });

    document.getElementById('menu-close-button').addEventListener('click', function(){
        mobileMenu.classList.remove('visible');
        document.body.style.overflow = "auto";
    });

	$('#main-slider').slick({
        nextArrow: document.getElementById('main-slider-next'),
        prevArrow: document.getElementById('main-slider-prev'),
    });

	$('#main-slider').on('afterChange', function(event, slick, currentSlide){
		showNextSlide();
	});

	$('#testimonial-slider').slick({
        slidesToShow: 4,
		nextArrow: document.getElementById('testimonial-slider-next'),
        prevArrow: document.getElementById('testimonial-slider-prev'),

		responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

	$('#portfolio .filter-buttons button').on('click', function(){
        let value = $(this).attr('data-filter');
        let buttons = $(this).parents('ul');
        buttons.find('.active').removeClass('active');
        $(this).addClass('active');
        let items = $('#portfolio .projects .project');
        items.removeClass('visible');

		value === "*" ? items.addClass('visible') : items.parents('.projects').find(value).addClass('visible');
    });

	$('#testimonial-slider .slide').on('click', function (){
		let slideIndex = $(this).data('slide-index');
		let slides = $(this).parents('#testimonial-slider');
		slides.find('.active').removeClass('active');
        $(this).addClass('active');
		let reviews = $('#testimonial .review');
		reviews.removeClass('active');
		reviews.eq(slideIndex).addClass('active');
	});

    new WOW().init();

	showNextSlide();
});

function showNextSlide(){
	let imageUrl = document.getElementById('main-slider').getElementsByClassName('slick-active')[0].nextSibling.getAttribute('data-bg-image');
	document.getElementById('next-slide').innerHTML = '<img src="' +imageUrl + '" alt"">';
}