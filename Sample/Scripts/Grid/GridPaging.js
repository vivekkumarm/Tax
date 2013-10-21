var initialProduct = [
           { product: "Tikki Burger", sales: 400, price: 25.50 },
           { product: "Ham Burger", sales: 60, price: 30.00 },
           { product: "Cheese Burger", sales: 85, price: 25.00 },
           { product: "Double Cheese Burger", sales: 48, price: 40.00 },
           { product: "Fries", sales: 90, price: 30.00 },
           { product: "Cold Drink(Small)", sales: 450, price: 25.00 },
           { product: "Cold Drink(Medium)", sales: 420, price: 35.00 }
];

function GridView(items) {
    this.items = ko.observableArray(items);

    this.addProduct = function () {
        this.items.push({ product: "New Product", sales: 0, price: 30.00 });
    };

    this.sortProduct = function () {
        this.items.sort(function (a, b) {
            return a.product < b.product ? -1 : 1;
        });
    };

    this.goToStartingPage = function () {
        this.gridViewModel.currentPageIndex(0);
    };

    this.gridViewModel = new ko.simpleGrid.viewModel({
        data: this.items,
        columns: [
            { headerText: "Items", rowText: "product" },
            { headerText: "Sales", rowText: "sales" },
            { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
        ],
        pageSize: 4
    });
};

ko.applyBindings(new GridView(initialProduct));