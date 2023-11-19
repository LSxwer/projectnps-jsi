const components = {};
components.mainscreen =  `    <header>
<a href="#" class="logo">spck</a>


<ul class="navlist">
    <li id="redirect-to-home"><a href="#">Home </a></li>
    <li><a href="#">Music</a></li>
    <li><a href="#">Dev</a></li>
    <li id="redirect-to-login"><a href="#">Login</a></li>
    <li id="redirect-to-register"><a href="#">Register</a></li>
</ul>

<div class="bx bx-menu" id="menu-icon"></div>
</header>
<section class = "hero">
<div class="hero-text">
    <h5></h5>
    <h4>Rip off</h4>
    <h1>Spotify</h1>
    <p></p>
    <a href="" class="ctaa"><i class="ri-headphone-line"></i>Click here to listen</i></a>
</div>
<div class="hero-img">
    <img src="" alt="">
</div>
</section>
`

components.loginScreen = `
<header>
        <a href="#" class="logo">spck</a>
      <ul class="navlist">
        <li id="redirect-to-home"><a href="#">Home </a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Dev</a></li>
        <li id="redirect-to-login"><a href="#">Login</a></li>
        <li id="redirect-to-register"><a href="#">Register</a></li>
       </ul>
        
        <div class="bx bx-menu" id="menu-icon"></div>
        <div class="login-container">
            <div class="aside-right">
              <div class="header">
                <h3>Login</h3>
              </div>
        
              <form id="login-form">
        
                <div class="input-wrapper">
                  <i class="ri-mail-fill"></i>
                  <input type="email" name="email" placeholder="Input email ...">
                  <div class="error" id="email-error"></div>
                </div>
        
                <div class="input-wrapper">
                  <i class="ri-lock-fill"></i>
                  <input type="password" name="password" placeholder="input password ....">
                  <div class="error" id="password-error"></div>
                </div>
        
                <div class="form-action">
                  <span class="cursor" id="redirect-to-register">
                    Don't have an account? Register
                  </span>
        
                  <button class="btn" type="submit">
                    Login
                  </button>
                </div>
        
              </form>
            </div>
          </div>
    </header>`

components.registerScreen =`
<header>
<a href="#" class="logo">spck</a>
<ul class="navlist">
  <li id="redirect-to-home"><a href="#">Home </a></li>
  <li><a href="#">Music</a></li>
  <li><a href="#">Dev</a></li>
  <li id="redirect-to-login"><a href="#">Login</a></li>
  <li id="redirect-to-register"><a href="#">Register</a></li>
</ul>
<div class="register-container">
  <div class="aside-right">
    <div class="header">
      <h3></h3>
    </div>

    <form id="register-form">
      <h3>Register</h3>
      <div class="input-name-wrapper">
        <div class="input-wrapper">
          <i class="ri-user-fill"></i>
          <input type="text" name="firstName" placeholder="Input first name ...">
          <div class="error" id="first-name-error"></div>
        </div>

        <div class="input-wrapper">
          <i class="ri-user-fill"></i>
          <input type="text" name="lastName" placeholder="Input last name ...">
          <div class="error" id="last-name-error"></div>
        </div>

      </div>

      <div class="input-wrapper">
        <i class="ri-mail-fill"></i>
        <input type="email" name="email" placeholder="Input email ...">
        <div class="error" id="email-error"></div>
      </div>

      <div class="input-wrapper">
        <i class="ri-lock-fill"></i>
        <input type="password" name="password" placeholder="input password ....">
        <div class="error" id="password-error"></div>
      </div>

      <div class="input-wrapper">
        <i class="ri-lock-fill"></i>
        <input type="password" name="confirmPassword" placeholder="input confirm password ...">
        <div class="error" id="confirm-password-error"></div>
      </div>

      <div class="form-action">
        <span class="cursor" id="redirect-to-login">
          Already have an account? Login
        </span>

        <button class="btn" type="submit">
          Register
        </button>
      </div>

    </form>
  </div>
</div>
</header>`
