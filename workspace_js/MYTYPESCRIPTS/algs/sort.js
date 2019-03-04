var arr = ['foo', 'bar'];
var copy = arr.slice().sort(); //arr.sort();
console.log({ arr: arr });
console.log({ copy: copy });
var foo = [1, 3, 22];
foo.sort(function (a, b) {
    return a - b;
});
console.log(foo);
console.log(foo.map(function (x) { return x.toString(); }));
var movies = [
    {
        name: 'The Shawshank Redemption',
        year: 1994
    },
    {
        name: 'The Godfather',
        year: 1972
    },
    {
        name: 'The Godfather: Part II',
        year: 1974
    },
    {
        name: 'The Dark Knight',
        year: 2008
    },
];
movies.sort(function (a, b) { return a.year - b.year; }); // O (n logn)
console.log(movies.map(function (movie) { return movie.name; }));
var ff = [
    'Alpha',
    'beta',
    'Gamma',
    'delta'
];
ff.sort(function (a, b) { return a.localeCompare(b.toLocaleLowerCase()); });
ff.forEach(function (item) { return console.log(item); });
