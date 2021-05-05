import { html, Component } from "htm/preact";
import { EventContextProvider } from "./EventContext";
import ExampleComponent from "./ExampleComponent";

interface IPreactAppProps<PropResponse> {
  /** HTML element used for sending events */
  eventBusElement: HTMLElement;
  name: string;
  getProps: () => PropResponse;
}

/**
 * Preact app example
 * Does not use JSX compilation so as to not interferre with the Angular setup as this is single repository
 */
class PreactApp extends Component<IPreactAppProps<any>> {
  render(props: IPreactAppProps<any>) {
    const { eventBusElement, name, getProps } = props;
    const { onClick, didVote } = getProps();

    return html`<${EventContextProvider} eventBusElement=${eventBusElement}>
      <h1>Preact: ${name}</h1>
      <p>Did vote?: ${didVote ? "True" : "False"}</p>
      <${ExampleComponent} name=${name} onClick=${onClick} />
    </${EventContextProvider}>`;
  }
}

export { PreactApp };
