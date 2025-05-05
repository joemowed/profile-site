import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class PageNotFoundRouteService {
    private attemptedURL: string = "";

    constructor(private router: Router) {
        this.attemptedURL = this.router.url;
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.attemptedURL = event.url;
            }
        });
    }

    public getAttemptedURL(): string {
        return this.attemptedURL;
    }
}
