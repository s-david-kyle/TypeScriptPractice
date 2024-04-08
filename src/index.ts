function reject(message: string): never {
  throw new Error(message);
}
function processEvents(): never {
  while (true) {}
}

processEvents();
console.log("hello world! 🌍");
