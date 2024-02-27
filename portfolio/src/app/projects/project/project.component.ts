import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects.component';
import { ProgressiveImageLoaderDirective } from '../../progressive-image.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProgressiveImageLoaderDirective, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) isMobile!: boolean;
  activeCardDesc?: string
  constructor() {
  }
  ngOnInit(): void {

    this.activeCardDesc = this.project.card[0].description;
  }
  changeViaRightArrow() {
    const currIndex = this.getIndex(this.activeCardDesc!)
    let changeIndex = currIndex + 1;
    if (currIndex == this.project.card.length - 1) {
      changeIndex = 0;
    }
    this.activeCardDesc = this.project.card[changeIndex].description;
  }
  changeViaLeftArrow() {
    const currIndex = this.getIndex(this.activeCardDesc!)
    let changeIndex = currIndex - 1;
    if (changeIndex == -1) {
      changeIndex = this.project.card.length - 1;
    }

    this.activeCardDesc = this.project.card[changeIndex].description;
  }
  private getIndex(desc: string): number {
    let i = 0;
    for (const each of this.project.card) {
      if (each.description == desc) {
        return i
      }
      i++;
    }
    console.log("cant find index of card desc")
    return 0;
  }
  changeActiveCard(desc: string) {
    this.activeCardDesc = desc;
  }

}
