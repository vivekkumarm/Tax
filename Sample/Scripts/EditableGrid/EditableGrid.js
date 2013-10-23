/*----------------------------------------------------------------------*/
/* Item Model
/*----------------------------------------------------------------------*/
function Fruit(name, colour) {
    var self = this;
    self.name = ko.observable(name);
    self.colour = ko.observable(colour);
};

/*----------------------------------------------------------------------*/
/* View Model
/*----------------------------------------------------------------------*/
function FruitColourViewModel() {
    var self = this;

    //  data
    self.fruits = ko.observableArray([]);

    //  edit helpers
    self.availableColours = [];
    self.editingItem = ko.observable();
    self.isItemEditing = function (itemToTest) {
        return itemToTest == self.editingItem();
    };

    //  edit behaviours
    self.addFruit = function () {
        var fruit = new Fruit("New fruit", self.availableColours[0]);
        self.fruits.push(fruit);

        //  begin editing the new item straight away
        self.editFruit(fruit);
    };

    self.removeFruit = function (fruit) {
        if (self.editingItem() == null) {
            self.fruits.remove(fruit)
        }
    };

    self.editFruit = function (fruit) {
        if (self.editingItem() == null) {
            // shows the edit fields
            self.editingItem(fruit);
        }
    };

    self.applyFruit = function (fruit) {
        //  hides the edit fields
        self.editingItem(null);
    };

    self.cancelEdit = function (fruit) {
        //  hides the edit fields
        self.editingItem(null);
    };

}

/*----------------------------------------------------------------------*/
/* KO Page Binding                                                      */
/*----------------------------------------------------------------------*/
$(document).ready(function () {

    //  create the model
    var model = new FruitColourViewModel();
    model.availableColours = ["Blue", "Green", "Orange", "Red", "Yellow"];

    var initData = [
        new Fruit("Apple", "Green"),
        new Fruit("Banana", "Yellow"),
        new Fruit("Orange", "Orange"),
        new Fruit("Strawberry", "Red")
    ];

    model.fruits(initData);

    //  bind model to the html
    ko.applyBindings(model);

});



