$(document).ready(function () {


  var controller = new ScrollMagic.Controller();

  // Begin Home Animations
  // Section One
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#shield-sreen-blue',
    reverse: false
  })
    .setClassToggle('.intro .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#shield-sreen-blue',
    reverse: false
  })
    .setClassToggle('.intro .animate-blue-bg', 'animate-blue-bg-fill')
    .addTo(controller);
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#shield-sreen-blue',
    reverse: false
  })
    .setClassToggle('.intro .animate-green-bg', 'animate-green-bg-fill')
    .addTo(controller);
  // Section Two
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#get-involved-wrapper',
    reverse: false
  })
    .setClassToggle('.get-involved-wrapper .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Three
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#featured-use-wrapper',
    reverse: false
  })
    .setClassToggle('.featured-use-wrapper .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#featured-use-wrapper',
    reverse: false
  })
    .setClassToggle('.featured-use-wrapper .animate-opacity-fade', 'opacity-fade-in')
    .addTo(controller);
  // Section Four
  var homeScene = new ScrollMagic.Scene({
    triggerElement: '#start-now',
    reverse: false
  })
    .setClassToggle('.start-now .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // End Home Animations









  // background animate
  var bgScene = new ScrollMagic.Scene({
    triggerElement: '#security-bg',
    reverse: false
  })
    .setClassToggle('#security-bg', 'draw')
    .addTo(controller);

  var bgScene = new ScrollMagic.Scene({
    triggerElement: '#security-bg',
    reverse: false
  })
    .setClassToggle('#security-img', 'visible')
    .addTo(controller);

  // text animate
  var bgScene = new ScrollMagic.Scene({
    triggerElement: '#security-bg',
    reverse: false
  })
    .setClassToggle('.fade-up-large', 'text-visible')
    .addTo(controller);

  // btn animate
  var bgScene = new ScrollMagic.Scene({
    triggerElement: '#security-bg',
    reverse: false
  })
    .setClassToggle('.fade-up-small', 'text-visible')
    .addTo(controller);
});