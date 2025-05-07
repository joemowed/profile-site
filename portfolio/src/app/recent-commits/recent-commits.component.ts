import { Component } from "@angular/core";
import { GithubCommitCardComponent } from "../github-commit-card/github-commit-card.component";

@Component({
    selector: "app-recent-commits",
    imports: [GithubCommitCardComponent],
    templateUrl: "./recent-commits.component.html",
    styleUrl: "./recent-commits.component.css",
})
export class RecentCommitsComponent {
    ngAfterViewInit() {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target); // Optional: stop observing after fade-in
                    }
                });
            },
            {
                threshold: 0.1, // Adjust threshold as needed
            },
        );

        elements.forEach((element) => {
            observer.observe(element);
        });
    }
}
