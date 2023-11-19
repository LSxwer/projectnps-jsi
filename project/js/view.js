const view = {}
view.setActiveScreen = (screenName) =>{
    switch(screenName){
        case `mainscreen` :
            document.getElementById("app").innerHTML = components.mainscreen;
            document.getElementById("redirect-to-login").addEventListener("click", () => {
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("redirect-to-home").addEventListener("click", () =>{
                view.setActiveScreen("mainscreen");
            })  
            document.getElementById("redirect-to-register").addEventListener("click", () =>{
              view.setActiveScreen("registerScreen");
            })
            break;
        case `loginScreen`:
                 document.getElementById("app").innerHTML = components.loginScreen;
                 document.getElementById("redirect-to-login").addEventListener("click", () => {
                  view.setActiveScreen("loginScreen");
              })
                document.getElementById("redirect-to-home").addEventListener("click", () =>{
                  view.setActiveScreen("mainscreen");
                })
                document.getElementById("redirect-to-register").addEventListener("click", () =>{
                  view.setActiveScreen("registerScreen");
                })
          
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
        case `registerScreen`:
          document.getElementById("app").innerHTML = components.registerScreen
          document.getElementById("redirect-to-login").addEventListener("click", () => {
            view.setActiveScreen("loginScreen");
          })
          document.getElementById("redirect-to-home").addEventListener("click", () =>{
            view.setActiveScreen("mainscreen");
          })
          document.getElementById("redirect-to-register").addEventListener("click", () =>{
            view.setActiveScreen("registerScreen");
          })
          const registerForm = document.getElementById("register-form")
          registerForm.addEventListener("submit", (event) =>{
            event.preventDefault()
            const data = {
                firstName : registerForm.firstName.value.trim(),
                lastName : registerForm.lastName.value.trim(),
                email : registerForm.email.value.trim(),
                password : registerForm.password.value.trim(),
                confirmPassword : registerForm.confirmPassword.value.trim()
        
              }
              controller.register(data)
          })
          break;
    }
            
    
}