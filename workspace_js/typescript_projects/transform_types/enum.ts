enum Sizes {
    Small,
    Medium,
    Large
}

enum Sizes {
    ExtraLarge = 3
}

const selectedSize = 3;

console.log(Sizes.Medium);
console.log(Sizes[Sizes.Large]);
console.log(Sizes[selectedSize]);
//------------------------------------------------------------------------------
//  non-numeric enum
const enum newSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

let selected: newSizes = newSizes.Small;

function updateSize(size: newSizes): void {
    selected = size;
}

updateSize(newSizes.Large);

console.log(selected);