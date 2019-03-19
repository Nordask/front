import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoriesList: Category[] = [
    new Category(1, "Java", "Harsha"),
    new Category(2, ".NET", "Volodya"),
    new Category(3, "Angular", "Volodya"),
    new Category(4, "Blockchain", "John")
  ];
}
