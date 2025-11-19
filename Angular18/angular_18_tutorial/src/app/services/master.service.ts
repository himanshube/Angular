import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private desapiUrl = '/api/GetAllDesignation';
  constructor(private http : HttpClient) { }

  getdesignations(){
     return this.http.get(this.desapiUrl);
  };
}
