import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EducsService } from '../services/educs.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educs: Array<any>;

  constructor(
    private http: Http,
    private educsServices: EducsService
  ) { }

  ngOnInit() {

    this.educsServices.getAllEducs()
      .subscribe (
        data => this.educs = data
      )
  }

}
