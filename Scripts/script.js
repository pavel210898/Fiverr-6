

$(document).ready(function(){


$(function(){
  var navbar = $('.header');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 10){
      navbar.removeClass('header1');
    } else {
      navbar.addClass('header1');
    }
  });
});
$(function(){
                $("#video").videoPopup({
                    // autoplay on open
                      autoplay: true,

                      // shows video controls
                      showControls: true,

                      // colors of controls
                      controlsColor: null,

                      // infinite loop
                      loopVideo: false,

                      // shows video information
                      showVideoInformations: true,

                      // width
                      width: 1300
                });
            });
$(function(){
                $("#video1").videoPopup({
                    // autoplay on open
                      autoplay: true,

                      // shows video controls
                      showControls: true,

                      // colors of controls
                      controlsColor: null,

                      // infinite loop
                      loopVideo: false,

                      // shows video information
                      showVideoInformations: true,

                      // width
                      width: 1300
                });
            });
$(function(){
                $("#video2").videoPopup({
                    // autoplay on open
                      autoplay: true,

                      // shows video controls
                      showControls: true,

                      // colors of controls
                      controlsColor: null,

                      // infinite loop
                      loopVideo: false,

                      // shows video information
                      showVideoInformations: true,

                      // width
                      width: 1300
                });
            });

      // Call the event handler on #text
  // $(".projectsImg1,.projectsDiv1").hover(function(){
    
  //   //Event one mouse enter add class
  //   $('.projectsDiv1 h3').addClass('projectsDivTransform');
  //   $('.projectsDiv1 p:last-child').addClass('projectsDivP');
  //   $( '.projectsDiv1 h3:after' ).css('opacity','1');
  //   $( '.projectsDiv1 h3:after' ).css('left','0');

    
  // },
    // Event two mouse out remove class               
  //   function(){
  //   $('.projectsDiv1 h3').removeClass("projectsDivTransform")
  //   $('.projectsDiv1 p:last-child').removeClass("projectsDivP")
  //    $( '.projectsDiv1 h3:after' ).css('opacity','0');
  //   $( '.projectsDiv1 h3:after' ).css('left','30px');

  // });
  //     // Call the event handler on #text
  // $(".projectsImg2,.projectsDiv2").hover(function(){
    
  //   //Event one mouse enter add class
  //   $('.projectsDiv2 h3').addClass('projectsDivTransform');
  //   $('.projectsDiv2 p:last-child').addClass('projectsDivP');
  //   $( '.projectsDiv2 h3:after' ).css('opacity','1');
  //   $( '.projectsDiv2 h3:after' ).css('left','0');

    
  // },
    // Event two mouse out remove class               
    // function(){
    // $('.projectsDiv2 h3').removeClass("projectsDivTransform")
    // $('.projectsDiv2 p:last-child').removeClass("projectsDivP")
    //  $( '.projectsDiv2 h3:after' ).css('opacity','0');
    // $( '.projectsDiv2 h3:after' ).css('left','30px');

  // });
        // Call the event handler on #text
  // $(".projectsImg3,.projectsDiv3").hover(function(){
    
  //   //Event one mouse enter add class
  //   $('.projectsDiv3 h3').addClass('projectsDivTransform');
  //   $('.projectsDiv3 p:last-child').addClass('projectsDivP');
  //   $( '.projectsDiv3 h3:after' ).css('opacity','1');
  //   $( '.projectsDiv3 h3:after' ).css('left','0');

    
  // },
    // Event two mouse out remove class               
  //   function(){
  //   $('.projectsDiv3 h3').removeClass("projectsDivTransform")
  //   $('.projectsDiv3 p:last-child').removeClass("projectsDivP")
  //    $( '.projectsDiv3 h3:after' ).css('opacity','0');
  //   $( '.projectsDiv3 h3:after' ).css('left','30px');

  // });
// Slider
$('#slideshow-banner').slide();
$('#slideshow-banner').slide({
  cdTime : 10000 // in ms
});
$('#slideshow-banner').slide({
  controllerLeftButton : "left.png", 
  controllerRightButton : "right.png"
});
$('.carousel').carousel({
    pause: "false"
});
});






