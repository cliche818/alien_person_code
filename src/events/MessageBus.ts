import Event from "./Event";
import Game from "../Game";

export default class MessageBus {
  private subscriberList: Game[];
  private eventBufferList: Event[];

  constructor() {
    this.subscriberList = [];
    this.eventBufferList = [];
  }

  public addSubscriber(game: Game): void {
    this.subscriberList.push(game);
  }

  public publish(event: Event): void {
    this.subscriberList.forEach((subscriber: Game) => {
      subscriber.run(event.value);
    });
  }

  public bufferEvent(event: Event): void {
    if (event.value === "c") {
      this.clearBufferedEvents();
      this.subscriberList.forEach((subscriber: Game) => {
        subscriber.cancelCurrentEvent();
      });
    } else {
      this.eventBufferList.push(event);
    }
  }

  public flushBufferedEvents(): void {
    this.eventBufferList.forEach((event: Event) => {
      this.publish(event);
    });

    this.eventBufferList = [];
  }

  public clearBufferedEvents(): void {
    this.eventBufferList = [];
  }

  public flushOneBufferedEvent(): void {
    const event = this.eventBufferList.pop();
    if (event) {
      this.publish(event);
    }
  }
}
