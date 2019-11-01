$(function(){
	//ページ内リンク
	$('.js-header-item,.mv-btn,.footer-totop').click(function(){
		let id = $(this).attr('href');
		let headerHeight = $('header').outerHeight()
		let position = $(id).offset().top-headerHeight;
		// console.log(id);
		// console.log(headerHeight);
		$('html,body').animate({
			'scrollTop': position
		},500);
	});

	//リンクにactiveクラス
	$('.js-header-item').click(function(){
		$('.js-header-item').removeClass('js-header-item-active');
		$(this).addClass('js-header-item-active');
	})
})

$(document).ready(function() {
	$('.drawer').drawer();
});

new WOW().init();
