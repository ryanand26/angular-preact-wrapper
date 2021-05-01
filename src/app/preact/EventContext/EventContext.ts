import { createContext } from "preact";
import { html, Component } from "htm/preact";
import { EVENTS } from "../domain";
import { EventBus } from "./EventBus";

const EventContext = createContext<EventContextProvider>(null);

interface IProps {
  eventBusElement: any;
}

class EventContextProvider extends Component<IProps> {
  eventBus = null;

  componentDidMount() {
    const { eventBusElement } = this.props;
    this.eventBus = new EventBus(eventBusElement);
  }
  componentWillUnmount() {
    // remove the link to the dom element
    this.eventBus.destroy();
    this.eventBus = null;
  }

  emit = (eventName: EVENTS, eventValue) => {
    this.eventBus.emit(eventName, eventValue);
  };

  render() {
    return html`<${EventContext.Provider}
        value=${{
          ...this.state,
          emit: this.emit,
        }}
      >
        ${this.props.children}
      </${EventContext.Provider}>
    `;
  }
}

export { EventContextProvider };
export default EventContext;
