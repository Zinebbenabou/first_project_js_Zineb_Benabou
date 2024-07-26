let userData = [];

class User {
    constructor(fullName, email, age, password) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
    }

    creatAccountUser(userName, email, password) {
        // Check name conditions
        let checkNameLenght = this.fullName.split('').filter(char => char !== ' ').length; // Remove spaces and check length
        if (checkNameLenght >= 5) {
            console.log("The name is valid.");
        } else {
            console.log("The name is not valid. It should be at least 5 characters long.");
            return;
        }

        let invalidChars = /[0-9@#\$%^&\*\(\)_\+\-=\{\}\[\]\\|;:'",<>\./?`~]/;
        if (invalidChars.test(this.fullName)) {
            console.log(`${this.fullName} contains invalid characters.`);
            return;
        }else{
            console.log(`${this.fullName} is added succefully`);
        }

        // Check if the email contains spaces
        if (this.email.includes(' ')) {
            console.log("The email address is not valid. It should not contain spaces.");
            return;
        }

        // Check email length
        let checkEmailLenght = this.email.split('').filter(char => char !== ' ').length; // Remove spaces and check length
        if (checkEmailLenght >= 10) {
            console.log("This Email is valid.");
        } else {
            console.log("The email is not valid. It should be at least 10 characters long.");
            return;
        }

        // Check email contains exactly one @
        let countChar = this.email.split("@").length - 1;
        if (countChar !== 1) {
            console.log("The email address is not valid. It must contain exactly one @ character.");
            return;
        }

        // Check email conditions
        let emailLower = email.toLowerCase();
        let exist = userData.find(element => element.email === emailLower);

        if (!exist) {
            let user = {
                userName: userName,
                email: emailLower,
                password: password
            };
            userData.push(user);
            console.log(`${this.email} is added succefully`);
        } else {
            console.log("An account with this email already exists.");
        }
        // check password conditions 
        
    }
}

let user1 = new User("Hamza Marzouk", "il@domain.com", 25, "rhghqe");
user1.creatAccountUser("hamza_m", "il@domain.com", "rhghqe");
