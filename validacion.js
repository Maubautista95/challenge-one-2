// Haz tu validación en JavaScript aquí

var elementosFormulario = document.querySelectorAll("[data-form-input]");
var labelsFormulario = document.querySelectorAll("label");
var colorLabelOriginal = "grey";

const quitarPlaceHolder = (event) => {
  event.target.setAttribute("placeholder", "");
};

const mostrarLabel = (event) => {
  labelsFormulario.forEach((label) => {
    if (label.getAttribute("for") === event.target.id) {
      label.style.display = "block";
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


elementosFormulario.forEach(function(elemento) {
  elemento.addEventListener("focus", quitarPlaceHolder);
  elemento.addEventListener("click", mostrarLabel);
  elemento.addEventListener("focus", mostrarLabel);
  elemento.addEventListener("focus", colorLabel);
});

