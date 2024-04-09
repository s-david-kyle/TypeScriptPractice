class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit amount has to be greater than 0");

    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    this._balance += value;
  }
}

let account = new Account(1, "John Doe", 0);
account.balance = 100;

account.deposit(100);

console.log(account instanceof Account);

console.log(account.balance);
