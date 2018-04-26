(function (window, $) {
    'use strict';

    $(function () {
        var $svgs = $('svg');
        $svgs.each(function (index, element) {
            var $element = $(element);
            var $parent = $element.parent();
            if ($parent.length > 0) {
                var parent = $parent.get(0);

                var paper = window.Raphael(parent, $parent.width(), $parent.height());
                paper.importSVG(parent);
            }
        });
    });
})(window, $);
