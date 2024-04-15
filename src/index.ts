type ComponentOptions = {
  selector: string;
};

//Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called ");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("Inserting into DOM");
    };
  };
}

// function Component(constructor: Function) {
//   console.log("Component decorator called ");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () => {
//     console.log("Inserting into DOM");
//   };
// }

function Pipe(constructor: Function) {
  console.log("Pipe decorator called ");
  constructor.prototype.pipe = true;
}

@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}
