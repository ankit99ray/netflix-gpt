export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid)return "Email address is not valid";
    if(!isPasswordValid)return "Password is not valid";
    return null;
}

export const checkPasswordMatch = (password, rePassword) => {
    if(password !== rePassword)return "Does not match with new password";
    return null;
}