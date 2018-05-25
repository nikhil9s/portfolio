import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  {
    path:'experience',
    component: ExperienceComponent
  },

  {
    path:'about',
    component: AboutComponent
  },

  {
    path:'education',
    component: EducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
