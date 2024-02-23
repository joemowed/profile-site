import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { FooterComponent } from './footer/footer.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { enviroment } from '../enviroment/enviroment';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AboutMeComponent, InProgressComponent, InProgressComponent, FooterComponent, EducationComponent, SkillsComponent]
})
export class AppComponent {
  readonly enviroment = enviroment;

  title = 'portfolio';
}
