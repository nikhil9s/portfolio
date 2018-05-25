import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('data/list.json')
      .map( res => res.json())
  }

}
