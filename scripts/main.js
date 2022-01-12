window.addEventListener("load", function () {

  ///////////////// CANCION DE FONDO /////////////////
  const cancion = document.getElementById("cancion");
  const btnAudio = document.querySelector(".btnAudio");

  btnAudio.addEventListener("click", function () {
    if (btnAudio.classList.contains("mute")) {
      btnAudio.innerHTML = '<i class="fas fa-volume-up"></i>';
      btnAudio.classList.remove("mute");
      cancion.play();
    }
    else{
      btnAudio.innerHTML = '<i class="fas fa-volume-mute"></i>';
      btnAudio.classList.add("mute");
      cancion.pause();
    }
  });
  ////////////////////////////////////////////////////


  ///////////////// BARRA NAVEGACION /////////////////
  const btnMenu = document.querySelector("#btnMenu");
  const menu = document.querySelector(".navMenu");

  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
  });
  ////////////////////////////////////////////////////

  ////////////////// SLIDER IMAGENES /////////////////
  var imagenes = new Array(
    ["./img/galeria/1.webp"],
    ["./img/galeria/2.webp"],
    ["./img/galeria/3.webp"],
    ["./img/galeria/4.webp"],
    ["./img/galeria/5.webp"],
    ["./img/galeria/6.webp"],
    ["./img/galeria/7.webp"],
    ["./img/galeria/8.webp"],
    ["./img/galeria/9.webp"],
    ["./img/galeria/10.webp"],
    ["./img/galeria/11.webp"]
  );
  var contador = 0;

  function cambiarImagenes() {
    contador++;
    const foto = document.getElementById("imagen");
    foto.style.backgroundImage = `url(${imagenes[contador % imagenes.length]})`;
  }

  cambiarImagenes();

  setInterval(cambiarImagenes, 3000);
  ////////////////////////////////////////////////////

  ///////////////// CUENTA REGRESIVA /////////////////

  const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `<p>${t.remainDays}<span>Días</span></p>
      <p>${t.remainHours}<span>Horas</span></p>
      <p>${t.remainMinutes}<span>Minutos</span></p>
      <p>${t.remainSeconds}<span>Segundos</span></p>`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = `<p>${finalMessage}</p>`;
      }
  
    }, 1000)
  };
  
  countdown('Mar 12 2022 20:30:00 GMT-0300', 'reloj', '0 días restantes');
  ////////////////////////////////////////////////////



  /////////////// BTN DATOS BANCARIOS ////////////////
  const btnDatosBancarios = document.querySelector(".btnDatosBancarios");
  const contDatosBancarios = document.querySelector(".contDatosBancarios");

  btnDatosBancarios.addEventListener("click", function () {
    contDatosBancarios.classList.toggle("oculto");
  });
  ////////////////////////////////////////////////////


});
