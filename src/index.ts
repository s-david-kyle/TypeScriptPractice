interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  name: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");
result.data?.name;
