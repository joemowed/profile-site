import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
    //the home page
    {
        path: "",
        pathMatch: "full",
        component: HomeComponent,
    },

    //better readability if redirecting to home
    {
        path: "home",
        redirectTo: "",
    },

    //404 page
    {
        path: "page-not-found",
        component: PageNotFoundComponent,
        pathMatch: "full",
    },

    //404 page redirect, needs to be last arg in routes[]
    {
        path: "**",
        redirectTo: "/page-not-found",
    },
];
