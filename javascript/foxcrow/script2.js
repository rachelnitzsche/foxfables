var animation = anime({
  targets: '.textmove',
  translateY: 150,
  elasticity: 200,
  easing: 'linear',
  autoplay: false
});

var seekProgress = document.querySelector('.progress');

seekProgress.oninput = function() {
  animation.seek(animation.duration * (seekProgress.value / 100));
};