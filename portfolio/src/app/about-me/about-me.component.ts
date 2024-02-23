import { Component, OnInit } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
import { ImgComponent } from '../img/img.component';
import { NgOptimizedImage } from '@angular/common';
import { ProgressiveImageLoaderDirective } from '../progressive-image.directive';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIconComponent, ProgressiveImageLoaderDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  viewProviders: [provideIcons({ octMarkGithub })]
})
export class AboutMeComponent implements OnInit {
  readonly profileImageSrc = "../../assets/portrat-comp.jpg"
  readonly profileImageSrcQ = "../../assets/portrat-comp-q.png"
  readonly introTextPreAnimation = "Welcome, I'm Joe Maloney"
  readonly introTextDelay = 70;
  public introText: string = "";
  constructor() {
  }
  ngOnInit(): void {
    this.animateIntroText()
  }


  private animateIntroText() {
    const interval = setInterval(() => {
      if (this.introText.length != this.introTextPreAnimation.length) {
        try {
          const ele = document.getElementById(`introSpans-${this.introText.length}`)!;
          ele.classList.remove("text-background")
          this.introText += "h";
        } catch (error) {
          console.error(error);
        }
      }
      else {
        clearInterval(interval)
      }
    }, this.introTextDelay)
  }
  openLink(url: string, mailto: boolean = false) {
    if (mailto) {
      window.open(('mailto://' + url), "_blank")
      return
    }
    window.open(('https://' + url), "_blank");
  }
  dlResume() {
    window.open('../../assets/Resume-Joe-Maloney.pdf')
  }
}
