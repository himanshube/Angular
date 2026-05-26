import { Component } from '@angular/core';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HeaderComponent } from './header/header.component';
import { SidenavigationComponent } from "../sidenavigation/sidenavigation.component";
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatnavigationComponent, HeaderComponent, SidenavigationComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
