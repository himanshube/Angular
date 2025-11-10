import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import EventEmitter from 'events';
import { emit } from 'process';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() receivedisplay : string = "";

  @Output() childevent = new EventEmitter();

  emitevent(){
    // this.childevent.emit("Hello from Child Component");
  }

}
