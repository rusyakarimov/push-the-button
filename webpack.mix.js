const mix = require("laravel-mix");

/**
 * Я использовал самый простой вариант компиляции ассетов
 */

mix.styles(
    [
        "public/css/bootstrap-grid.min.css",
        "public/css/bootstrap-reboot.min.css",
        "public/css/default-skin.css",
        "public/css/ionicons.min.css",
        "public/css/jquery.mCustomScrollbar.min.css",
        "public/css/main.css",
        "public/css/nouislider.min.css",
        "public/css/owl.carousel.min.css",
        "public/css/photoswipe.css",
        "public/css/plyr.css",
    ],
    "public/css/all.css"
);

mix.babel(
    [
        "public/js/jquery-3.3.1.min.js",
        "public/js/bootstrap.bundle.min.js",
        "public/js/jquery.mCustomScrollbar.min.js",
        "public/js/jquery.morelines.min.js",
        "public/js/jquery.mousewheel.min.js",
        "public/js/owl.carousel.min.js",
        "public/js/wNumb.js",
        "public/js/nouislider.min.js",
        "public/js/plyr.min.js",
        "public/js/photoswipe.min.js",
        "public/js/photoswipe-ui-default.min.js",
        "public/js/main.js",
    ],
    "public/js/all.js"
);
