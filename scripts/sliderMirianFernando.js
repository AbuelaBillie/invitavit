window.addEventListener("load", function () {
    //////////////////// SLIDER IMAGENES ////////////////
    var imagenes = new Array(
      ["./img/galeriaMirianFernando/1.webp"],
      ["./img/galeriaMirianFernando/2.webp"],
      ["./img/galeriaMirianFernando/3.webp"],
      ["./img/galeriaMirianFernando/4.webp"],
      ["./img/galeriaMirianFernando/5.webp"]
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
  
    const getRemainingTime = (deadline) => {
      let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
        remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime,
      };
    };
  
    const countdown = (deadline, elem, finalMessage) => {
      const el = document.getElementById(elem);
  
      const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        el.innerHTML = `<p>${t.remainDays}<span>Días</span></p>
        <p>${t.remainHours}<span>Horas</span></p>
        <p>${t.remainMinutes}<span>Minutos</span></p>
        <p>${t.remainSeconds}<span>Segundos</span></p>`;
  
        if (t.remainTime <= 1) {
          clearInterval(timerUpdate);
          el.innerHTML = `<p>${finalMessage}</p>`;
        }
      }, 1000);
    };
  
    countdown("Jul 03 2022 12:30:00 GMT-0300", "reloj", "0 días restantes");
    ////////////////////////////////////////////////////
  
    ///////////////// CONFIRMACION WSP /////////////////
    const menuComida = document.getElementById("menuComida");
    const btnWsp = document.querySelector(".btnWhatsapp");

    const invitados = document.getElementById("cant_invitados");
    const cant_invitados = invitados.innerHTML.slice(1,3);
    console.log(cant_invitados);

    menuComida.addEventListener("change", function () {
      let opcionSeleccionada = "";
      switch (menuComida.selectedIndex) {
        case 0: opcionSeleccionada = " clásico"; 
          break;
        case 1: opcionSeleccionada = " vegetariano"; 
          break;
        case 2: opcionSeleccionada = " celíaco"; 
          break;
        case 3: opcionSeleccionada = " vegano"; 
          break;
        default: opcionSeleccionada = "clásico";
          break;
      }
      btnWsp.addEventListener("click", function () {
        location.href = `https://wa.me/541166407847/?text=Hola,+confirmo+la+asistencia+con+menú+${opcionSeleccionada}+somos+${cant_invitados}`;
      });
    });
    btnWsp.addEventListener("click", function () {
      location.href = `https://wa.me/541166407847/?text=Hola,+confirmo+mi+asistencia+con+menú+clásico+somos+${cant_invitados}`;
    });
  
    ////////////////////////////////////////////////////
  });
  