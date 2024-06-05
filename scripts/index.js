const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  let valorDelEmail = document.getElementById("email-input").value;
  console.log(valorDelEmail);

  // 2. Obtenemos los datos ingresados en el input de password
  let valorDelPass = document.getElementById("password-input").value;
  console.log(valorDelPass);

  // 3. Obtenemos el valor del input radio
  let valorDelRadio = document.getElementsByName("legalAge");
  let valorDelRadioId;
  let valorDelRadioValue;

  valorDelRadio.forEach(element => {
    console.log(`Id del imput: ${element.id}`);
    console.log(`Elemento seleccionado: ${element.checked}`);

    if (element.checked) {
      valorDelRadioId = element.id;
      valorDelRadioValue = element.checked;
    }
  });

  // 4. Obtenemos el valor del input checkbox
  let valorDelImput = document.getElementById("tyc-input");
  console.log(`Elemento: ${valorDelImput.value}`);
  console.log(`Seleccionado: ${valorDelImput.checked}`);

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  valorDelRadio.forEach(element => {
    while (element.id === "age_no" && element.checked) { alert("Debes ser mayor de edad para registrarte en el sitio");
      break;
    }
  });
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  while (!valorDelImput.checked) { alert("Debes aceptar los TyCs para registrarte en el sitio");
  break;    
  }

  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  if (valorDelEmail && valorDelPass && valorDelImput.value && valorDelImput.checked && valorDelRadioId === "age_yes") {
  
  let informaciónBrindadaUsuario = {
    email: valorDelEmail, 
    contrasenia: valorDelPass, 
    valorDelRadioId: valorDelRadioId,
    valorDelRadioValue: valorDelRadioValue,
    valorDelInputChecked: valorDelImput.checked
  };
    
    console.log(informaciónBrindadaUsuario);
}

});


