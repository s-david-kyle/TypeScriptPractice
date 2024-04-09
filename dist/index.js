"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Deposit amount has to be greater than 0");
        this.balance += amount;
    }
}
let account = new Account(1, "John Doe", 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map