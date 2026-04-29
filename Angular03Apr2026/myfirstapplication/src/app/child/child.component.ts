import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Input() inputvalue :string |undefined;

  ngOnInit(): void {

    console.log("child onit",this.inputvalue)
    
  }

  constructor() {

     console.log("Constructoe",this.inputvalue)
   }


}
