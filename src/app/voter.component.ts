import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import initPreact from "./preact/initialize";
import { EVENTS } from "./preact/domain";

@Component({
  selector: "app-voter",
  template: `
    <h4>{{ name }}</h4>
    <div #preactRoot id="{{ name }}" style="border:1px solid red"></div>
    <button (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `,
})
export class VoterComponent implements AfterViewInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  @ViewChild("preactRoot", { static: false }) preactRoot;

  didVote = false;

  ngAfterViewInit() {
    // ALL the following should only happen once and cleanup if it's unmounted
    // not sure how to do this in Angular

    initPreact(this.preactRoot.nativeElement, {
      name: this.name,
      onRef: (preactInstance) => {
        // This callback returns the preactInstance. Not sure if I want / need this yet.
        console.log({ preactInstance });
      },
      didVote: this.didVote,
      onClick: (agreed) => {
        this.voted.emit(agreed);
      },
    });

    // Example of how to listen for events outbound from preact
    // Note: events could saftly be prevented from propagating here
    this.preactRoot.nativeElement.addEventListener(EVENTS.SAMPLE, (event) => {
      this.voted.emit(event.detail);
    });
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
