import { Component, Input } from "@angular/core";
import { GithubAPI } from "./GithubAPI";

@Component({
    selector: "app-github-commit-card",
    imports: [],
    templateUrl: "./github-commit-card.component.html",
    styleUrl: "./github-commit-card.component.css",
})
export class GithubCommitCardComponent {
    private gh: GithubAPI;
    @Input() commit_number: number = 0;
    constructor() {
        this.gh = new GithubAPI(this.commit_number);
    }
}
