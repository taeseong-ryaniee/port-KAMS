$(document).ready(function () {
	$(".header .header_wrap .btn-menu").on("click", function () {
		$(".header").addClass("open");
		$(".header .gnb").fadeIn(200);
		$("html, body")
			.css({ overflow: "hidden", height: $(window).height() })
			.bind(
				"scroll touchmove usewheel",
				function (e) {
					e.preventDefault();
					e.stopPropagation();
					return false;
				},
				function () {
					passive: false;
				}
			);
	});
	$(".header .header_wrap .btn-close").on("click", function () {
		$(".header").removeClass("open");
		$(".header .gnb").fadeOut(1);

		$("html, body")
			.css({ overflow: "visible", height: "auto" })
			.unbind("scroll touchmove mousewheel");
	});
});

$(document).ready(function () {
	//visual 팝업을 작동시키는 라이브러리
	const swiper_visual = new Swiper(".visual .swiper_visual ", {
		/* 팝업을 감싼는 요소의 class명 */
		effect: "fade" /* fade 효과 */,
		autoplay: {
			/* 팝업 자동 실행 */ delay: 5000,
			disableOnInteraction: true,
		},
		loop: true /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */,
		pagination: {
			/* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: ".visual_pagination" /* 해당 요소의 class명 */,
			clickable: true /* 클릭하면 해당 팝업으로 이동할 것인지 값 */,
			//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
		navigation: {
			/* 이전, 다음 버튼 */
			nextEl: ".visual_next" /* 다음 버튼의 클래스명 */,
			prevEl: ".visual_prev",
		},
	});
});

$(document).ready(function () {
	const news_swiper = new Swiper(".culture_news .news_swiper", {
		slidesPerView: 4,
		centeredSlides: false,
		spaceBetween: 16,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
