import { Component } from "@angular/core";

import { HEROES } from "./hero-parent.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  heroes = HEROES;
  title = "angular-wrapper";
}
