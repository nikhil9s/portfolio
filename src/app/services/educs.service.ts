import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class EducsService {

  constructor( private http: Http) { }

  getAllEducs(){
    return this.http.get('data/edu.json')
    .map (res => res.json())
  }

}
