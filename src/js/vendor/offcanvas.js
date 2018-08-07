(function ($, $$) {

    $$.$({
        offcanvas: {
            options: {
                selector: '[data-toggle="offcanvas"]'
            },
            bind: function () {
                $(this.options.selector).bind('click', function () {
                    $('.offcanvas-collapse').toggleClass('open')
                });
                return true;
            },
            unbind: function () {
                $(this.options.selector).unbind('click');
                return true;
            },
            ready: function () {
                this.bind();
            }
        }

    });

})(jQuery, MP);

