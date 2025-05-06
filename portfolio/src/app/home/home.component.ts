import { Component } from "@angular/core";
import { GithubCommitCardComponent } from "../github-commit-card/github-commit-card.component";

@Component({
    selector: "app-home",
    imports: [GithubCommitCardComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
