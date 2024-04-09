class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit amount has to be greater than 0");

    this.balance += amount;
  }
}

let account = new Account(1, "John Doe", 0);

account.deposit(100);

console.log(account instanceof Account);
