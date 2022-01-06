window.addEventListener("load", function () {
  ///////////////// BARRA NAVEGACION /////////////////
  const btnMenu = document.querySelector("#btnMenu");
  const menu = document.querySelector(".navMenu");

  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
  });
  ////////////////////////////////////////////////////

  ////////////////// SLIDER IMAGENES /////////////////
  var imagenes = new Array(
    ["../img/galeria/1.jpg"],
    ["../img/galeria/2.jpg"],
    ["../img/galeria/3.jpg"]
  );
  var contador = 0;

  function cambiarImagenes() {
    contador++;
    const foto = document.getElementById("imagen");
    foto.style.backgroundImage = `url(${imagenes[contador % imagenes.length]})`;
  }

  cambiarImagenes();

  setInterval(cambiarImagenes, 5000);
  ////////////////////////////////////////////////////
});
