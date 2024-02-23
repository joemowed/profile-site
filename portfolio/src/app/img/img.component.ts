import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent implements OnInit {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) dim!: string;
  @Input({ required: true }) isLazy!: boolean;
  @Input({ required: true }) imgClass!: string;
  @Input({ required: true }) quickSrc!: string;
  isLoaded = false;
  width!: string;
  height!: string;

  constructor() {

  };
  ngOnInit(): void {
    [this.width, this.height] = this.dim.split('x', 2)
    console.log(this.width, this.height)

  }

}
