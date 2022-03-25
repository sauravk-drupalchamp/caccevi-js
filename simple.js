$(document).ready(function(){
  var checkGetUpdateFormLoaded=setInterval(() => {

      if($('.connect-a-rep form .connect-with-rep').length>0){
          clearInterval(checkGetUpdateFormLoaded);

          $('.connect-with-rep .col-sm-6 select').on("click",function(){
              var prnt=$(this).parents(".wpcf7-form-control-wrap");
              if(!prnt.hasClass("select-opened")){
                  prnt.addClass("select-opened");
              }else{
                  prnt.removeClass("select-opened");
              }
          });
          $('.connect-with-rep .col-sm-6 select').on("blur",function(){
              var prnt=$(this).parents(".wpcf7-form-control-wrap");
              if(prnt.hasClass("select-opened")){
                  prnt.removeClass("select-opened");
              }
          });
          $(document).keyup(function(e) {
              if (e.keyCode == 27) { 
                  var getupdateDropdown=$('.connect-with-rep .col-sm-6 select .wpcf7-form-control-wrap');
                  if(getupdateDropdown.hasClass("select-opened")){
                      getupdateDropdown.removeClass("select-opened");
                  }
              }
          });

          //$('[name="profession"] && [name="HowCanWeHelp"] option:contains("Others")').text('Other');
        
      }
  }, 100);
});

function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent =  seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveSeconds = 5,
      display = document.querySelector('#time');
  startTimer(fiveSeconds, display);
};


jQuery(document).ready(function () {
  jQuery('.ext-cta').click(function (e) {
    e.preventDefault()
    const url = $(this).attr('href')
    jQuery('.pop-up-content').toggle()
    jQuery('.pop-up-content a.continue').attr('href', url)
    jQuery('.pop-up-content a.cancel').click(function () {
      jQuery('.pop-up-content').hide()
    })
  })
});
// UL-LI
// $('li.ext-cta-menu > a').click(function (e) {
//   e.preventDefault()
//   const url = $(this).attr('href')
//   $('.pop-up-content').toggle()
//   $('.pop-up-content a.continue').attr('href', url)
//   $('.pop-up-content a.cancel').click(function () {
//     $('.pop-up-content').hide()
//   })
// })

$.fn.isOnScreen = function () {
  var win = $(window)

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  }
  viewport.right = viewport.left + win.width()
  viewport.bottom = viewport.top + win.height()

  var bounds = this.offset()
  bounds.right = bounds.left + this.outerWidth()
  bounds.bottom = bounds.top + this.outerHeight()

  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  )
};

$(document).ready(function () {
  $(window).scroll(function () {
    $('.syringe-animation').attr(
      'src',
      '/wp-content/uploads/2022/03/needle-animation.gif',
    )
  });
});

jQuery(document).ready(function(){
  jQuery('.popup-1').on('hide.bs.modal', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
  });
  });

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop()) {
    jQuery('body').addClass('header-resize')
  } else {
    jQuery('body').removeClass('header-resize')
  }
});

  // FOR OVERLAY HEIGHT ON READY
$(document).ready(function () {
  jQuery('.ujc-right').insertBefore('.ujc-left');
  $('#block-5 #important-wrapper .notice-wrapper #plus-minus').click(function () {
    if(window.innerWidth !== undefined && window.innerHeight !== undefined) {
      var h = window.innerHeight;
    } else {
      var h = document.documentElement.clientHeight;
    }
    var header_height = $('.whole-header-wrapper').height();
    if($( "body" ).hasClass( "scroll-hide" )){
      console.log(h - header_height, "total-height");
      $('body #block-5 .info').css('top', header_height);
      $('body #block-5 .info')[0].scrollIntoView({behavior: "smooth"});
      // $( "body" ).removeClass( "scroll-hide" );
      // $('#block-5 .info').css("top", "auto" );
      // $('#block-5 .info').css("height", "unset");
    }else{
      $( "body" ).removeClass( "scroll-hide" );
      $('#block-5 .info').css("top", "auto" );
      $('#block-5 .info').css("height", "unset");
      // $( "body" ).addClass( "scroll-hide" );
    }
  });
  $(window).trigger('resize');
});

jQuery(document).ready(function () {
  jQuery('#pop_up_2 .close').click(function () {
    var name = 'welcome_popup';
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    //window.location.href = '/';
    window.location.reload();
  });
  
  jQuery("#yes-cookies").click(function(){
    //alert("STart");
    //$.cookie('welcome_popup', '1');
    //var name = 'welcome_popup'
    document.cookie = "welcome_popup=1;";
  });
  
  jQuery('#no-timeout').click(function () {
    setInterval(function () {
      var win = window.open('about:blank', '_self')
      win.close()
    }, 5000)
  })
});

// mobile js

jQuery(document).ready(function () {
  function windowSize() {
    var width = jQuery(window).width()
    if (width <= 1300) {
      jQuery('.copyright').insertAfter('.residents')
    } else {
      jQuery('.copyright').insertAfter('#block-3')
    }
  }
  windowSize()
  jQuery(window).resize(function () {
    windowSize()
  })
});

// desktop

var script = document.createElement('script')
script.onload = function () {
  $(window)
    .bind('resize', function () {
      //console.log($(this).height())
      if ($(this).height() < 500) {
        $('#important-wrapper').removeClass('info')
      } else {
        $('#important-wrapper').addClass('info')
      }
    })
    .trigger('resize')
};

$(window).on('load', function () {
  if (window.innerWidth > 767) {
    var imgHeight = $('.ujc-left img').height()
    var imgHeight1 = $('.dosage-storage-image img').height()
    var imgHeight2 = $('.adverse-events-image figure img').height()
    $('.ujc-right').css({ height: imgHeight })
    $('.dosage-storage-text').css({ height: imgHeight1 })
    $('.adverse-events-text').css({ height: imgHeight2 })
  }
})
$(document).ready(function () {
  $(window).trigger('load')
});

$(window).on('resize', function () {
  if (window.innerWidth > 767) {
    var imgHeight = $('.ujc-left img').height()
    var imgHeight1 = $('.dosage-storage-image img').height()
    var imgHeight2 = $('.adverse-events-image figure img').height()
    $('.ujc-right').css({ height: imgHeight })
    $('.dosage-storage-text').css({ height: imgHeight1 })
    $('.adverse-events-text').css({ height: imgHeight2 })
  }
  // var header_height = $('.whole-header-wrapper').height()
  // $('#block-5 #important-wrapper .notice-wrapper #plus-minus').click(
  //   function () {
  //     if ($('body').hasClass('scroll-hide')) {
  //       $('body.scroll-hide #block-5 .info').css('top', header_height)
  //     } else {
  //       $('#block-5 .info').css('top', 'auto')
  //     }
  //   },
  // )
})
$(document).ready(function () {
  $(window).trigger('resize')
});
    
var btn = jQuery('#button');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

$("#button").css("bottom", $("#important-wrapper.info").height()+50);

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, 0);
});


script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script);

$(window).scroll(function () {
  function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop()
    var docViewBottom = docViewTop + $(window).height()
    var elemTop = $(elem).offset().top
    return elemTop >= docViewBottom
  }

  if (elementScrolled('.footer-top-wrapper')) {
    $('#important-wrapper').addClass('info')
    $('#scroller').addClass('important')
    $('#plus-minus').addClass('plus')
    $('#references').addClass('indexing')
    $('#plus-minus').removeClass('button-display')
    $('.full-content').css('overflow-y', 'auto')
  } else {
    $('#important-wrapper').removeClass('info')
    $('#scroller').removeClass('important')
    $('#plus-minus').removeClass('plus')
    $('#references').removeClass('indexing')
    $('#plus-minus').addClass('button-display')
    $('.full-content').css('overflow-y', 'hidden')
  }
});

document.getElementById('custom_html-2').addEventListener('click', function () {
  document.getElementById('custom_html-2').classList.toggle('close-menu-icon')
  document
    .getElementsByClassName('mobile-header-bottom')[0]
    .classList.toggle('open-menu')
  document
    .getElementsByClassName('top-header-wrapper')[0]
    .classList.toggle('close-wrapper')
  return false
});

function myFunction() {
  var myButtonClasses = document.getElementById('scroller').classList

  if (myButtonClasses.contains('important')) {
    myButtonClasses.remove('important')
  } else {
    myButtonClasses.add('important')
  }
  if (myButtonClasses.contains('full-content')) {
    myButtonClasses.remove('full-content')
  } else {
    myButtonClasses.add('full-content')
  }
};

function plusMinus() {
  var myButtonClasses = document.getElementById('plus-minus').classList

  if (myButtonClasses.contains('plus')) {
    myButtonClasses.remove('plus')
  } else {
    myButtonClasses.add('plus')
  }
  if (myButtonClasses.contains('minus')) {
    myButtonClasses.remove('minus')
  } else {
    myButtonClasses.add('minus')
  }
};

document.getElementById('plus-minus').addEventListener('click', function () {
  document.getElementsByTagName('body')[0].classList.toggle('scroll-hide')
  document.getElementById('important-wrapper').classList.toggle('full-info')
  return false
});

//18-03-2022......changes below..............
$(window).scroll(function() {
  if (checkVisible($('footer'))) {
      $('#button span').css("opacity", "1");
  } else {
      $('#button span').css("opacity", "0");
  }
});

function checkVisible( elm, eval ) {
  eval = eval || "visible";
  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();
  
  if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (eval == "above") return ((y < (vpH + st)));
}
////////////////////////////////////////

if($('body').hasClass('page-id-42')){ /*...condition applied by Somnath...*/
  document.getElementById('week-4').addEventListener('click', function () {
    document.getElementById('ifweek-4').style.display = 'block'
    document.getElementById('barchart').style.display = 'none'
    document.getElementById('ifweek-48').style.display = 'none'
    return false
  });
  document.getElementById('week-48').addEventListener('click', function () {
    document.getElementById('ifweek-48').style.display = 'block'
    document.getElementById('barchart').style.display = 'none'
    document.getElementById('ifweek-4').style.display = 'none'
    return false
  });
  document.getElementById('week-4-mobile').addEventListener('click', function () {
    document.getElementById('ifweek-4-mobile').style.display = 'block'
    document.getElementById('ifweek-48-mobile').style.display = 'none'
    document.getElementById('week-4-mobile').style.background = '#f36c23'
    document.getElementById('week-48-mobile').style.background = '#707070'
    /*...comment by Somnath
    document.getElementsByClassName('week-4-p')[0].style.color = '#f36c23'
    document.getElementsByClassName('week-48-p')[0].style.color = '#2f2f2f';
    */
    /*below two lines were added by Somnath*/
    document.getElementsByClassName('week-4-p')[0].classList.add('active');
    document.getElementsByClassName('week-48-p')[0].classList.remove('active');
    /*........................*/
    return false
  });
  document.getElementById('week-48-mobile').addEventListener('click', function () {
    document.getElementById('ifweek-48-mobile').style.display = 'block'
    document.getElementById('ifweek-4-mobile').style.display = 'none'
    document.getElementById('week-48-mobile').style.background = '#f36c23'
    document.getElementById('week-4-mobile').style.background = '#707070'
    /*...comment by Somnath
    document.getElementsByClassName('week-48-p')[0].style.color = '#f36c23'
    document.getElementsByClassName('week-4-p')[0].style.color = '#2f2f2f'
    */
    /*below two lines were added by Somnath*/
    document.getElementsByClassName('week-48-p')[0].classList.add('active');
    document.getElementsByClassName('week-4-p')[0].classList.remove('active');
    /*........................*/
    return false
  });
  /*below code added by Somnath*/
  window.addEventListener("load",function(){
    document.getElementsByClassName('week-4-p')[0].removeAttribute('style');
    document.getElementById('week-48-mobile').click();
  });
  /*..........................*/
}


/*....written on 03-22-2022 by Somnath.....*/
if($('[name="profession"]').length>0 && $('[name="profession"]').attr("aria-required")=="true"){
  $('[name="profession"]').on('change',function(){
    if($(this).val()!=""){
      $(this).parents(".wpcf7-form-control-wrap.profession").addClass("item-selected");
    }else{
      $(this).parents(".wpcf7-form-control-wrap.profession").removeClass("item-selected");
    }
  });
}
/*.........................................*/