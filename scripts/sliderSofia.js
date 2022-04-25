window.addEventListener("load", function () {
    ////////////////// SLIDER IMAGENES /////////////////
    var imagenes = new Array(
      ["./img/galeriaBrisa/1.webp"],
      ["./img/galeriaBrisa/2.webp"],
      ["./img/galeriaBrisa/3.webp"],
      ["./img/galeriaBrisa/4.webp"],
      ["./img/galeriaBrisa/5.webp"],
      ["./img/galeriaBrisa/6.webp"],
      ["./img/galeriaBrisa/7.webp"],
      ["./img/galeriaBrisa/8.webp"],
      ["./img/galeriaBrisa/9.webp"],
      ["./img/galeriaBrisa/10.webp"]
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
  
  countdown('Nov 20 2022 21:00:00 GMT-0300', 'reloj', '0 días restantes');
  ////////////////////////////////////////////////////
  });
  