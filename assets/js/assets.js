$(document).ready(function () {
    //Hamburger Menu
    //Hamburger Menu
    $(".hamburger").click(function () {
        $(this).toggleClass("activo");
        if ($(this).hasClass("activo")) {
            $('.hamburger-menu').fadeIn().show();
        } else {
            $('.hamburger-menu').fadeOut();
        }
    });

    $(".hamburger-close").click(function () {
        $('.hamburger-menu').fadeOut();
        $('.hamburger').removeClass('activo');
    });

    //Filter Menu
    //Filter Menu
    $(".modulo-filtro").click(function () {
        if ($('.bg-color').hasClass("fadeInLeft")) {
            $('.bg-color').removeClass('fadeInLeft');
            $('.this').addClass('wow fadeOutLeft data-wow-delay="0.1s"');
            $('.bg-color').fadeOut(500);
        } else {
            $('.bg-color').removeClass('fadeOutLeft').addClass('fadeInLeft');
            $('.bg-color').show();
        }
    });

    //Añadir clases o elementos
    //Añadir clases o elementos
    $('.hamburger-menu__fondo ul li a').append('<hr>');
    $('.modulo-somos__telasflora--reseña h1').addClass('titulo titulo__basico');

    $('.modulo-catalogo__categorias li a').each(function () {
        if ($(this).text() == 'Etiquetas') {
            $('.modulo-catalogo__categorias > li:nth-child(3)').addClass('tag');
            $('.tag li').css('display', 'inline-block');
            $('.tag li a').addClass('cat-tag');
            $('.tag li span').css('display', 'none');
        }
    });

    //Cambio de clase
    //Cambio de clase
    $(".modulo-lonuevo__destacados:nth-child(3)").addClass('modulo-lonuevo__destacados--vertical');
    $(".modulo-lonuevo__destacados--vertical").removeClass('modulo-lonuevo__destacados');
    $(".modulo-lonuevo__destacados:nth-child(6)").addClass('modulo-lonuevo__destacados--horizontal');
    $(".modulo-lonuevo__destacados--horizontal").removeClass('modulo-lonuevo__destacados');

    $(".modulo-footer__widgets:nth-child(2)").addClass('modulo-footer__widgets--bg-tono');

    //ElevateZoom
    //ElevateZoom
    if ($("#zoom_07").length !== 0) {
        $("#zoom_07").elevateZoom({
            zoomType: 'inner',
            cursor: 'crosshair',
            gallery: 'gallery_01',
            galleryActiveClass: 'modulo-detalle__imagen--miniatura__activa',
        })
    }
    ;

    //Up to top
    //Up to top
    if ($('.modulo-accesibilidad').length) {
        var scrollTrigger = 380, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.modulo-accesibilidad').fadeIn();
                } else {
                    $('.modulo-accesibilidad').fadeOut();
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.modulo-up').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1500);
        });
    }
});


