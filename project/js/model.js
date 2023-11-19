const model = {};
model.currentUser = undefined;
model.register =  async (data) => {
    try{
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        firebase.auth().currentUser.updateProfile({
            displayName : data.firstName + "" + data.lastName
        })

        //gui email ve de sat thuc
        firebase.auth().currentUser.sendEmailVerification();
        alert("EMAIL DA DUOC BEO XAC NHAN , CHECK EMAIL DE ANH BEL NAU COM")

        //hien thi giao dien trang dang nhap 
        view.setActiveScreen("loginScreen")

    }
    catch(err){
        console.log(err)
        alert(err.message)

    }
        
}
model.login = async (dataLogin) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email,dataLogin.password)
        if(response.user.email.Verified == false){
            alert("Please Verify yout email")
        }
        else{
            model.currentUser = {
                displayName : response.user.displayName,
                email : response.user.email
            }   

            view.setActiveScreen("mainscreen")
        }

    }
    catch(err){
        console.log(err)
        if (err.code = `auth/user-not-found` || err.code == "auth/invalid-email"){
            document.getElementById("email-error").innerText = `${err.message}`
        }
        else if (err.code = "auth/wrong-password"){
            document.getElementById("password-error").innerText = `${err.message}`
        }
    }
}