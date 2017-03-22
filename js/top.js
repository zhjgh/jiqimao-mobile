$(function() {
	$('#nav li').click(function() { //nav 切换 
		$(this).find('a').addClass('active').parent().siblings().find('a').removeClass("active");
	});

	$('.top').click(function(event) { //回到顶部
		event.stopPropagation();
		$(document.body).animate({
			'scrollTop': 0
		}, 1000);
	});

	$('.icon-search,.search').click(function(event) {
		event.stopPropagation();
		$('.search-yc').show();
		$('#search-txt').val("").focus();
		$(".search-yc-cancel").html('取消').removeClass('search-yc-btn');
		$('nav').add('.search').css('opacity', '0.5');
	});

	$("#search-txt").on('keyup', function(event) {
		event.stopPropagation();
		if ($(this).val() == "") {
			$(".search-yc-cancel").html('取消').removeClass('search-yc-btn');
		} else {
			$(".search-yc-cancel").html('搜索').addClass('search-yc-btn');
		}
	});

	$('.search-yc-cancel').click(function(event) {
		event.stopPropagation();
		if ($(this).html() == "搜索") {
			alert('搜索');
			$('.search-yc').hide();
			$('nav').add('.search').css('opacity', '1');
		} else {
			$('.search-yc').hide();
			$('nav').add('.search').css('opacity', '1');
		}
	});

	$(document).on('click', function(){
		$('.search-yc').hide();
		$('nav').add('.search').css('opacity', '1');
	});

	$(window).scroll(function() {
		var top = $(document).scrollTop();
		if (top > 100) {
			$('.top').show();
		} else {
			$('.top').hide();
		}
	});
});
/*字数控制*/
function kongzhi(id, maxW) {
	$(id).each(function() {
		var maxwidth = maxW;
		if ($(this).text().length > maxwidth) {
			$(this).text($(this).text().substring(0, maxwidth));
			$(this).html($(this).html() + "...");
		}
	});
}