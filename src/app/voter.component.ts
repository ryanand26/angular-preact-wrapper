import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import initPreact from "./preact/initialize";

@Component({
  selector: "app-voter",
  template: `
    <h4>{{ name }}</h4>
    <div #preactRoot id="{{ name }}"></div>
    <button (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `,
})
export class VoterComponent implements AfterViewInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  @ViewChild("preactRoot", {}) preactRoot;

  didVote = false;

  ngAfterViewInit() {
    initPreact(this.preactRoot.nativeElement, {
      name: this.name,
      onRef: (preactInstance) => {
        console.log({ preactInstance });
      },
      didVote: this.didVote,
      onClick: (agreed) => this.voted.emit(agreed),
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
