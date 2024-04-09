class ArratUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

let numbers = ArratUtils.wrapInArray("123");
