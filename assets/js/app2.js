$(() => {
  const marker = $('#marker');
  const nav_links = $('.nav-menu .nav-link a');
  const hashtag = '#' + window.location.href.split("#")[1];

  console.log(nav_links);

  function indicator(e, t) {
    $('.nav-menu .nav-link a .title').css({
      'display': 'none'
    });
    let title = $(t);
    let element = $(e);
    title.css({
      'display': 'inline'
    });
    console.log("OFFSET");
    
    console.log(e, element, title);
    console.log("TITLE WIDTH");
    console.log(title[0].offsetWidth);
    console.log("CHILDREN length");
    console.log(element[0].children.length);
    let left = e.offsetParent.offsetParent.offsetLeft;
    if(left > 0 && title[0].offsetWidth > 0 && element[0].children.length == 0){
      marker.css({
        'left': (left - 16) + 'px',
        'width': (title[0].offsetWidth + 64) + 'px',
        'opacity': 1,
      });
    }
  }

  function changeScreen(anchor){
    console.log("CHANGE SCREEN");
    let a = $(anchor)[0];
    console.log(anchor, a, a.hash);
    $('section').css({
      left: '-100vw',
      opacity: 0
    });
    $(a.hash).css({
      left: 0,
      opacity: 1
    });
    if(a.hash == '#explore'){
      var num = $('.title-section').outerHeight(); //number of pixels before modifying styles

      $(window).on('scroll', function () {
          if ($(window).scrollTop() > num) {
              $('#explore-navigation').addClass('sticky');
          } else {
              $('#explore-navigation').removeClass('sticky');
          }
      });
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  nav_links.each((index, obj)=>{
    let title = obj.children[1];
    console.log(
      index,
      $(obj),
      $(title)
    );
    $(obj).click(function(e){
      changeScreen(e.currentTarget);
    });
    $(obj).mouseover(function(e) {
      indicator(e.target, title);
    });
  });
});