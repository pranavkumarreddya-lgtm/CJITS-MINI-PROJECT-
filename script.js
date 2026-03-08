function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-code").innerText = code;
}

// Page load avvagane captcha chupinchali
window.onload = generateCaptcha;

function handleLogin() {
    const name = document.getElementById("username").value;
    const input = document.getElementById("captcha-input").value.toUpperCase();
    const code = document.getElementById("captcha-code").innerText;

    if (name.trim() === "") {
        alert("Please enter your name! 👤");
        return;
    }

    if (input === code) {
        // Success: Start Animation
        document.getElementById("login-form").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("login-form").style.display = "none";
            document.querySelector(".left-door").classList.add("open-left");
            document.querySelector(".right-door").classList.add("open-right");
            document.getElementById("person").classList.add("enter-person");
        }, 500);

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 3000);
    } else {
        alert("❌ Wrong Captcha! Try again.");
        generateCaptcha();
        document.getElementById("captcha-input").value = "";
    }
}
