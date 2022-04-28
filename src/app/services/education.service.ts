import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private _http: HttpClient) { }
  
  public getData(): Observable<any> {
    return this._http.get<any>("assets/data/education.json");
  }

}
