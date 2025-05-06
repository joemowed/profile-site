import { Component } from "@angular/core";
import { RecentCommitsComponent } from "../recent-commits/recent-commits.component";
import { LearnByDoingComponent } from "../learn-by-doing/learn-by-doing.component";
import { EducationComponent } from "../education/education.component";

@Component({
    selector: "app-home",
    imports: [
        RecentCommitsComponent,
        LearnByDoingComponent,
        EducationComponent,
    ],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
