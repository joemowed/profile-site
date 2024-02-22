import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {
  readonly profileImageSrc = "../../assets/dummyProfileImage.webp"
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
}
