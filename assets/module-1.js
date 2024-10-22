
document.addEventListener('DOMContentLoaded', () => {
	var count;
	var top = $('.page-head').offset().top;

	count = 0;

	$('.switch-view-button').on('click', function() {
		var content = $(this).data('content-link');
		var $contentItem = $('body').find(`[data-content='${content}']`);

		$('.content-view').removeClass('is-on');
		$('.top-steps__steps').removeClass('is-on');
		$contentItem.addClass('is-on');
		$('html, body').animate({ scrollTop: top }, "slow");
	});

	$('.get-result').on('click', function() {
		var content = $(this).data('content-link');
		var $contentItem = $('body').find(`[data-content='${content}']`);

		$('.content-view').removeClass('is-on');
		$('.top-steps__steps').removeClass('is-on');
		$contentItem.addClass('is-on');
		$('html, body').animate({ scrollTop: top }, "slow");

		if (count < 4) {
			$('.final-view_bad').addClass('is-on');
			$('.total').text(count);
		}

		if (count == 1) {
			$('.final-view_bad').addClass('is-on');
			$('.total').text(count);
			$('.total_word').text('Набран');
			$('.total_word_2').text('балл');
		}

		if (count >= 4) {
			$('.final-view_good').addClass('is-on');
			$('.total').text(count);
			$('.total_word_2').text('баллов');
		}
	});

	$('.questions__item').on('click', function() {
		$(this).parent().find('.questions__item').addClass('unactive');
		if($(this).data('answer') == false) {
			$(this).addClass('false');
		}
		if($(this).data('answer') == true) {
			$(this).addClass('true');
			count++;
		}
		$(this).parents('.content-view').find('.bottom-content').addClass('is-on');
	});

	$('.refresh-button').on('click', function() {
		location.reload();
	});
});