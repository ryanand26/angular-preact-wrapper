import { html, Component } from "htm/preact";
import { EventContextProvider } from "./EventContext";
import ExampleComponent from "./ExampleComponent";

/**
 * Preact app example
 * Does not use JSX compilation so as to not interferre with the Angular setup as this is single repository
 */

// TODO
// respond to changes from outside the component?
//// - expose update event?
//// - try to avoid forceUpdate
// output changes from inside this component?
//// - demonstrate callback
//// - demonstrate events via dom element

class PreactApp extends Component {
  render(props) {
    const { eventBusElement, name, options } = props;
    const { onClick } = options;

    return html`<${EventContextProvider} eventBusElement=${eventBusElement}>
      <h1>Preact: ${name}</h1>
      <${ExampleComponent} name=${name} onClick=${onClick} />
    </${EventContextProvider}>`;
  }
}

export { PreactApp };
