const boxContainer = document.querySelector('.box-container');
const toLoginButton = document.querySelector('#toLogin');
const toSignupButton = document.querySelector('#toSignup');

toSignupButton.addEventListener('click', (e) => {
  e.preventDefault();
  boxContainer.classList.add('active');
});

toLoginButton.addEventListener('click', (e) => {
  e.preventDefault();
  boxContainer.classList.remove('active');
});

document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Login com Google');
    // Aqui você pode redirecionar ou integrar o login com Google via OAuth.
  });
  
  document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('Login com Facebook');
    // Aqui você pode redirecionar ou integrar o login com Facebook via API.
  });
  
  document.getElementById('appleLogin').addEventListener('click', function() {
    alert('Login com Apple');
    // Aqui você pode redirecionar ou integrar o login com Apple via API.
  });
  
  document.getElementById('googleRegister').addEventListener('click', function() {
    alert('Registrar com Google');
    // A mesma coisa para o cadastro com o Google.
  });
  
  document.getElementById('facebookRegister').addEventListener('click', function() {
    alert('Registrar com Facebook');
    // A mesma coisa para o cadastro com o Facebook.
  });
  
  document.getElementById('appleRegister').addEventListener('click', function() {
    alert('Registrar com Apple');
    // A mesma coisa para o cadastro com a Apple.
  });
  