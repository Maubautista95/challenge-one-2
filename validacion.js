// Haz tu validación en JavaScript aquí

var elementosFormulario = document.querySelectorAll("[data-form-input]");
var labelsFormulario = document.querySelectorAll("label");
var colorLabelOriginal = "grey";
let validezDelCampo  = document.querySelectorAll("[data-form-input]").validity;
let spanField = document.querySelectorAll(`[data-att-error-msg]`)

const quitarPlaceHolder = (event) => {
  event.target.setAttribute("placeholder", "");
};

const mostrarLabel = (event) => {
  labelsFormulario.forEach((label) => {
    if (label.getAttribute("for") === event.target.id) {
      label.style.visibility = "visible";
    }
  });
};

const restaurarColorLabel = () => {
    labelsFormulario.forEach((label) => {
      label.style.color = colorLabelOriginal; // Restablecer el color original del label
    });
  }
  
  const colorLabel = (event) => {
    restaurarColorLabel(); // Restaura el color de todos los labels antes de cambiar el color del label seleccionado
    labelsFormulario.forEach((label) => {
      if (label.getAttribute("for") === event.target.id) {
        colorLabelOriginal = label.style.color; // Almacenar el color original del label
        label.style.color = "#3480e5"; // Cambiar el color del label seleccionado
      }
    });
  }

  const notValid = (event) => {

    /*Redefinimos spanField como el elemento siguiente del elemento siguiente del elemento que disparó nuestro evento, como en nuestro
    html va input, luego va label y luego span, entonces, el span se verá activado con esto al añadirle la clase que le hace visible.*/

    const spanField = event.target.nextElementSibling.nextElementSibling;

    if (event.target.validity.valid === false) {
      event.target.classList.add("not__valid");
      spanField.classList.add("show-error-msg");
    } else {
      event.target.classList.remove("not__valid");
      spanField.classList.remove("show-error-msg")
    }
  };

  elementosFormulario.forEach(function(elemento) {
  elemento.addEventListener("focus", quitarPlaceHolder);
  elemento.addEventListener("click", mostrarLabel);
  elemento.addEventListener("focus", mostrarLabel);
  elemento.addEventListener("focus", colorLabel);
  elemento.addEventListener("blur", notValid)
  
});

