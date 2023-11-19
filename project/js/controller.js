const controller = {};

controller.register = (data) =>{
    // kiem tra loi 
    if(data.firstName == ""){
        document.getElementById("first-name-error").innerText = `Please input first name`

    }
    else {
        document.getElementById("first-name-error").innerText = ``
    }

    if(data.lastName == ""){
        document.getElementById("last-name-error").innerText = `Please input last name`   
    }
    else {
        document.getElementById("last-name-error").innerText = ``
    }
    if(data.email == ""){
        document.getElementById("email-error").innerText = `pwease input email`
    }
    else { 
        document.getElementById("email-error").innerText = ``
    }
    if(data.password == ""){
        document.getElementById("password-error").innerText = `please input password`
    }
    else {
        document.getElementById("password-error").innerText = ``
    }
    if(data.confirmPassword == ""){
        document.getElementById("confirm-password-error").innerText = `please input confirm password `
    }
    else {
        document.getElementById("confirm-password-error").innerText = ``
    }
    data.password !== data.confirmPassword?
    document.getElementById("confirm-password-error").innerText = `confirm password is incorrect `:
    document.getElementById("confirm-password-error").innerText = ``


    //tao user 
    if(data.firstName !== ""  &&data.lastName !== "" &&
    data.email !== "" && data.password !== "" && data.confirmPassword !== "" && data.password == data.confirmPassword){
        model.register(data)

    } 
}  
controller.login = (dataLogin) => {
    if(dataLogin.email === ""){
        document.getElementById("email-error").innerText = "VUI LONG NhAP MK"
    }
    else{
        document.getElementById("email-error").innerText = ""
    }
    if(dataLogin.password === ""){
        document.getElementById("password-error").innerText = "pls input patwot"
    }
    else{
        document.getElementById("password-error").innerText = ""
    }

    if(dataLogin.email !== "" && dataLogin.password !== ""){
        model.login(dataLogin)              
    }

}
