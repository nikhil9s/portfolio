import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { UsersService } from './services/users.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EducsService } from './services/educs.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HomeComponent,
    ExperienceComponent,
    AboutComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [UsersService,EducsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
