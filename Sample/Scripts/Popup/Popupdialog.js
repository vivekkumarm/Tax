﻿var jQueryWidget = function (element, valueAccessor, name, constructor) {
    var options = ko.utils.unwrapObservable(valueAccessor());
    var $element = $(element);
    setTimeout(function () { constructor($element, options) }, 0);
    //$element.data(name, $widget);

};

ko.bindingHandlers.dialog = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        console.log("init");
        jQueryWidget(element, valueAccessor, 'dialog', function ($element, options) {
            console.log("Creating dialog on " + $element);
            return $element.dialog(options);
        });
    }
};


ko.bindingHandlers.dialogcmd = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        $(element).button().click(function () {
            var options = ko.utils.unwrapObservable(valueAccessor());
            $('#' + options.id).dialog(options.cmd || 'open');
        });
    }
};

var viewModel = {
    label: ko.observable('dialog test')
};

ko.applyBindings(viewModel);
