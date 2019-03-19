export class Category {
    categoryId: number;
    categoryName: string;
    addedBy: string;

    constructor(categoryId: number, categoryName: string, addedBy: string) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.addedBy = addedBy;
    }
}
