function foo(bar: string | number) {
    if(typeof bar === 'string') {
        return bar.toUpperCase();        
    }
    if(typeof bar === 'number') {
        return bar.toFixed(2);
    }    
}

class Song {
    constructor(public title: string, public duration: string | number) {

    }
}

function getSondDuration(item: Song) {
    if(typeof item.duration === 'string') {
        return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;  
}
const songDurationFromString = getSondDuration(new Song('Wonderful Wonderful', '05:31'));
console.log(songDurationFromString);

const songDurationFromMS = getSondDuration(new Song('Wonderful Wonderful', 330000));
console.log(songDurationFromMS);