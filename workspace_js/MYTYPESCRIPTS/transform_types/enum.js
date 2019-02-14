var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
})(Sizes || (Sizes = {}));
var selectedSize = 3;
console.log(Sizes.Medium);
console.log(Sizes[Sizes.Large]);
console.log(Sizes[selectedSize]);
var selected = "small" /* Small */;
function updateSize(size) {
    selected = size;
}
updateSize("large" /* Large */);
console.log(selected);
