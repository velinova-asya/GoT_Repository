// ============================================
//              FADING BACKGROUND
//              SLIDING VALIDATION
// ============================================

window.setTimeout(function(){
    $('#black').fadeOut(1500);
}, 1000);

if (window.innerWidth > 768) {
    window.setTimeout(function(){
        $('#validation_container').effect('slide',{direction:'right'}, 800).css("display", "block");
    }, 1500);
}

// ============================================
//              DROPDOWN LANGUAGE 
// ============================================

$(function() {
    $('.dropdown-toggle').click(function(){
        $('.dropdown').toggle();
    });
    $('.dropdown_language').on('mouseleave', function() {
        $('.dropdown').hide();
    });
});


$(document).ready(function() {

    // =================================================================
    //                      REMOVE VIDEO 
    // =================================================================

    if (window.innerWidth <= 768) {
        $('video').removeAttr('autoplay');
    }

    // =================================================================
    //                      AGE CALENDAR 
    // =================================================================

    for (var d = 1; d <= 31; d += 1) {
        if (d < 10) {
            $("#dd.dropdown-menu").append('<li id='+d+'>' + '0' + d + '</li>');
        } else {
            $("#dd.dropdown-menu").append('<li id='+d+'>' + d + '</li>');
        }
    }

    for (var m = 1; m <= 12; m += 1) {
        if (m < 10) {
            $("#mm.dropdown-menu").append('<li id='+m+'>' + '0' + m + '</li>');
        } else {
            $("#mm.dropdown-menu").append('<li id='+m+'>' + m + '</li>');
        }
    }


    for (var y = 1950; y <= 2016; y += 1) {
        $("#yy.dropdown-menu").append('<li id='+y+'>' + y + '</li>');
    }

    $(".dropdown-accordion").on('click', function() {
        $(this).find('.dropdown-menu').addClass('show-menu');
    });

    $(".dropdown-accordion").on('mouseleave', function() {
        $(this).find('.dropdown-menu').removeClass('show-menu');
    });

    
    $(".dropdown-accordion ul li").on('click', function() {
        
          $(this).closest('.dropdown-menu').removeClass('show-menu');

          $(this).closest('.dropdown-accordion').find('span.button').html($(this).html());
          
          $(this).closest('.dropdown-accordion').attr('data-value', $(this).html());
          
          recalculateDate();        
    });


    function recalculateDate() {
        
        var now = new Date(),
            thisYear = now.getFullYear(),
            thisMonth = now.getMonth() + 1,
            today = now.getDate();

        var clickedYear = parseInt($('#yy').parent().attr('data-value')),
            clickedMonth = parseInt($('#mm').parent().attr('data-value')),
            clickedDay = parseInt($('#dd').parent().attr('data-value'));
        
        var ageInYears = thisYear - clickedYear,
            ageInMonths = thisMonth - clickedMonth,
            ageInDays = today - clickedDay;
        
        if (ageInYears > 18) {
            $('#enter_btn').prop('disabled', false);
        } else if (ageInYears < 18) {
            $('#enter_btn').prop('disabled', true);
        } else {
            if (thisMonth > clickedMonth && clickedMonth !== 0) {
                $('#enter_btn').prop('disabled', false);
            } else if (thisMonth < clickedMonth) {
                $('#enter_btn').prop('disabled', true);
            } else {
                if (today >= clickedDay && clickedDay !== 0) {
                    $('#enter_btn').prop('disabled', false);
                } else {
                    $('#enter_btn').prop('disabled', true);
                }
            }
        }
    }


    // =================================================================
    //                      UNSLIDER 
    // =================================================================

    $('.automatic-slider').unslider({
       autoplay: true 
    });

});


