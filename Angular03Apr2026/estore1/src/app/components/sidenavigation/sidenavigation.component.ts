import { Component } from '@angular/core';
import { Category } from '../home/types/category';
import { CategoryService } from '../home/services/category.service';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css'
})
export class SidenavigationComponent {
categories : Category[]=[];

constructor(categoryservice:CategoryService){
  this.categories=categoryservice.getAllCategories();
}

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }

}
