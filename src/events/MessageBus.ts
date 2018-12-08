import Event from "./Event";
import Game from "../Game";

export default class MessageBus {
  public static delayMs = 5000;

  private isDelayed: boolean;
  private eventList: Event[];
  private subscriberList: Game[];

  constructor() {
    this.isDelayed = true;
    this.eventList = [];
    this.subscriberList = [];

    setTimeout(() => {
      this.isDelayed = false;
      this.publishAllEventList();
    }, MessageBus.delayMs);
  }

  public publish(event: Event): void {
    if (this.isDelayed) {
      this.eventList.push(event);
    } else {
      this.publishEventInstantly(event);
    }
  }

  public addSubscriber(game: Game): void {
    this.subscriberList.push(game);
  }

  private publishAllEventList(): void {
    this.eventList.forEach((event: Event) => {
      this.publishEventInstantly(event);
    });
  }

  private publishEventInstantly(event: Event): void {
    this.subscriberList.forEach((subscriber: Game) => {
      subscriber.run(event.value);
    });
  }
}
