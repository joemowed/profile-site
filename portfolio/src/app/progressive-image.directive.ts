// adapted from https://itnext.io/angular-2-progressive-image-loader-a1b053195d14
import {

  AfterContentInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, PLATFORM_ID,
  Renderer2
} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[ProgImage]'
})
export class ProgressiveImageLoaderDirective implements AfterContentInit, OnDestroy {
  private nativeElement!: HTMLElement;
  private cancelOnError!: Function;
  private cancelOnLoad!: Function;
  private largeImage?: HTMLImageElement;
  @Input() ProgImage?: string

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private renderer: Renderer2) {
    console.log('dfd')
  }

  ngAfterContentInit() {
    this.registerEvents();
  }

  registerEvents() {
    this.nativeElement = this.el.nativeElement;
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.cancelOnError = this.renderer.listen(this.nativeElement, 'error', this.onError);
    this.cancelOnLoad = this.renderer.listen(this.nativeElement, 'load', this.onLoad);
  }

  loadLargeImage(url: string) {
    const ind = url.lastIndexOf('-');
    if (!(this.ProgImage)) {
      url = (url.slice(0, ind) + url.slice(ind + 2))
    }
    else {
      url = (url.slice(0, ind) + '.' + this.ProgImage)

    }
    this.largeImage = new Image();
    this.largeImage.src = url;
    this.largeImage.onload = () => {
      //console.log('image loaded, ', this.largeImage.src);
      this.renderer.setAttribute(this.nativeElement, 'src', this.largeImage!.src);
    }
  }

  private onError() {
  }

  private onLoad() {
    this.removeOnLoadEvent();
    let src = this.nativeElement.getAttribute('src')!;
    this.loadLargeImage(src);
  }

  private removeErrorEvent() {
    if (this.cancelOnError) {
      this.cancelOnError();
    }
  }

  private removeOnLoadEvent() {
    if (this.cancelOnLoad) {
      this.cancelOnLoad();
    }
  }

  ngOnDestroy() {
    this.removeErrorEvent();
    this.removeOnLoadEvent();
  }
}
