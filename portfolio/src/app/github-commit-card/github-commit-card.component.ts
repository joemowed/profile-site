import { Component, Input, numberAttribute } from "@angular/core";
import { GithubAPI, BoxColors } from "./GithubAPI";

@Component({
    selector: "app-github-commit-card",
    imports: [],
    templateUrl: "./github-commit-card.component.html",
    styleUrl: "./github-commit-card.component.css",
})
export class GithubCommitCardComponent {
    public gh: GithubAPI;
    public readonly red = BoxColors.red;
    public readonly green = BoxColors.red;
    @Input({ required: true, transform: numberAttribute })
    commit_number!: number;

    constructor() {
        this.gh = new GithubAPI(this.commit_number, 5);
    }
    ngOnInit() {
        this.gh = new GithubAPI(this.commit_number, 5);
    }
}
