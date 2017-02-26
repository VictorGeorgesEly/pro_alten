(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-knowledge', {
        duration: 400,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-number', {
        duration: 400,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-partner', {
        duration: 400,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 400,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Timeline
    sr.reveal('.side-info', {
        duration: 600,
        viewFactor: 0.3,
        distance: '20px'
    });
    sr.reveal('.timeline-img', {
        duration: 600,
        viewFactor: 0.3,
        distance: '50px'
    });
    sr.reveal('.line-arrow', {
        duration: 600,
        viewFactor: 0.3,
        distance: '30px'
    });


    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });




    var checkHint = function (id, idModal, delay, scroll) {
      if (hints[id] === undefined) {
        hints[id] = false;
      }
      if (!hints[id]) {
        var item = $(id).offset().top
        if (scroll > item - 300 && scroll < item + 200) {
          $(idModal).addClass('visible');
          setTimeout(function () {
            $(idModal).removeClass('visible');
          }, 3000);
          hints[id] = true
        }
      }
    }
    var hints = {}
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();

      checkHint('#mockups', '#mockup-modal', 3000, scroll);
      checkHint('#options', '#options-modal', 3000, scroll);
      checkHint('#phases', '#phase-modal', 2000, scroll);


    });

    // Gantt
    var donnees = [], w = 0;
    $('#ganttChart span').each(function(){
        w++;
        donnees.push({
            id: w,
            name:$(this).data('name'),
            series:
            [
                {
                    start:new Date($(this).data('start')),
                    for: $(this).data('for'),
                    color: "#9274ac"
                }
            ]
        })
    });
    $("#ganttChart").ganttView({
        data: donnees,
        slideWidth: 600,
    });

})(jQuery); // End of use strict
