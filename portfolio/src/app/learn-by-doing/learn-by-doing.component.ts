import { Component, AfterViewInit } from "@angular/core";

@Component({
    selector: "app-learn-by-doing",
    imports: [],
    templateUrl: "./learn-by-doing.component.html",
    styleUrl: "./learn-by-doing.component.css",
})
export class LearnByDoingComponent {
    ngAfterViewInit() {
        const elements = document.querySelectorAll(".fade-in");
        console.log(elements);

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
