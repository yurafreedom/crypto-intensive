
$('.program-item').click(function(e) {
	e.preventDefault();
    if($(this).hasClass('program-item_active')) {
        $(this).removeClass('program-item_active');
        $(this).find('.program-item__body').slideUp();
    } else {
        $(this).siblings('.program-item').removeClass('program-item_active');
        $(this).siblings('.program-item').find('.program-item__body').slideUp();
        $(this).addClass('program-item_active');
        $(this).find('.program-item__body').slideDown();
    }
});

// Дата до которой обратный отсчёт
// var itemDate = $('.product-stock__timer').data('timer');
var countDownDate = new Date($('.js-timer').data('timer')).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";


if(days < 10) {
    days = '0' + days
} 
if(hours < 10) {
    hours = '0' + hours;
} 
if(minutes < 10) {
    minutes = '0' + minutes;
} 
if(seconds < 10) {
    seconds = '0' + seconds;
} 
$('.js-timer').html(`${days}:${hours}:${minutes}:${seconds}`);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    $('.js-timer').html(`00:00:00:00`);
  }
}, 1000);



$('.burger').click(function(e) {
	e.preventDefault();
	$('body').addClass('open-frame');
	$('.menu').fadeIn();
	$('.menu-wrap').addClass('menu-wrap_active');
});
$('.header-close').click(function(e) {
	e.preventDefault();
	$('body').removeClass('open-frame');
	$('.menu').fadeOut();
	$('.menu-wrap').removeClass('menu-wrap_active');
});
$(".menu").click(function (e){ // событие клика по веб-документу
	var popup = $(".menu-wrap"); // тут указываем ID элемента
	if (!popup.is(e.target) // если клик был не по нашему блоку
		&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.menu').fadeOut();
            $('body').removeClass('open-frame');
            $('.menu-wrap').removeClass('menu-wrap_active');
	}
});
$('.popup-check').click(function(e) {
  $(this).toggleClass('popup-check_active');
});