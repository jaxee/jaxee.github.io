$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#n_"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.navigation a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top - 200) <= scrollPos && (refElement.position().top) + refElement.height() > scrollPos) {
            $('.navigation a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}