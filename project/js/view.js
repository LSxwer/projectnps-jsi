const view = {}
view.setActiveScreen = (screenName) =>{
    switch(screenName){
        case `mainscreen` :
            document.getElementById("app").innerHTML = components.mainscreen
            break;
            
        case `loginscreen` :
            document.getElementById("app").innerHTML = components.loginScreen;

            document.getElementById("redirect-to-register").addEventListener("click", () => {
                view.setActiveScreen("registerScreen");
            });

            const loginForm = document.getElementById("login-form")
            loginForm.addEventListener("submit", (event) => {
                // ngan sk 
                event.preventDefault();
                const data  ={
                email : loginForm.email.value.trim(), 
                password : loginForm.password.value.trim()
                }
                controller.login(data)

            })

            break;
    }
    
}