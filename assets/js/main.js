(function($){
    "use strict";
    
    // Inicializa o plugin MeanMenu para criar um menu responsivo
    // Transforma o menu de navegação em um menu "hamburguer" em telas menores que 991px
    // Mean Menu 
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky 
    // Torna a barra de navegação fixa
    // Quando a posição de rolagem da janela ultrapassa 130 pixels a partir do topo, a classe "is-sticky" é adicionada à barra de navegação
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 130){  
            $('.header-sticky').addClass("is-sticky");
        }
        else{
            $('.header-sticky').removeClass("is-sticky");
        }
    });
    var c, currentScrollTop = 0,
    navbar = $('.header-sticky');
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    // Voltar ao início
    $(function(){
        // Scroll 
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });  
        // Click 
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

}(jQuery));
