alert("ok");
var ViewModel = function () {
    this.active = ko.observable(0);
    this.selected = ko.computed({
        read: function () { return this.active().toString(); },
        write: function (newValue) { this.active(parseInt(newValue, 10)); },
        owner: this
    });
};