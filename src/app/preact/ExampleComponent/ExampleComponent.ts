import { html } from "htm/preact";
import { useContext } from "preact/hooks";
import { EVENTS } from "../domain";
import EventContext from "../EventContext";

interface IProps {
  name: string;
  onClick: (agreed: boolean) => void;
}

const ExampleComponent = ({ name, onClick }) => {
  const { emit } = useContext(EventContext);

  // Sample event param
  const agreed = false;

  return html`<p>
    Preact, ${name}
    <button
      onClick=${() => {
        onClick(agreed);
      }}
    >
      Click handler
    </button>
    <button
      onClick=${() => {
        emit(EVENTS.SAMPLE, agreed);
      }}
    >
      Emit event
    </button>
  </p>`;
};

export { ExampleComponent };
