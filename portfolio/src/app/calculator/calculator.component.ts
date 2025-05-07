import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-calculator",
    imports: [],
    templateUrl: "./calculator.component.html",
    styleUrl: "./calculator.component.css",
})
export class CalculatorComponent {
    public is_mobile: boolean = false;
    public trifecta_figure_num: number = 1;
    public bodge_wire_figure_num: number = 2;
    ngOnInit() {
        if (window.screen.width <= 1024) {
            this.is_mobile = true;
            this.trifecta_figure_num = 2;
            this.bodge_wire_figure_num = 1;
        }
    }
}
