function generateCaptcha() {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    const display = document.getElementById('captcha-code');
    if(display) display.innerText = code;
}

function handleLogin() {
    const user = document.getElementById('username').value;
    const input = document.getElementById('captcha-input').value;
    const code = document.getElementById('captcha-code').innerText;

    if (user.trim() !== "" && input === code) {
        // Door Animation Trigger
        document.querySelector('.left-door').classList.add('open-left');
        document.querySelector('.right-door').classList.add('open-right');
        document.getElementById('person').classList.add('enter-person');
        
        // Hide Login Form
        const form = document.getElementById('login-form');
        if(form) form.style.opacity = '0';

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2500);
    } else {
        alert("Invalid Access Code or Username!");
        generateCaptcha();
    }
}

// Initial Load
window.onload = generateCaptcha;
