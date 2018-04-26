(function () {
    'use strict';

    $.fn.extend({
        live: function () {
            return $.fn.on.apply(this, arguments);
        }
    });

})();
