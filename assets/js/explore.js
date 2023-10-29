$(() => {
  var num = $('.title-section').outerHeight(); //number of pixels before modifying styles

  $(window).on('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('#explore-navigation').addClass('sticky');
      } else {
          $('#explore-navigation').removeClass('sticky');
      }
  });
  // window.onscroll = function() {myFunction()};
  
  // // Get the navbar
  // var navbar = document.getElementById("explore-navigation");
  
  // // Get the offset position of the navbar
  // var sticky = navbar.offsetTop;
  
  // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  
  $('.slider-category').owlCarousel({
      loop:true,
      margin: 10,
      nav:false,
      autoWidth:true,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  
  let display_grid = $('#display-grid');
  let drawer = $('#explore-drawer');
  let bg_layer = $('#background-layer');
  let single = $('#single');
  let double = $('#double');
  let compact = $('#compact');
  let gallery_wrapper = $('#gallery-wrapper');
  display_grid.click(function() {
    // alert("dlicked");
    display_grid.addClass('animated');
    bg_layer.addClass('show');
    drawer.addClass('show');
    setTimeout(() => {
      display_grid.removeClass('animated');
    }, 300);
  });
  bg_layer.click(function(){
    bg_layer.removeClass('show');
    drawer.removeClass('show');
  });
  single.click(function(){
    gallery_wrapper.removeClass('double');
    gallery_wrapper.removeClass('compact');
    gallery_wrapper.addClass('single');
    setTimeout(() => {
      bg_layer.removeClass('show');
      drawer.removeClass('show');
    }, 200);
  });
  double.click(function(){
    gallery_wrapper.removeClass('single');
    gallery_wrapper.removeClass('compact');
    gallery_wrapper.addClass('double');
    setTimeout(() => {
      bg_layer.removeClass('show');
      drawer.removeClass('show');
    }, 200);
  });
  compact.click(function(){
    gallery_wrapper.removeClass('double');
    gallery_wrapper.removeClass('single');
    gallery_wrapper.addClass('compact');
    setTimeout(() => {
      bg_layer.removeClass('show');
      drawer.removeClass('show');
    }, 200);
  });
});