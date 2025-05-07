import { Component } from "@angular/core";
import { RecentCommitsComponent } from "../recent-commits/recent-commits.component";
import { LearnByDoingComponent } from "../learn-by-doing/learn-by-doing.component";
import { EducationComponent } from "../education/education.component";
import { FooterComponent } from "../footer/footer.component";
import { PersonalLinksComponent } from "../personal-links/personal-links.component";
import { SubscriberCounterComponent } from "../subscriber-counter/subscriber-counter.component";

@Component({
    selector: "app-home",
    imports: [
        RecentCommitsComponent,
        LearnByDoingComponent,
        EducationComponent,
        FooterComponent,
        PersonalLinksComponent,
        SubscriberCounterComponent,
    ],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {}
