
var MovieModel = function (Movies) {
    var self = this;
    self.Movies = ko.observableArray(Movies);

    self.addMovie = function () {
        self.Movies.push({
            ID: "4",
            Title: "BBB",
            Director: "AAA",
            Genere: "CCC"
        });
    };

    self.removeMovie = function (movie) {
        self.Movies.remove(movie);
    };

    self.sortByName = function () {
        this.Movies.sort(function (a, b) {
            return a.Title < b.Title ? -1 : 1;
        });
    };
};

var viewModel = new MovieModel([
    { ID: 1, Title: "War of the worlds", Director: "Spiel Berg", Genere: "Sci fi", },
    { ID: 2, Title: "Terminator", Director: "James camerron", Genere: "Action" },
    { ID: 3, Title: "Avatar", Director: "James camerron", Genere: "Fiction" },

]);

ko.applyBindings(viewModel);

