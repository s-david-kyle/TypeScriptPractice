// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface ICloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICloudCalendar {
  constructor(public name: string) {}

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
