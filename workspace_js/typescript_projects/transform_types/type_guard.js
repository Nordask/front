function foo(bar) {
    if (typeof bar === 'string') {
        return bar.toUpperCase();
    }
    if (typeof bar === 'number') {
        return bar.toFixed(2);
    }
}
var Song = /** @class */ (function () {
    function Song(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return Song;
}());
function getSondDuration(item) {
    if (typeof item.duration === 'string') {
        return item.duration;
    }
    var duration = item.duration;
    var minutes = Math.floor(duration / 60000);
    var seconds = (duration / 1000) % 60;
    return minutes + ":" + seconds;
}
var songDurationFromString = getSondDuration(new Song('Wonderful Wonderful', '05:31'));
console.log(songDurationFromString);
var songDurationFromMS = getSondDuration(new Song('Wonderful Wonderful', 330000));
console.log(songDurationFromMS);
