const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let date = new Date();

document.getElementById('currentdate').innerHTML = days[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

$(document).ready(function(){

  // get the slider content height
  // let sliderheight = $('#slider .sliderheight').height();
  // let sliderheight1 = $('#slider1 .sliderheight').height();

  var heights = $("#slider .sliderheight").map(function ()
    {
        return $(this).height();
    }).get();
  let sliderheight = Math.max.apply(null, heights);
  var heights1 = $("#slider1 .sliderheight").map(function ()
    {
        return $(this).height();
    }).get();
  let sliderheight1 = Math.max.apply(null, heights1);
  var heights2 = $("#slider2 .sliderheight").map(function ()
    {
        return $(this).height();
    }).get();
  let sliderheight2 = Math.max.apply(null, heights2);
  var heights3 = $("#slider3 .sliderheight").map(function ()
    {
        return $(this).height();
    }).get();
  let sliderheight3 = Math.max.apply(null, heights3);
  // console.log("sliderheight", sliderheight);
  sliderheight += 20;
  sliderheight1 += 20;
  sliderheight2 += 20;
  sliderheight3 += 20;
  $('#slider').css('height', sliderheight);
  $('#slider1').css('height', sliderheight1);
  $('#slider2').css('height', sliderheight2);
  $('#slider3').css('height', sliderheight3);

	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 5000; //auto slider speed

	// add first initial active class
	$(".slide").first().addClass("active");

	// hide all slides
	$(".slide").hide;

	// show only active class slide
	$(".active").show();

	// Next Event Handler
  $('#next').on('click', nextSlide);// call function nextSlide
  $('#next1').on('click', nextSlide1);// call function nextSlide
  $('#next2').on('click', nextSlide2);// call function nextSlide
	$('#next3').on('click', nextSlide3);// call function nextSlide

	// Prev Event Handler
  $('#prev').on('click', prevSlide);// call function prevSlide
  $('#prev1').on('click', prevSlide1);// call function prevSlide
  $('#prev2').on('click', prevSlide2);// call function prevSlide
	$('#prev3').on('click', prevSlide3);// call function prevSlide

	// Auto Slider Handler
	if(autoswitch == true){
    setInterval(nextSlide,autoswitch_speed);// call function and value 4000
    setInterval(nextSlide1,autoswitch_speed);// call function and value 4000
    setInterval(nextSlide2,autoswitch_speed);// call function and value 4000
		setInterval(nextSlide3,autoswitch_speed);// call function and value 4000
	}

	// Switch to next slide
	function nextSlide(){
    $('#slider .slide').fadeOut(speed);
		$('#slider .active').removeClass('active').addClass('oldActive');
		if($('#slider .oldActive').is(':last-child')){
			$('#slider .slide').first().addClass('active');
		} else {
			$('#slider .oldActive').next().addClass('active');
		}
		$('#slider .oldActive').removeClass('oldActive');
		$('#slider .active').fadeIn(speed);
	}

	// Switch to prev slide
	function prevSlide(){
    $('#slider1 .slide').fadeOut(speed);
		$('#slider .active').removeClass('active').addClass('oldActive');
		if($('#slider .oldActive').is(':first-child')){
			$('#slider1 .slide').last().addClass('active');
		} else {
			$('#slider .oldActive').prev().addClass('active');
		}
		$('#slider .oldActive').removeClass('oldActive');
		$('#slider .active').fadeIn(speed);
	}

  // Switch to next slide
	function nextSlide1(){
    $('#slider1 .slide').fadeOut(speed);
		$('#slider1 .active').removeClass('active').addClass('oldActive');
		if($('#slider1 .oldActive').is(':last-child')){
			$('#slider1 .slide').first().addClass('active');
		} else {
			$('#slider1 .oldActive').next().addClass('active');
		}
		$('#slider1 .oldActive').removeClass('oldActive');
		$('#slider1 .active').fadeIn(speed);
	}

	// Switch to prev slide
	function prevSlide1(){
    $('#slider1 .slide').fadeOut(speed);
		$('#slider1 .active').removeClass('active').addClass('oldActive');
		if($('#slider1 .oldActive').is(':first-child')){
			$('#slider1 .slide').last().addClass('active');
		} else {
			$('#slider1 .oldActive').prev().addClass('active');
		}
		$('#slider1 .oldActive').removeClass('oldActive');
		$('#slider1 .active').fadeIn(speed);
	}

  // Switch to next slide
	function nextSlide2(){
    $('#slider2 .slide').fadeOut(speed);
		$('#slider2 .active').removeClass('active').addClass('oldActive');
		if($('#slider2 .oldActive').is(':last-child')){
			$('#slider2 .slide').first().addClass('active');
		} else {
			$('#slider2 .oldActive').next().addClass('active');
		}
		$('#slider2 .oldActive').removeClass('oldActive');
		$('#slider2 .active').fadeIn(speed);
	}

	// Switch to prev slide
	function prevSlide2(){
    $('#slider2 .slide').fadeOut(speed);
		$('#slider2 .active').removeClass('active').addClass('oldActive');
		if($('#slider2 .oldActive').is(':first-child')){
			$('#slider2 .slide').last().addClass('active');
		} else {
			$('#slider2 .oldActive').prev().addClass('active');
		}
		$('#slider2 .oldActive').removeClass('oldActive');
		$('#slider2 .active').fadeIn(speed);
	}

  // Switch to next slide
	function nextSlide3(){
    $('#slider3 .slide').fadeOut(speed);
		$('#slider3 .active').removeClass('active').addClass('oldActive');
		if($('#slider3 .oldActive').is(':last-child')){
			$('#slider3 .slide').first().addClass('active');
		} else {
			$('#slider3 .oldActive').next().addClass('active');
		}
		$('#slider3 .oldActive').removeClass('oldActive');
		$('#slider3 .active').fadeIn(speed);
	}

	// Switch to prev slide
	function prevSlide3(){
    $('#slider3 .slide').fadeOut(speed);
		$('#slider3 .active').removeClass('active').addClass('oldActive');
		if($('#slider3 .oldActive').is(':first-child')){
			$('#slider3 .slide').last().addClass('active');
		} else {
			$('#slider3 .oldActive').prev().addClass('active');
		}
		$('#slider3 .oldActive').removeClass('oldActive');
		$('#slider3 .active').fadeIn(speed);
	}


  $('.navbar-light .dmenu').hover(function () {
      $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
  }, function () {
      $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
  });

  $('.newsticker').easyTicker({
      visible: 1,
      interval: 4000,
      controls: {
        up: '.btnUp',
        down: '.btnDown',
        toggle: '.btnToggle'
      }
  });

  // $('.newsticker').easyTicker({
  // 	direction: 'up',
  // 	easing: 'swing',
  // 	speed: 'slow',
  // 	interval: 2000,
  // 	height: '27',
  // 	visible: 0,
  // 	mousePause: 1,
  // 	controls: {
  // 		up: '',
  // 		down: '',
  // 		toggle: '',
  // 		playText: 'Play',
  // 		stopText: 'Stop'
  // 	}
  // });

  $(".d-readmore").dReadmore({
    moreText: "More <i class='fas fa-sort-down'></i>",
  lessText: "Less <i class='fas fa-sort-up'></i>",
  duration: 250,
  timing: "ease",
beforeToggle: function($element, expanded) {
        if (!expanded) {
            console.log("true")
        }
    },
    afterToggle: function($element, expanded) {
        if (expanded) {
            console.log("true")
        }
    }
});
});

function toggleIcon(x) {
  x.classList.toggle("fa-play");
}


/* section toggle */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/* section toggle */
/* captain speak toggle */
var coll2 = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll2.length; i++) {
  coll2[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.display === "block") {
      content2.style.display = "none";
    } else {
      content2.style.display = "block";
    }
  });
}

var coll3 = document.getElementsByClassName("collapsible3");
var i;

for (i = 0; i < coll3.length; i++) {
  coll3[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content3 = this.nextElementSibling;
    if (content3.style.display === "block") {
      content3.style.display = "none";
    } else {
      content3.style.display = "block";
    }
  });
}


var coll4 = document.getElementsByClassName("collapsible4");
var i;

for (i = 0; i < coll4.length; i++) {
  coll4[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content4 = this.nextElementSibling;
    if (content4.style.display === "block") {
      content4.style.display = "none";
    } else {
      content4.style.display = "block";
    }
  });
}
