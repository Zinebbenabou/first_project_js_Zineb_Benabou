let userData = []; // Array to store user data
let currentUser = null; // Variable to keep track of the currently logged-in user

class User {
    constructor(fullName, email, age, password, balance) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
        this.balance = balance;
    }

    // Method to create a new account
    createAccountUser() {
        // Check name conditions
        let checkNameLength = this.fullName.split('').filter(char => char !== ' ').length;
        if (checkNameLength < 5) {
            console.log("The name is not valid. It should be at least 5 characters long.");
            return;
        }
        let invalidChars = /[0-9@#\$%^&\*\(\)_\+\-=\{\}\[\]\\|;:'",<>\./?`~]/;
        if (invalidChars.test(this.fullName)) {
            console.log(`${this.fullName} contains invalid characters.`);
            return;
        }
        // Check if the email contains spaces
        if (this.email.includes(' ')) {
            console.log("The email address is not valid. It should not contain spaces.");
            return;
        }
        // Check email length
        let checkEmailLength = this.email.split('').filter(char => char !== ' ').length;
        if (checkEmailLength < 10) {
            console.log("The email is not valid. It should be at least 10 characters long.");
            return;
        }
        // Check email contains exactly one @
        let countChar = this.email.split("@").length - 1;
        if (countChar !== 1) {
            console.log("The email address is not valid. It must contain exactly one @ character.");
            return;
        }
        let emailLower = this.email.toLowerCase();
        let exist = userData.find(element => element.email === emailLower);
        if (exist) {
            console.log("An account with this email already exists.");
            return;
        }
        let user = {
            userName: this.fullName,
            email: emailLower,
            password: this.password,
            balance: this.balance
        };
        userData.push(user);
        console.log(`${this.email} is added successfully.`);
    }

    loginUser() {
        let emailLower = this.email.toLowerCase();
        let user = userData.find(element => element.email === emailLower);
        if (!user) {
            console.log("The email address does not exist.");
            return false;
        }
        if (user.password === this.password) {
            currentUser = user;
            console.log("Login successful.");
            return true;
        } else {
            console.log("The password is incorrect.");
            return false;
        }
    }

    changePassword() {
        if (currentUser) {
            let oldPassword = prompt("Enter your current password: ");
            if (currentUser.password === oldPassword) {
                let newPassword = prompt("Enter your new password: ");
                let specialCharPattern = /[@#\-\+\*\/]/;
                if (!specialCharPattern.test(newPassword) || newPassword.length < 7) {
                    console.log("The new password must be at least 7 characters long and contain at least one special character (@, #, -, +, *, /).");
                } else {
                    currentUser.password = newPassword;
                    console.log("Password successfully changed.");
                }
            } else {
                console.log("Current password is incorrect.");
            }
        } else {
            console.log("No user is currently logged in.");
        }
    }

    
    logout() {
        if (currentUser) {
            currentUser = null;
            console.log("You have been logged out.");
        } else {
            console.log("No user is currently logged in.");
        }
    }

    
    withdraw() {
        if (currentUser) {
            let amount = parseFloat(prompt("Enter the amount to withdraw: "));
            
            if (amount > currentUser.balance) {
                console.log("Insufficient funds. Your balance is $" + currentUser.balance);
                return;
            }
            currentUser.balance -= amount;
            console.log(`Successfully withdrew $${amount}. New balance: $${currentUser.balance}`);
        } else {
            console.log("You must be logged in to withdraw money.");
        }
    }
}

class Bank {
    constructor(user) {
        this.user = user
    }

    
    displayMenu() {
        console.log("1. Register");
        console.log("2. Login");
        console.log("3. Change Password");
        console.log("4. Withdraw Money");
        console.log("5. Logout");
        console.log("6. Exit");
        let choice = prompt("Choose an option: ");
        return choice;
    }

    
    register() {
        let fullName = prompt("Enter your full name: ");
        let email = prompt("Enter your email: ");
        let age = prompt("Enter your age: ");
        let password = prompt("Enter your password: ");
        let user = new User(fullName, email, age, password);
        user.createAccountUser();
    }

    
    login() {
        let email = prompt("Enter your email: ");
        let password = prompt("Enter your password: ");
        let user = new User('', email, '', password); 
        if (user.loginUser()) {
            this.user = user;
            console.log("You are now logged in.");
        }
    }

    
    changePassword() {
        let user = new User('', '', '', ''); 
        user.changePassword();
    }

    
    withdraw() {
        let user = new User('', '', '', ''); 
        user.withdraw();
    }

   
    logout() {
        let user = new User('', '', '', ''); 
        user.logout();
    }

    
    main() {
        let choice;
       
            choice = this.displayMenu();
            switch (choice) {
                case '1':
                    this.register();
                    break;
                case '2':
                    this.login();
                    break;
                case '3':
                    this.changePassword();
                    break;
                case '4':
                    this.withdraw();
                    break;
                case '5':
                    this.logout();
                    break;
                case '6':
                    console.log("Good By");
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
       
    }
}


const bank = new Bank();
bank.main();
