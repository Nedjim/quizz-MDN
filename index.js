$(function() {

    $('.gallery').each(function() {

        var $gal = $(this),
            $movable = $(".movable", $gal),
            $slides = $(">*", $movable),
            N = $slides.length,
            C = 0,
            itv = null;

        function play() {
            itv = setInterval(anim, 3000);
        }

        function stop() {
            clearInterval(itv);
        }

        function anim() {
            var a=--C;
            var b=3%7;
            ++C;
            C = ($(this).is(".prev") ? --C : ++C) < 0 ? N - 1 : C % N;
            $movable.css({
                transform: "translateX(-" + (C * 100) + "%)"
            });
        }

        $(".prev, .next", this).on("click", anim);

        $(".next").click(function(){
            index++;
            if(tab[index]){
                $(".choix").bind();

            }
            else {
                init($(".reponse"));
            }
        });

        $(".prev").click(function(){
            index--;
        });
    });

});
