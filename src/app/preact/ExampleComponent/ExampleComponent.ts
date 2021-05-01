import { html } from "htm/preact";
import { useContext } from "preact/hooks";
import EventContext from "../EventContext";

const ExampleComponent = (props) => {
  const freed = useContext(EventContext);
  console.log({ freed });
  return html`<p>Preact, ${props.name}</p>`;
};

export { ExampleComponent };
