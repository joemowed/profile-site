import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  private prevURL: string = "";
  private currURL: string = "";

  constructor(private router: Router) {
    this.currURL = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.prevURL = this.currURL;
        this.currURL = event.url;
      }
    });
  }

  public getPreviousURL(): string {
    return this.prevURL;
  }

  public getCurrentURL(): string {
    return this.currURL;
  }
}
