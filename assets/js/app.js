$(() => {
  const marker = $('#marker');
  const nav_links = $('.nav-menu ul li');
  console.log(nav_links);

  function indicator(e) {
    marker.css({
      'left': (e.offsetLeft - 15) + 'px',
      'width': (e.offsetWidth + 30) + 'px',
    });
  }

  nav_links.each((index, obj)=>{
    console.log(
      index,
      $(obj)
    );
    $(obj).mouseover(function(e) {
        indicator(e.target);
    });
  });
});