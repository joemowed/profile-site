import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { FooterComponent } from './footer/footer.component';
import { InProgressComponent } from './in-progress/in-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AboutMeComponent, InProgressComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio';
}
