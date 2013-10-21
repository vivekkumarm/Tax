////$(function () {

////    var viewModel = {
////        optionValues: ["Alpha", "Beta", "Gamma"],
////        selectedOptionValue: ko.observable("Gamma")
////    };
////    ko.applyBindings(viewModel);
////});


(function () {
    //Define our options model
    var cascadingOption = function(data) {
        var self = this;
        self.text = data.text;
        self.childOptions = data.childOptions;
    };

    //fill our models with example data
    function buildData() {
        var tamilnadu = new cascadingOption({
            text: 'Tamilnadu',
            childOptions: [
                new cascadingOption({
                    text: 'Salem'
                }),
                new cascadingOption({
                    text: 'Chennai'
                })
            ]
        });

        var andra = new cascadingOption({
            text: 'Kerala',
            childOptions: [
                new cascadingOption({
                    text: 'Kochi'
                }),
                new cascadingOption({
                    text: 'Thirvandrum'
                })
            ]
        });

        var india = new cascadingOption({
            text: 'India',
            childOptions: [tamilnadu, andra]
        });

        var us = new cascadingOption({
            text: 'United States',
            childOptions: [
                new cascadingOption({
                    text: 'Florida',
                    childOptions: [
                        { text: 'Tallahassee' }
                    ]
                }),
                new cascadingOption({
                    text: 'Michigan',
                    childOptions: [
                        { text: 'Lansing' }
                    ]
                })
            ]
        });

        return [india, us];
    }

    var viewModel = {
        countries: buildData(),
        selectedCountry: ko.observable(),
        selectedState: ko.observable(),
        selectedDistrict: ko.observable()
    };

    viewModel.states = ko.computed(function () {
        return viewModel.selectedCountry() ? viewModel.selectedCountry().childOptions : null;
    });

    viewModel.districts = ko.computed(function () {
        return viewModel.selectedState() ? viewModel.selectedState().childOptions : null;
    });


    ko.applyBindings(viewModel);

});

