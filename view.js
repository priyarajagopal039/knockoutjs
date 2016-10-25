$(function() {
    var books = [
        {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Classic"},
    {
        name: "The Hobbit",
        author: "J.R.R Toklien",
        genre: "Fantasy"},
    {
        name: "Deception Point",
        author: "Dan Brown",
        genre: "Thriller"},
    {
        name: "Wuthering Heights",
        author: "Emily Bronte",
        genre: "Classic"}
        ];

    var viewModel = {
        query: ko.observable('')
    };

    viewModel.books = ko.dependentObservable(function() {
        var search = this.query().toLowerCase();
        return ko.utils.arrayFilter(books, function(book) {
            return book.name.toLowerCase().indexOf(search) >= 0;
        });
    }, viewModel);

    ko.applyBindings(viewModel);
});
