// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
  address: {
    street: string;
    city: string;
  };
}

interface ICloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICloudCalendar {
  constructor(
    public name: string,
    public address: { street: string; city: string }
  ) {}

  addEvent() {
    console.log("GoogleCalendar addEvent");
  }

  removeEvent() {
    console.log("GoogleCalendar removeEvent");
  }

  sync() {
    console.log("GoogleCalendar sync");
  }
}
