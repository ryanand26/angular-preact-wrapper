import { html, render } from "htm/preact";
import { PreactApp } from "./PreactApp";

const NOOP = () => null;

function init(domElement, options) {
  const { name, onRef = NOOP, getProps } = options;

  if (!domElement) {
    throw `DOM element not provided for ${name}`;
  }

  // Render the PreactApp component into the DOM
  // https://preactjs.com/guide/v8/api-reference/#-preact.render-
  render(
    html`
      <${PreactApp}
        eventBusElement=${domElement}
        name=${name}
        getProps=${getProps}
        ref=${(childComponent) => {
          onRef(childComponent);
        }}
      />
    `,
    domElement
  );
}

export default init;
