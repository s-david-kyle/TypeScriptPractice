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
}

let account = new Account(1, "John Doe", 0);

account.deposit(100);

console.log(account instanceof Account);
