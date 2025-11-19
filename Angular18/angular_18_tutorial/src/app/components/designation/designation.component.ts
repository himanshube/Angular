import { Component, Inject,OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  masterservice = Inject(MasterService);

  ngOnInit(): void {
    this.masterservice.getdesignations().subscribe((res:any)=>{


    });    
  }

}
