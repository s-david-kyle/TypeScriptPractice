type User = {
  name: string;
  age: number;
  occupation?: string;
};

type Pet = {
  motivation: "Fly" | "Swim";
};

let bird: Pet = { motivation: "Fly" };
let fish: Pet = { motivation: "Swim" };

type daysOfTheWeek = {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
};
