import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private usersService: UsersService
  ) { }

  ngOnInit() {

    this.usersService.getAllUsers()
    .subscribe (
      data => this.users = data,
      error => this.error = error.statusText
    );

  }

}
