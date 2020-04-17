const $ = window.$;


document.addEventListener('DOMContentLoaded', function (){
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') !== -1 ) {
        skew = 995;
    }
    
    wrapper.addEventListener('mousemove', function(event){
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
    
        handle.style.left = event.clientX + delta + 'px';
        topLayer.style.width = event.clientX + skew + delta + 'px';
    });

});


// Navbar Fade In Effect
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});

// Arrow Fade Out Effect
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500); 
  //250 is fade pixels
  });

