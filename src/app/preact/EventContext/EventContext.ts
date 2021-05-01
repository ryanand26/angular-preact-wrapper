import { createContext } from "preact";
import { html, Component } from "htm/preact";

const DEFAULT_STATE = {
  domElement: null,
};

const EventContext = createContext(DEFAULT_STATE.domElement);

class EventContextProvider extends Component {
  state = DEFAULT_STATE;

  set = async (domElement) => {
    this.setState(() => {
      domElement;
    });
  };

  render() {
    return html`<${EventContext.Provider}
        value=${{
          ...this.state,
          set: this.set,
        }}
      >
        ${this.props.children}
      </${EventContext.Provider}>
    `;
  }
}

export { EventContextProvider };
export default EventContext;
