(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="payment"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        var $div = $('<div></div>', {
            'id': 'payment',
            'class': 'modal'});
        var $paragraph = $('<p></p>');
        var description = 'Thank you for your payment, ';

        $paragraph.append(description);
    });
})(window);