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
    .setClassToggle('.intro .animate-text-fade-up-delay', 'text-fade-up-delay')
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





  // Begin Overview Animations
  // Section One
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#learn-how',
    reverse: false
  })
    .setClassToggle('#learn-how .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Two
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#benefits',
    reverse: false
  })
    .setClassToggle('#benefits .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#benefits',
    reverse: false
  })
    .setClassToggle('#benefits .animate-benefits-image', 'benefits-image-fade-up')
    .addTo(controller);
  // Section Three
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#how-to',
    reverse: false
  })
    .setClassToggle('#how-to .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#how-to',
    reverse: false
  })
    .setClassToggle('#how-to .animate-text-fade-up-delay', 'text-fade-up-delay')
    .addTo(controller);
  // Section Four
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#overview-why',
    reverse: false
  })
    .setClassToggle('#overview-why .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Five
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#overview-vision',
    reverse: false
  })
    .setClassToggle('#overview-vision .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Six
  var overviewScene = new ScrollMagic.Scene({
    triggerElement: '#race-to-top',
    reverse: false
  })
    .setClassToggle('#race-to-top .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // End Overview Animations


  // Begin Contribute Animations
  // Section One
  var contributeScene = new ScrollMagic.Scene({
    triggerElement: '#help-build',
    reverse: false
  })
    .setClassToggle('#help-build .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Two
  var contributeScene = new ScrollMagic.Scene({
    triggerElement: '#tds-values',
    reverse: false
  })
    .setClassToggle('#tds-values .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Three
  var contributeScene = new ScrollMagic.Scene({
    triggerElement: '#current-partners',
    reverse: false
  })
    .setClassToggle('#current-partners .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // Section Four
  var contributeScene = new ScrollMagic.Scene({
    triggerElement: '#share-feedback',
    reverse: false
  })
    .setClassToggle('#share-feedback .animate-text-fade-up', 'text-fade-up')
    .addTo(controller);
  // End Contribute Animations



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