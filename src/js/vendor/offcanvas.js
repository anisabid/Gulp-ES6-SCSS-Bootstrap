(function ($, $$) {

    $$.$({
        offcanvas: {
            options: {
                selector: '[data-toggle="offcanvas"]'
            },
            init: function () {
                $(this.options.selector).on('click', function () {
                    $('.offcanvas-collapse').toggleClass('open')
                });
                return true;
            },
            ready: function () {
                this.init();
            }
        }

    });

})(jQuery, MP);

