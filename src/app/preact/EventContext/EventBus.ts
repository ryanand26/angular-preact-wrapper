/**
 * Source: https://css-tricks.com/lets-create-a-lightweight-native-event-bus-in-javascript/
 */
class EventBus<DetailType = any> {
  private eventTarget: EventTarget;
  constructor(domElement) {
    this.eventTarget = domElement;
  }
  destroy() {
    this.eventTarget = null;
  }
  on(type: string, listener: (event: CustomEvent<DetailType>) => void) {
    this.eventTarget.addEventListener(type, listener);
  }
  once(type: string, listener: (event: CustomEvent<DetailType>) => void) {
    this.eventTarget.addEventListener(type, listener, { once: true });
  }
  off(type: string, listener: (event: CustomEvent<DetailType>) => void) {
    this.eventTarget.removeEventListener(type, listener);
  }
  emit(type: string, detail?: DetailType) {
    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

export { EventBus };
