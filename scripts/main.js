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
    ["./img/galeria/1.jpg"],
    ["./img/galeria/2.jpg"],
    ["./img/galeria/3.jpg"]
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
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Jan 17 2022 00:00:00 GMT-0300', 'reloj', '¡Ya empezó!');
  ////////////////////////////////////////////////////
});
