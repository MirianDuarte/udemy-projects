function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlach = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');



    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlach.style.display = 'none';
        fieldPassword.style.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlach.style.display = 'block';
        fieldPassword.style.type = 'password';
    }
}

document.getElementById("btn-login").addEventListener('click', function(e){
    e.preventDefault();
    alert("logado!");
});