window.addEventListener("load", function () {
    ////////////////// SLIDER IMAGENES /////////////////
    var imagenes = new Array(
      ["./img/galeriaOlivia/1.webp"],
      ["./img/galeriaOlivia/2.webp"],
      ["./img/galeriaOlivia/3.webp"],
      ["./img/galeriaOlivia/4.webp"],
      ["./img/galeriaOlivia/5.webp"],
      ["./img/galeriaOlivia/6.webp"],
      ["./img/galeriaOlivia/7.webp"],
      ["./img/galeriaOlivia/8.webp"]
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
  
  countdown('Jun 19 2022 16:00:00 GMT-0300', 'reloj', '0 días restantes');
  ////////////////////////////////////////////////////
  });
  