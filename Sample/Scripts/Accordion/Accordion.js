(function () {
    function Item(id, name) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
    }

    var viewModel = {
        items: ko.observableArray([
            new Item(1, "one"),
            new Item(2, "two"),
            new Item(3, "three")]),
        add: function () {
            debugger; 
            viewModel.items.push(new Item(4, "foo"));
        }
    };

    ko.applyBindings(viewModel);
});

