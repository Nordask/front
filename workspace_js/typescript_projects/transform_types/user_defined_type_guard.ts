class Foo {
    bar() {

    }
}

//function Foo2() {}
//Foo2.prototype.bar = function() {};

const bar = new Foo();

console.log(bar instanceof Foo);
console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
    kind: 'song';
    constructor(public title: string, public duration: number) {}
}

class Playlist {
    kind: 'playlist';
    constructor(public name: string, public songs: Song[]) {}
}

function getItemName(item:Song | Playlist) {
    if(item instanceof Song) { //if((item as Song).title) {
        return item.title; //return (item as Song).title;
    }
    return item.name; //(item as Playlist).name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);

const playListName = getItemName(
    new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playListName)

//------------------------------------------------------------------------------

//                          works only for boolean functions
function isSong(item: any): item is Song {
    return item instanceof Song;
}

function getItemNameIs(item:Song | Playlist) {
    if(isSong(item)) {
        return item.title;
    }
    return item.name;
}

//------------------------------------------------------------------------------

const exists = 'localStorage' in window; // check only existance

function isSongIn(item: any): item is Song {
    return 'title' in item;
}

function getItemNameIn(item:Song | Playlist) {
    if(item.kind === 'song') { //if(isSongIn(item)) {
        return item.title;
    }
    return item.name;
}