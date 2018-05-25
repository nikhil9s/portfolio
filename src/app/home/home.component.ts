import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  skillCounts: number;
  btnText: string = 'Add Skill';
  langText: string = 'First skill Set';
  langs = [ 'HTML', 'CSS', 'jQuery', 'Angular'];

  constructor() { }

  ngOnInit() {

    this.skillCounts = this.langs.length;
    
  }

  addSkill() {
    this.langs.push(this.langText);
    this.langText = '';
    this.skillCounts = this.langs.length;
  }

  removeSkills(i) {
    this.langs.splice(i, 1);
  }

}
