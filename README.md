# AngularWrapper

Proof of concept covering how to comunicate with a Preact component via Angular.

Does not use JSX compilation so as to not interferre with the Angular setup as this is single repository

## Done

- Output changes from inside the Preact component
  - demonstrate callback
  - demonstrate events via dom element
  - See /src/app/voter.component.ts

## TODO

- respond to changes from outside the component?
  - expose update event?
  - try to avoid forceUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` (or `npm start`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
