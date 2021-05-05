import { Component } from "@angular/core";

@Component({
  selector: "app-vote-taker",
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)"
    >
    </app-voter>
  `,
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ["VoterNameValue"];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}

/*
Votetaker example: https://angular.io/guide/component-interaction
*/
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
