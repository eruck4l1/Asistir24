function login() {
  const user = document.getElementById("user").value;
  const role = document.getElementById("role").value;

  if (!user) {
    alert("Ingresá un usuario");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("role", role);

  if (role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

// AUTO LOGIN
(function () {
  const path = window.location.pathname;

  if (path.includes("dashboard") || path.includes("admin")) {
    const user = localStorage.getItem("user");

    if (!user) {
      window.location.href = "index.html";
    }
  }
})();
