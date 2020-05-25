import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Container } from './container.model';

@Injectable({
  providedIn: 'root'
})
export class AddcontService {
  
  _url = location.protocol+'//'+location.hostname+':8081/api';
  
  constructor(private _http: HttpClient) { }
  
  addContainer(container:Container){
    //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let containerObj = 
      {
        "cnr" : "cnr3",
        "vgm" : "vgm",
        "type" : "type",
        "status" : "status",
        "target" : "target",
        "cargo" : "cargo",
        "location" : "location"     
      }
      return this._http.post<any>(this._url+'/addContainer/',container, {responseType: 'text' as 'json'})
  }
}
