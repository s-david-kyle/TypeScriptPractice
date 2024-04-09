"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Deposit amount has to be greater than 0");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "John Doe", 0);
account.deposit(100);
console.log(account instanceof Account);
console.log(account.balance);
//# sourceMappingURL=index.js.map