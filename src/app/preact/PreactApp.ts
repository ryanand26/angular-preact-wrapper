import { html, Component } from "htm/preact";
import { EventContextProvider } from "./EventContext";
import ExampleComponent from "./ExampleComponent";

// respond to changes from outside the component?
//// - expose update event?
//// - try to avoid forceUpdate
// output changes from inside this component?
//// - demonstrate callback
//// - demonstrate events via dom element

class PreactApp extends Component {
  render(props) {
    return html`<${EventContextProvider}>
      <h1>Preact: ${props.name}</h1>
      <${ExampleComponent} name=${props.name} />
    </${EventContextProvider}>`;
  }
}

export { PreactApp };
