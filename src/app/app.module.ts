import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VoterComponent } from "./voter.component";
import { VoteTakerComponent } from "./votetaker.component";

@NgModule({
  declarations: [AppComponent, VoterComponent, VoteTakerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
