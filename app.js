function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const role = document.getElementById("role").value;

  if (!user || !pass) {
    alert("Completar todos los campos");
    return;
  }

  alert(`Bienvenido ${user} (${role})`);

  // FUTURO: conectar con backend
}
