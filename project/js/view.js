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
            document.getElementById("music").addEventListener("click", () => {
              view.setActiveScreen("music");
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
                document.getElementById("music").addEventListener("click", () => {
                  view.setActiveScreen("music");
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
          document.getElementById("music").addEventListener("click", () => {
            view.setActiveScreen("music");
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
          case `rmain`:
            document.getElementById("app").innerHTML = components.rmain
            document.getElementById("music").addEventListener("click", () => {
              view.setActiveScreen("music");
            })
            document.getElementById("sign-out").addEventListener("click",() =>{
              firebase.auth().signOut().then(function() {
                alert("successfully signed out");
                view.setActiveScreen("mainscreen")
              }).catch(function(error) {
                console.error("Error signing out:", error);
              });
            })
            break;
            case `music`:
              firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  document.getElementById("app").innerHTML = components.music
                } else {
                  alert("Please sign in first")
                  view.setActiveScreen("loginScreen")
                  event.preventDefault()
                }
              });
              
              break;
        
    }
            
    
}


