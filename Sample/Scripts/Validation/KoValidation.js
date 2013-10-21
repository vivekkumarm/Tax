$(function () {
    ko.extenders.required = function (target, overrideMessage) {
        //add some sub-observables to our observable
        target.hasError = ko.observable();
        target.validationMessage = ko.observable();

        //define a function to do validation
        function validate(newValue) {
            target.hasError(newValue ? false : true);
            target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
        }

        //initial validation
        validate(target());

        //validate whenever the value changes
        target.subscribe(validate);

        //return the original observable
        return target;
    };

    function AppViewModel(first, last) {
        this.firstName = ko.observable(first).extend({ required: "Please enter a first name" });
        this.lastName = ko.observable(last).extend({ required: "" });
    }

    var viewModel = {

        firstName: ko.observable("sam"),
        lastName: ko.observable("deva"),
    }
    ko.applyBindings(new AppViewModel("Bob", "Smith"));
});