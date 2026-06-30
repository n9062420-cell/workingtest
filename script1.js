function login() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (!result) return;

    if (email === "" || pass === "") {
        result.innerHTML = "⚠ Please fill all fields";
        result.style.color = "orange";
        return;
    }

    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    if (email === correctEmail && pass === correctPassword) {
        result.innerHTML = "✅ ACCESS GRANTED";
        result.style.color = "lime";
        setTimeout(() => {
            window.location.href = "page1.html";
        }, 1000);
    } else {
        result.innerHTML = "❌ ACCESS DENIED";
        result.style.color = "red";
    }
}
