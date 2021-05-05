# AngularWrapper

Proof of concept covering how to comunicate with a Preact component via Angular.

Does not use JSX compilation so as to not interferre with the Angular setup as this is single repository

Note: Alternate ideas include using a shared store. E.g. Redux

## Done

- Output changes from inside the Preact component
  - demonstrate callback
  - demonstrate events via dom element
  - See /src/app/voter.component.ts
- respond to changes from outside the component
  - expose update event
  - use a function to retrieve current prop state from Angular without having to worry about the instance of that object changing

## Not done

- make use of useReducer internally to handle prop state without redux?

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` (or `npm start`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
