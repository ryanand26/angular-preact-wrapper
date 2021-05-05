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
    <button (click)="vote(true)">Agree</button>
    <button (click)="vote(false)">Disagree</button>
  `,
})
export class VoterComponent implements AfterViewInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  @ViewChild("preactRoot", { static: false }) preactRoot;

  didVote = false;
  preactInstance = null;

  ngAfterViewInit() {
    // ALL the following should only happen once and cleanup if it's unmounted
    // not sure how to do this in Angular

    initPreact(this.preactRoot.nativeElement, {
      name: this.name,
      onRef: (preactInstance) => {
        this.preactInstance = preactInstance;
      },
      getProps: () => this.getPreactProps(),
    });

    // Example of how to listen for events outbound from preact
    // Note: events could saftly be prevented from propagating here
    this.preactRoot.nativeElement.addEventListener(EVENTS.SAMPLE, (event) => {
      this.voted.emit(event.detail);
    });
  }

  /**
   * Return the current props for this component
   * Prevents us being locked into a particulr instance of an object
   * @returns object of props to pass to Preact
   */
  getPreactProps() {
    return {
      didVote: this.didVote,
      // Note: this would create a new instance of the function each time, be careful.
      onClick: (agreed) => {
        this.voted.emit(agreed);
      },
    };
  }

  /**
   * Cause the Preact app to update from the current state of props provided by getPreactProps
   */
  updatePreact() {
    this.preactInstance.forceUpdate();
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;

    this.updatePreact();
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
