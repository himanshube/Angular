import { HttpClient} from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  // fisrtname:string = "Angular tutoial";
  // angularversion = "18";
  // version : number =19;
  // isactive: boolean = false;
  // currentdate:Date = new Date();
  // inputtype:string = "radio";
  // selectedstate : string = "";
  
  // showWelcomeMessage() {
  //   alert("woleome to angular " + this.angularversion + " tutorial");

  // }
  // showmessage(message:string){

  //    alert("woleome to angular " + message + " tutorial");

  // }
  rolelist:IRole[]=[];
  http = inject(HttpClient);
  private apiUrl = '/api/GetAllRoles';

  ngOnInit(): void {
   this.getallroles();
  }

  getallroles(){

      //  apiUrl :string  = '/api/GetAllRoles';

      // const headers = new Headers();
      //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
      //   headers.append('Access-Control-Allow-Methods', 'GET');
      //   headers.append('Access-Control-Allow-Origin', '*');

    //  this.http.get<IRole>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
    //   this.rolelist=res.data;
    //    }) 
    this.http.get(this.apiUrl).subscribe((res:any)=>
      {        
        this.rolelist=res.data;
        console.log(this.rolelist);
      });

  }

}
