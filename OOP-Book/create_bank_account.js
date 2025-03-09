class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(this.#balance);    
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(this.#balance);
    
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError('Insufficient funds');
    } else {
        this.#balance -= amount;
    }  
    console.log(typeof this.#balance);
  }
}


let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds