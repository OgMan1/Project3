
$(document).ready(function () {



  

  $(window).scroll(function () { // check if scroll event happened
    if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
      $("#hireBtn").css({ "backgroundColor" : "red", "border" : "1px solid black", "borderRadius" : "8px", "color": "white" });
      $(".navbar-toggle .icon-bar").css("backgroundColor", "black");
      $(".navbar-header a").css({"color":"black"});
      $(".navbar-right .nav-a").css({"color":"black", "border" : "1px solid black", "borderRadius" : "8px"});
      $(".custom-navbar").css("backgroundColor", "white");
      $(".activeN").css({"backgroundColor" : "lightgray", "color" : "black", "borderRadius" : "8px"});
    } else {
      $(".navbar-toggle .icon-bar").css("background", "white");
      $(".navbar-header a").css({"color":"white"});
      $(".navbar-right .nav-a").css({"color":"white", "border" : "1px solid white"});
      $(".custom-navbar").css("backgroundColor", "rgba(0, 0, 0, 0.25)");
      $(".activeN").css({"backgroundColor" : "gray", "color" : "white", "borderRadius" : "8px"});
    }

  });


// za tablet od gj
  $('#down').click(function () {
    $('#myFrame').animate({
      bottom : "+=40px",
  
    })
    // if (bottom <= 0) {
    // 	bottom: ''
    // }
  })
  $('#up').click(function () {
    $('#myFrame').animate({
      bottom : "-=40px",
    })
  })
  
  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
  







  let sliki1 = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg'];
  let sliki2 = ['img/prva.png', 'img/vtora.png', 'img/treta.png'];
  let sliki3 = ['img/device.jpg', 'img/pic22.jpg', 'img/hands.jpg']
  let i = 0;
  let vrti = () => {
    $('.pictures').css({ 'background-image': `url(${sliki1[i]})` });
    $('.pictures2').css({ 'background-image': `url(${sliki3[i]})` });
    $('.smallPicture').attr('src', sliki2[i]);
    i++;
    if (i > 2) {
      i = 0;
    }
  }
  setInterval(vrti, 3000);


  // JQUERY EFFECTS

$(".custom-navbar").fadeIn(1250);
$(".pictures, .dark").delay(500).slideDown(1000);
$(".smallPicture").fadeIn(100);
$(".carouseltext").hide().fadeIn(2000);
$(".grey-background").hide().slideDown(1500);
$(".redWhole").hide().fadeIn(1500);
$(".contacts").hide(500).fadeIn(1500);

$(".helpSpan").mouseover(function(){
  $(".redTelephone").addClass("hinge");
});

$(".helpSpan").mouseleave(function(){
  $(".redTelephone").removeClass("hinge");
});

$(".redTelephone").mouseover(function(){
  $(this).addClass("swing");
});

$(".redTelephone").mouseleave(function(){
  $(this).removeClass("swing");
});


$(".btnMeet ,.belo, .crveno").mouseover(function(){
  $(this).addClass("tada");
});

$(".btnMeet ,.belo, .crveno").mouseleave(function(){
  $(this).removeClass("tada");
});

$(".rPh1, .rPh2, .rPh3").mouseover(function(){
  $(this).addClass("bounceInDown");
});

$(".chiefExThree, .chiefChThree").mouseover(function(){
  $(this).addClass("zoomInUp");
});

$(".chiefChOne, .chiefExOne").mouseover(function(){
  $(this).addClass("zoomInDown");
});

$(".chiefMarTwo").mouseover(function(){
  $(this).addClass("zoomIn");
});

$(".chiefChTwo, .chiefExTwo").mouseover(function(){
  $(this).addClass("bounceIn");
});

$(".chiefMarOne").mouseover(function(){
  $(this).addClass("fadeInDown");
});

$(".chiefMarThree").mouseover(function(){
  $(this).addClass("fadeInUp");
});

$(".ramka").mouseover(function(){
  $(this).addClass("fadeInUp");
});



//  Lower than 480px 
$(".redTelephone, .helpYou").mouseover(function(){
  $(".redTelephone").addClass("rollIn");
});

$(".redTelephone, .helpYou").mouseleave(function(){
  $(".redTelephone").removeClass("rollIn");
});







  $('.first').mouseover(function () {
    $('.first').css("background-image", "url('img/pic4.jpg')");
    $('.first').html(`
    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 text-center height first whiteText">
      <div class="width">
      <i class="fas fa-map-marker-alt" style="color:red;"></i>
          <p>In-Market</p>
          <p>Customer</p>
          <p>Acquisition &</p>
          <p>Conversation</p>
          <p>Optimization</p>
      </div>
      <div>                    
          <p class="paragraphHover">Our country-specific sites are localised to look exactly like sites in those countries should,
          paying careful attention to translation, currency, site architecture, layout and UX.</p>
      </div>
    </div>

`)
  });
  $('.first').mouseleave(function () {
    $('.first').css("background-image", "");
    $('.first').html(`
    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 text-center height first">
      <div class="width">
          <i class="fas fa-map-market"></i>
          <p>In-Market</p>
          <p>Customer</p>
          <p>Acquisition &</p>
          <p>Conversation</p>
          <p>Optimization</p>
        </div>
    </div>
`)
  });
  $('.second').mouseover(function () {
    $('.second').css("background-image", "url('img/pic5.jpg')");
    $('.second').html(`
    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0  text-center height second whiteText">
      <div class="width">
      <i class="fas fa-map-marker-alt" style="color:red;"></i>
          <p>Localised</p>
          <p>Merchandising &</p>
          <p>Pricing</p>
      </div>
      <div>                    
          <p class="paragraphHover">We contextualize and adapt merchandising to suit local market preferences.
          Product prices are always rounded, in-currency and inclusive of duty &amp; VAT, as a consumer would expect.</p>
      </div>
    </div>

`)
  });
  $('.second').mouseleave(function () {
    $('.second').css("background-image", "");
    $('.second').html(`
    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0  text-center height second">
      <div class="width">
        <i class="fas fa-map-market"></i>
        <p>Localised</p>
        <p>Merchandising &</p>
        <p>Pricing</p>
      </div>
    </div>
`)
  });
  $('.third').mouseover(function () {
    $('.third').css("background-image", "url('img/pic6.jpg')");
    $('.third').html(`
    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0  text-center height third whiteText">
        <div class="width">
        <i class="fas fa-map-marker-alt" style="color:red;"></i>
          <p>Global</p>
          <p>Operations &</p>
          <p>Logistics</p>
        </div>
        <div>                    
          <p class="paragraphHover">We contextualize and adapt merchandising to suit local market preferences.
          Product prices are always rounded, in-currency and inclusive of duty &amp; VAT, as a consumer would expect.</p>
        </div>
    </div>

`)
  });
  $('.third').mouseleave(function () {
    $('.third').css("background-image", "");
    $('.third').html(`
    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0  text-center height third">
        <div class="width">
          <i class="fas fa-map-market"></i>
          <p>Global</p>
          <p>Operations &</p>
          <p>Logistics</p>
        </div>
    </div>
`)
  });

  function clockJavaScript(argument) {
    var date = new Date();

    var minutes = date.getMinutes();
    var minutesDegrees = (minutes/60)*360 + 90;
    var minutesHand = document.querySelector(".minOne")
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    var minutesHand1 = document.querySelector(".minTwo")
    minutesHand1.style.transform = `rotate(${minutesDegrees}deg)`;
    var minutesHand2 = document.querySelector("#minThree")
    minutesHand2.style.transform = `rotate(${minutesDegrees}deg)`;
    var minutesHand3 = document.querySelector("#minFour")
    minutesHand3.style.transform = `rotate(${minutesDegrees}deg)`;
    var minutesHand4 = document.querySelector("#minFive")
    minutesHand4.style.transform = `rotate(${minutesDegrees}deg)`;
    var minutesHand5 = document.querySelector(".minSix")
    minutesHand5.style.transform = `rotate(${minutesDegrees}deg)`;


    var hours = date.getHours();

    var hoursNewYork = hours - 6;
    var hoursDegreesNewYork = (hoursNewYork/12)*360 + 90;
    var hoursHand = document.querySelector(".hourOne")
    hoursHand.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

    var hoursLondon = hours - 1;
    var hoursDegreesLondon = (hoursLondon/12)*360 + 90;
    var hoursHand1 = document.querySelector("#hourTwo")
    hoursHand1.style.transform = `rotate(${hoursDegreesLondon}deg)`;


    var hoursHand2 = document.querySelector("#hourThree")
    hoursHand2.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

    var hoursHand3 = document.querySelector("#hourFour")
    hoursHand3.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

    var hoursBucharest = hours + 1;
    var hoursDegreesBucharest = (hoursBucharest/12)*360 + 90;
    var hoursHand4 = document.querySelector(".hourFive")
    hoursHand4.style.transform = `rotate(${hoursDegreesBucharest}deg)`;

    var hoursWarsaw = hours + 1;
    var hoursDegreesWarsaw = (hoursWarsaw/12)*360 + 90;
    var hoursHand5 = document.querySelector("#hourSix")
    hoursHand5.style.transform = `rotate(${hoursDegreesWarsaw}deg)`;
 }
  setInterval(clockJavaScript, 1000);

  


  



  $('.plus1').on('click', function () {
    if ($('.plus1').text() == '+') {
      $('.brave').append(`<div class='additionalText1'><p>We are bold and ambitious. We are not afraid to test new ideas. We are resourceful. We solve hard problems in clever ways.</p></div>`);
      $('.plus1').text('-');
      $('.plus2').text('+');
      $('.additionalText2').remove();
      $('.plus3').text('+');
      $('.additionalText3').remove();
      $('.plus4').text('+');
      $('.additionalText4').remove();
    } else {
      $('.plus1').text('+');
      $('.additionalText1').remove();
    }
  });



  $('.plus2').on('click', function () {
    if ($('.plus2').text() == '+') {
      $('.emphatetic').append(`<div class='additionalText2'><p>We don’t pretend to know what all customers want. We listen intently.
      We are objective. We put ourselves in our customers’ shoes.</p></div>`);
      $('.plus2').text('-');
      $('.plus1').text('+');
      $('.additionalText1').remove();
      $('.plus3').text('+');
      $('.additionalText3').remove();
      $('.plus4').text('+');
      $('.additionalText4').remove();
    } else {
      $('.plus2').text('+');
      $('.additionalText2').remove();
    }
  });

  $('.plus3').on('click', function () {
    if ($('.plus3').text() == '+') {
      $('.accountable').append(`<div class='additionalText3'><p>We got this. We do what we need to do. We don’t let each other
      down. We make commitments and keep them.</p></div>`);
      $('.plus3').text('-');
      $('.plus2').text('+');
      $('.additionalText2').remove();
      $('.plus1').text('+');
      $('.additionalText1').remove();
      $('.plus4').text('+');
      $('.additionalText4').remove();
    } else {
      $('.plus3').text('+');
      $('.additionalText3').remove();
    }
  });



  
  $('.plus4').on('click', function () {
    if ($('.plus4').text() == '+') {
      $('.focused').append(`<div class='additionalText4'><p>We have very high standards. We don’t cut corners. We are specialists,
      not generalists. We choose depth over breadth.</p></div>`);
      $('.plus4').text('-');
      $('.plus2').text('+');
      $('.additionalText2').remove();
      $('.plus3').text('+');
      $('.additionalText3').remove();
      $('.plus1').text('+');
      $('.additionalText1').remove();
    } else {
      $('.plus4').text('+');
      $('.additionalText4').remove();
    }
  });


  
  AOS.init();


  // proba za fadein za 01 02 03

  $(function(){  
    $('#monster').fadeIn('slow');
  });
 

  
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
    $('#myCarousel').bind('mousewheel', function (e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        $(this).carousel('prev');
      } else {
        $(this).carousel('next');
      }
    });
   $('.glyphicon-left, .glyphicon-right').hide();
    $('.left').hover(function () {
      $('.glyphicon-left').show();
    }, function () {
      $('.glyphicon-left').hide();
    })
    $('.right').hover(function () {
      $('.glyphicon-right').show();
    }, function () {
      $('.glyphicon-right').hide();
    })


    // proba za sevices

    


});
