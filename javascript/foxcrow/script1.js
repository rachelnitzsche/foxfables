var animation = anime({
  targets: '.crowfly',
  translateY: -250,
  elasticity: 200,
  easing: 'linear',
  autoplay: false
});

var seekProgress = document.querySelector('.progress');

seekProgress.oninput = function() {
  animation.seek(animation.duration * (seekProgress.value / 100));
};