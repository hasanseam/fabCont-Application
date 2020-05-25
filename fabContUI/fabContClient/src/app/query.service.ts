import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  _url = location.protocol+'//'+location.hostname+':8081/api';
  constructor(private _http: HttpClient) { }

  query():Observable<any>{
    return this._http.get<any>(this._url+'/query/')
  }

  querySingle(cnr){
    return this._http.get(this._url+'/querySingle/'+cnr)
  }
}
