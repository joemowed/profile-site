import { Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { ProgressiveImageLoaderDirective } from '../progressive-image.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ImgComponent, ProgressiveImageLoaderDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
