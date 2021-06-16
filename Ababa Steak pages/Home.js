$(document).ready(function(){
    $(".btnNext").click(function(){
        var active = $(".active")
        var nextImg = active.next()

        $(".jquery-slider").animate({
            "margin-left": "+=200px",
            }, "fast"); 
        
        $(".jquery-slider").animate({
            "margin-left": "-=200px"
            }, "fast"); 

        if(nextImg.length > 0 ){
            active.removeClass("active").css('z-index','-10')
            nextImg.addClass("active").css('z-index','10')

        }else{
            var firstImg = active.prevAll().last()
            active.removeClass("active").css('z-index','-10')
            firstImg.addClass("active").css('z-index','10')
        }
    })

    $(".btnPrev").click(function(){
        var active = $(".active")
        var prevImg = active.prev()

        $(".jquery-slider").animate({
            "margin-left": "-=200px",
            }, "fast"); 
        
        $(".jquery-slider").animate({
            "margin-left": "+=200px"
            }, "fast"); 

        if(prevImg.length > 0 ){
            active.removeClass("active").css('z-index','-10')
            prevImg.addClass("active").css('z-index','10')

        }else{
            var lastImg = active.nextAll().last()
            active.removeClass("active").css('z-index','-10')
            lastImg.addClass("active").css('z-index','10')
        }

    })
})