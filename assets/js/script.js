
$(document).ready(function () {

    /** Fixed Navbar **/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 80) {
            $(".navbar").addClass('fixd-navbar');

        } else {
            $(".navbar").removeClass('fixd-navbar');

        }
    });


    //////////////////////////////

    $("#scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    /* Start Smooth Scroll */
    $('.navbar a, .header a, .footer a, .in-filter a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    /* End Smooth Scroll */


   
    /// navbar button
    $("#nav-icon1").click(function () {
        $(this).toggleClass("open");
        $(".navy").toggleClass("back-nav");
        $(".body-overlay").toggleClass("back");
        $("body").toggleClass("body-over");
    });

    $(".body-overlay").click(function () {
        $(this).toggleClass("back");
        $("#nav-icon1").toggleClass("open");
        $(".navy").toggleClass("back-nav");
        $("body").toggleClass("body-over");
    });


});

//opinion
function submitpoll1() {
    var optionid = '';

    optionid = $('input:radio[name=polls]:checked').val();
    if (optionid.toLocaleLowerCase() == 'undefined') {
        return false;
    }

    if (optionid != '' && $.cookie('Cookie' + PollID + '') == null) {
        var x = PollID;
        $.ajax({
            type: "GET",
            url: '/News/SubmitPoll?PollID=' + x + '&OptionID=' + optionid + '',
            contentType: "html/text",
            dataType: "html",
            cache: false,
            success: function (msg) {

                $(".pollscontainer").append(msg);
                $('#pollsOptions').hide();
                 $('#backButton').show();
                $('#resultsButton').hide();
                $('#voteButton').hide();
                $("#pollsResult").show();

                $.cookie('Cookie' + PollID + '', '1', { expires: 1 });
            }
        });
    }
}

function checkall11() {

    $.ajax({
        type: "GET",
        url: '/News/GetPollResults?PollID=' + PollID + '',
        contentType: "html/text",
        dataType: "html",
        cache: false,
        success: function (msg) {
            $(".pollscontainer").append(msg);
            $("#pollsResult").show();
            $('#backButton,#pollsResult:last').show();
            $('#resultsButton').hide();
            $('#voteButton,#pollsOptions').hide();
        }
    });
}

function fnBack() {
    $("#pollsOptions,#voteButton,#resultsButton").show();
    $("#pollsResult,#backButton").hide();
}

////swiper

    
 
