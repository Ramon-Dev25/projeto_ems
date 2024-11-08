function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Usuário registrado com sucesso!");
        } else {
            alert("Erro ao registrar usuário: " + data.message);
        }
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}
