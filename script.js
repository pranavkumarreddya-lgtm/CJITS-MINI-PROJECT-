function generateCaptcha() {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    document.getElementById('captcha-code').innerText = code;
}

function handleLogin() {
    const user = document.getElementById('username').value;
    const input = document.getElementById('captcha-input').value;
    const code = document.getElementById('captcha-code').innerText;

    if (user && input === code) {
        document.querySelector('.left-door').classList.add('open-left');
        document.querySelector('.right-door').classList.add('open-right');
        document.getElementById('person').classList.add('enter-person');
        document.getElementById('login-form').style.opacity = '0';
        setTimeout(() => { window.location.href = 'dashboard.html'; }, 2500);
    } else {
        alert("Invalid Details or Captcha!");
        generateCaptcha();
    }
}
window.onload = generateCaptcha;
