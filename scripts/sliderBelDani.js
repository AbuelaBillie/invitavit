window.addEventListener("load", function () {
    ////////////////// SLIDER IMAGENES /////////////////
    var imagenes = new Array(
      ["./img/galeriaBelDani/1.webp"],
      ["./img/galeriaBelDani/2.webp"],
      ["./img/galeriaBelDani/3.webp"],
      ["./img/galeriaBelDani/4.webp"],
      ["./img/galeriaBelDani/5.webp"],
      ["./img/galeriaBelDani/6.webp"],
      ["./img/galeriaBelDani/7.webp"],
      ["./img/galeriaBelDani/8.webp"],
      ["./img/galeriaBelDani/9.webp"],
      ["./img/galeriaBelDani/10.webp"],
      ["./img/galeriaBelDani/11.webp"]
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
  
  countdown('Oct 23 2022 13:00:00 GMT-0300', 'reloj', '0 días restantes');
  ////////////////////////////////////////////////////
  });
  