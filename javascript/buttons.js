$(document).ready(function() { 

  anime({
    targets: '.nextarrow',
    translateX: -5,
    loop: true,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeOutSine',
  });

  anime({
    targets: '.backarrow',
    translateX: 5,
    loop: true,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeOutSine',
  });

 });