//Testing scroll spy effect
$(".button-collapse").sideNav();
 var options = [
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
  ];
  Materialize.scrollFire(options);
//For the slider
