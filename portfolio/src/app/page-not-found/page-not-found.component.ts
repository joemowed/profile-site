import { Component, OnInit } from "@angular/core";
import { PageNotFoundRouteService } from "../previous-route.service";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: "app-page-not-found",
    imports: [RouterLink],
    templateUrl: "./page-not-found.component.html",
    styleUrl: "./page-not-found.component.css",
})
export class PageNotFoundComponent {
    protected attempted_url: string = "";
    protected show_attempted_url: boolean = true;
    readonly MAX_URL_DISPLAY_LENGTH = 60;

    constructor(
        private pnfRoute: PageNotFoundRouteService,
        private router: Router,
    ) {}

    ngOnInit() {
        const current_route = this.router.url;
        let attempted_route = this.pnfRoute.getAttemptedURL();
        if (current_route == attempted_route) {
            this.show_attempted_url = false;
        }
        let base = document.URL;

        //remove the current router URL from the string
        const trim_start = base.length - current_route.length;
        base = base.slice(0, trim_start);
        base += attempted_route;
        if (base.length > this.MAX_URL_DISPLAY_LENGTH) {
            //trim the string to ~80 chars
            base = base.slice(0, this.MAX_URL_DISPLAY_LENGTH);
            base += "...";
        }
        this.attempted_url = base;
    }
}
