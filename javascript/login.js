

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault()
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  const type = document.getElementById("select").value
  const data = {
    "email": email,
    "password": pass
  }

  if (type == "cliente") {
    axios.post("https://backend-homerservice-production.up.railway.app/usuario/login", data).then((response) => {
      if (response.data.error === true) {
        Swal.fire({
          title: 'No se encontró el usuario',
          icon: "warning",
          showConfirmButton: true
        })
      } else {
        Swal.fire({
          title: 'Ingreso exitoso',
          text: `Bienvenido a Homeservice ${response.data.data.nombre}`,
          icon: "success",
          showConfirmButton: true,
        }).then(res => {
          if (res.isConfirmed) {
            window.location.href = "/vistas/dashboard.html"
            return response.text();

          }

        })
      }

    }).catch(error => {
      console.log('error', error);
      Swal.fire({
        title: 'No se encontró el usuario',
        icon: "warning",
        showConfirmButton: true
      })
    })
  } else {
    axios.post("https://backend-homerservice-production.up.railway.app/prestador_servicio/login", data).then((response) => {
      if (response.data.error === true) {
        Swal.fire({
          title: 'No se encontró el usuario',
          icon: "warning",
          showConfirmButton: true
        })
      } else {
        Swal.fire({
          title: 'Ingreso exitoso',
          text: `Bienvenido a Homeservice ${response.data.data.nombre}`,
          icon: "success",
          showConfirmButton: true,
        }).then(res => {
          if (res.isConfirmed) {
            window.location.href = "/vistas/dashboard.html"
            return response.text();

          }

        })
      }

    }).catch(error => {
      Swal.fire({
        title: 'No se encontró el usuario',
        icon: "warning",
        showConfirmButton: true
      })
    })
  }


})
