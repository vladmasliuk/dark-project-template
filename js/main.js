//Menu
var t1 = new TimelineMax({paused: true});
t1.to(".overlay", 1.6, {
    top: 0,
    ease: Expo.easeInOut
  });
t1.staggerFrom(".menu .menu-list .menu-list-item", 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);
t1.reverse();
$(document).on("click", ".menu-btn", function() {
    t1.reversed(!t1.reversed());
});
t1.reverse();
$(document).on("click", ".menu-list-item a", function() {
    t1.reversed(!t1.reversed());
});

// main parallax
$("#parallax").logosDistort({
     effectWeight: 1
});

// social icons
TweenMax.staggerFrom(".top-social .top-social-list .top-social-list-item ", 1,{
  delay: 0.5, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2);

// top description
TweenMax.staggerFrom(".top-description", 2,{
  delay: 0.5, opacity: 0, y: 20, ease: Expo.easeInOut
});

// team slider
$(document).ready(function(){
  $('.team-slider').slick({
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
  breakpoint: 1024,
  settings: {
       slidesToShow: 2,
       infinite: true
  }
  }, {
  breakpoint: 600,
  settings: {
     slidesToShow: 1,
     dots: true
  }
  }]
  });
});

// portfolio section
const portfolio = document.querySelectorAll('.portfolio-photo-wrapper');

for (let i = 0; i < portfolio.length; i++) {
  const portfolios = portfolio[i];
  portfolios.addEventListener('mousemove', startRotate);
  portfolios.addEventListener('mouseout', stopRotate);
}

function startRotate(event){
  const portfolioImg = this.querySelector('.portfolio-photo');
  const halfHeight = portfolioImg.offsetHeight / 2;
  const halfWidth = portfolioImg.offsetWidth / 2;
  portfolioImg.style.transform = 'rotateX(' + -(event.offsetY -
  halfHeight) / 7 + 'deg) rotateY(' +(event.offsetX -
  halfWidth) / 7 + 'deg)';
}

function stopRotate(event){
  const portfolioImg = this.querySelector('.portfolio-photo');
  portfolioImg.style.transform = 'rotate(0)';
}

// neon
$(document).ready(function() {
  $('#neon').novacancy({

    'reblinkProbability': 0.3,
    'blinkMin': 0.1,
    'blinkMax': 0.2,
    'loopMin': 1,
    'loopMax': 2,
    'color': 'white',
    'glow': ['0 0 80px white', '0 0 30px white', '0 0 6px white'],
    'off' : 2,
    'blink': 0,
    'autoOn' : true
  });
  });

// scroll
$(document).ready(function() {
  $('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  &&
  location.hostname == this.hostname
) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 2500, function() {
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr('tabindex','-1');
        $target.focus(); 
      };
    });
  }
}
});
  });