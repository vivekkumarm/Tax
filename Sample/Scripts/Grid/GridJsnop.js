    var viewModel = {
        movies: ko.observableArray(),
    };
$(document).ready(function () {
    debugger;
    $.ajax({
        url: "http://localhost:21368/api/GridLoad",
        contentType: "text/json",
        type: "GET",
        success: function (data) {
            $.each(data, function (index) {
                viewModel.movies.push(ToKnockOutObservable(data[index]));
            });
            ko.applyBindings(viewModel);
        },
        error: function (data) {
            alert(data); alert("error occured");
            ;
        }
    });

    function ToKnockOutObservable(movies) {
        return {
            Id: ko.observable(movies.Id),
            Title: ko.observable(movies.Title),
            Director: ko.observable(movies.Director),
            Genere: ko.observable(movies.Genere),
        };
    }
});


    //$(document).ready(function () {
    //    $.ajax({
    //        url: 'http://localhost:21368/api/GridLoad',
    //        type: 'GET',
    //        dataType: 'jsonp',
    //        success: function (data) {
    //            $.each(data, function (index) {
    //                viewModel.movies.push(ToKnockOutObservable(data[index]));
    //            });
    //            ko.applyBindings(viewModel);
    //        },
    //        error: function (data) {
    //            alert(data); alert("error occured");
    //            ;
    //        }
    //    });
        
    //    function ToKnockOutObservable(movies) {
    //        return {
    //            Id: ko.observable(movies.Id),
    //            Title: ko.observable(movies.Title),
    //            Director: ko.observable(movies.Director),
    //            Genere: ko.observable(movies.Genere),
    //        };
    //    }
    //});



