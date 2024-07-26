let userData = [];

class User {
    constructor(fullName, email, age, password) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
    }

    creatAccountUser() {
        // Check name conditions
        let checkNameLenght = this.fullName.split('').filter(char => char !== ' ').length; // Remove spaces and check length
        if (checkNameLenght >= 5) {
            console.log("The name is valid.");
        } else {
            console.log("The name is not valid. It should be at least 5 characters long.");
            return;
        }
        // & adding a regex patent to check invalid characters 

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
        let emailLower = this.email.toLowerCase();
        let exist = userData.find(element => element.email === emailLower);

        if (!exist) {
            let user = {
                userName: this.fullName,
                email: emailLower,
                password: this.password
            };
            userData.push(user);
            console.log(`${this.email} is added succefully`)
        } else {
            console.log("An account with this email already exists.")
        }
        // check age 
        // if (this.age.includes(' ')) {
        //     console.log("The age address is not valid. It should not contain spaces.");
        //     return;
        // }
        if (!/^\d+$/.test(this.age)) {
            console.log("The age is not valid. It should contain only numbers.")
            return
        }
        if (this.age.length === 0 || this.age.length >= 3) {
            console.log("The age is not valid. It should be between 1 and 2 characters long.")
            return;
        }else{
            console.log("Age added succefuly")
        }
        // ^^ checking password 
        let specialCharPattern = /[@#\-\+\*\/]/;

        if (!specialCharPattern.test(this.password)) {
            console.log("The password is not valid. It must contain at least one special character (@, #, -, +, *, /).");
            return;
        }else{
            console.log("the passeword is valid ");
        }
        if (this.password.length < 7) {
            console.log("The password is not valid. It should be at least 7 characters long.");
            return;
        }
        // Password confirmation
        let passwordConfirmed = prompt("Confirm Your password")

        if (this.password !== passwordConfirmed) {
            console.log("Password confirmation does not match.");
            return;
        } 
    }
   loginUser(){
     let emailLower = this.email.toLowerCase()
     let user = userData.find(element => element.email === emailLower)
     if (!user) {
        console.log("The email address does not exist.");
       }else{
        console.log("this email is correct");
       }
       if (user.password = this.password) {
        console.log("Login successful.");
        
       } else {
        console.log("The password is incorrect.");
       }

    }
    changingPassword(){
        let user = userData.find(user => user.email === email);
        if (user) {
            let oldPassword = prompt("Enter your current password: ");
            if (user.password === oldPassword) {
                let newPassword = prompt("Enter your new password: ");
                user.password = newPassword;
                console.log("Password successfully changed.");
            } else {
                console.log("Current password is incorrect.");
            }
        } else {
            console.log("No account found with this email.");
        }
    
    }


}
const displayMenu=() =>{
    console.log("1. Register");
    console.log("2. Login");
    console.log("3. Change Password");
    console.log("4. Exit");
    let choice = prompt("Choose an option: ");
    return choice;
    
}

const register=()=> {
    let fullName = prompt("Enter your full name: ");
    let email = prompt("Enter your email: ");
    let age = prompt("Enter your age: ");
    let password = prompt("Enter your password: ");
    let user = new User(fullName, email, age, password);
    user.creatAccountUser()
}

const login=() => {
    let email = prompt("Enter your email: ");
    let password = prompt("Enter your password: ");
    let user = new User('', email, '', password); 
    user.loginUser();
}

const changePassword=() =>{
    let email = prompt("Enter your email: ");
    let user = new User('', email, '', ''); 
    user.changingPassword();
}

const main = () => {
    const choice = displayMenu(); 
    switch (choice) { 
        case '1':
            register()
            break;
        case '2':
            login()
            break;
        case '3':
            changePassword()
            break;
        case '4':
            console.log("Exiting...")
            break;
        default:
            console.log("Invalid choice. Please try again.")
    }
    console.log("Goodbye!")
}




main();



