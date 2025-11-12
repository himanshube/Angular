import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import EventEmitter from 'events';
import { emit } from 'process';
@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})

export class Child {
  @Input() items: string []=[];
  //@Output() itemdeleted=new EventEmitter<string>();
  DeleteItem(index : number)
  {
  //  this.itemdeleted.emit(index);
  }
  count : number=0;
  IncrementCount()
  {
    this.count++;
  }
}
