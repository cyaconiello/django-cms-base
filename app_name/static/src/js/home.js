import $ from 'jquery';
// import "../vendor/flexslider/jquery.flexslider.js";


$(document).ready(function() {

    // initialize slideshow
    $('.slider').flexslider({
        slideshow: false,
        animation: "slide",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: true,
        after: function(slide) {
            var curSlide = $('.slider').data('flexslider').currentSlide;
            $('.slider .tabs .tab').each(function(){
              if($(this).attr('data-number')==curSlide)
              {
                $(this).addClass('active');
              }
              else
              {
                $(this).removeClass('active');
              }
            });
        },
    });

    var counter = 0;
    $('.slider .slides li').not('.clone').each(function(){
        if($('.slideshow-title').html()=='')
        {
            $('.slideshow-title').html($(this).attr('data-slideshow'));
        }

        // set number for each slide
        $('.slide-counter-number', this).html($(this).data('counter'));

        $(this).children('.row').attr('data-title');
        $('.tabs').append('<li data-number="'+counter+'" class="tab">'+$(this).children('.row').data('title')+'</li>');
        counter++;
    });

    // add active state to first node
    $('.slider .tabs .tab:first-child').addClass('active');

        // if mobile
    if (window.matchMedia('(max-width: 650px)').matches) {
      var tabsCenter = $('.tabs').outerWidth() / 2;
      var tabCenter = $('.tabs .active').outerWidth() / 2;
      var tabOffsetLeft = $('.tabs .active').offset().left;
      var activeTabPos = tabsCenter - tabCenter;
      // set tabs position
      $('.tabs').css({left: activeTabPos})

    } else {
    }

    // tabbed navigation
    $('.tab').on('click', function(){
        var current_tab = $(this);
        $('.tab').removeClass('active');
        current_tab.addClass('active');
        var count = 0;
        $('.slides.--tabbed li').not('.clone').each(function(){
            if(current_tab.html() == $(this).children('.row').attr('data-title'))
            {
                $('.slider').data('flexslider').flexAnimate(count);
            }
            count++;
        });

        // get center position
        var activeTabPos = centerElPosFromParent($('.tabs .active'), $('.tabs'));
          // set tabs position
          $('.tabs').animate({left: activeTabPos}, 500);
    });
});

function centerElPosFromParent(child, parent){
  var child = child;
  var parent = parent;
  var parentCenter = parent.outerWidth() / 2;
  var windowCenter = $(document).width / 2;
  var childCenter = child.outerWidth() / 2;
  var childOffsetLeft = child.offset().left;
  var parentOffsetLeft = parent.offset().left;
  var childOffset = childOffsetLeft - parentOffsetLeft;
  var centerPosition;
  if (centerPosition > windowCenter){
    centerPosition = windowCenter - childOffset;
  } else{
    centerPosition = parentCenter - childOffset;
  }

  return centerPosition;
}

// Instgram feed
// var feed = new Instafeed({
//     get: 'user',
//     userId: 2201512070,
//     clientId: '5381591c223546238ea10daec4828def',
//     limit:5,
//     resolution: 'low_resolution',
//     // accessToken: '2201512070.1677ed0.e5f57f51acd748a49e27ac4cc8d28039',
//     accessToken: '2201512070.5381591.fcdb1f76372c446ab0a08e8309b570cd',
//     template: '<a target="_blank" class="instagram {{orientation}}" style="background-image:url({{image}});" href="{{link}}"></a>'
// });
// feed.run();


// Scrolling for Instagram ?
// $('#instafeed').on('mouseenter', function() {
//   $(document).on('scroll', function(){
//     $("#instafeed").scrollLeft();
//   });
// }).on('mouseleave', function(){
//   $(document).off('scroll', function(){
//     // content
//   });
// });
