import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularproject');
  inputValue: string = 'Hello';
  isDisabled: boolean = false;
  imgsrc:string ="/assets/Angular.jpg";
}
