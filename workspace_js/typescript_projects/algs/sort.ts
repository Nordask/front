const arr: ReadonlyArray<string> = ['foo', 'bar'];
const copy = arr.slice().sort();//arr.sort();

console.log({arr});
console.log({copy});

const foo = [1, 3, 22];
foo.sort((a, b) => {
    return a - b
});
console.log(foo);
console.log(foo.map(x => x.toString()));

const movies = [
    {
        name: 'The Shawshank Redemption',
        year: 1994,

    },
    {
        name: 'The Godfather',
        year: 1972,

    },
    {
        name: 'The Godfather: Part II',
        year: 1974,

    },
    {
        name: 'The Dark Knight',
        year: 2008,

    },
]

movies.sort((a, b) => a.year - b.year);// O (n logn)
console.log(movies.map(movie => movie.name));

const ff = [
    'Alpha',
    'beta',
    'Gamma',
    'delta'
]

ff.sort((a, b) => a.localeCompare(b.toLocaleLowerCase()));
ff.forEach(item => console.log(item));