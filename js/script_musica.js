(function () {
  "use strict";

  const CONFIG = {
    noteSymbols: ["♩", "♪", "♫", "♬", "𝄞", "𝄢", "𝅘𝅥𝅮", "♭", "♯", "𝄽"],
    colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#c77dff",
      "#f4a261", "#2ec4b6", "#ff9f1c", "#a5101d", "#a8dadc"],
    minDuration: 4,    // segundos mínimos por caída
    maxDuration: 10,   // segundos máximos por caída
    minDelay: 0,    // segundos de espera antes de aparecer
    maxDelay: 3,
    minFontSize: 1.2,  // rem
    maxFontSize: 3.2,  // rem
    spawnInterval: 400,  // milisegundos entre cada nota nueva
    maxNotes: 30,   // notas simultáneas máximas en pantalla
  };

  /** Devuelve un número aleatorio entre min y max */
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  /** Elige un elemento aleatorio de un array */
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** Inyecta los estilos CSS necesarios si no existen aún */
  function injectStyles() {
    if (document.getElementById("music-notes-style")) return;

    const style = document.createElement("style");
    style.id = "music-notes-style";
    style.textContent = `
      .music-note {
        position: fixed;
        top: -60px;
        font-size: 1.8rem;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        z-index: 0;
        animation: noteFall linear forwards;
      }

      @keyframes noteFall {
        0%   { transform: translateY(0)      rotate(0deg)   scale(0.8); opacity: 0;    }
        10%  { opacity: 0.85; }
        85%  { opacity: 0.7;  }
        100% { transform: translateY(110vh)  rotate(360deg) scale(1.1); opacity: 0;    }
      }
    `;
    document.head.appendChild(style);
  }

  /** Crea y lanza una nota musical al DOM */
  function spawnNote() {
    // Límite de notas simultáneas
    const active = document.querySelectorAll(".music-note").length;
    if (active >= CONFIG.maxNotes) return;

    const note = document.createElement("span");
    note.className = "music-note";
    note.textContent = pick(CONFIG.noteSymbols);

    const duration = rand(CONFIG.minDuration, CONFIG.maxDuration);
    const delay = rand(CONFIG.minDelay, CONFIG.maxDelay);
    const fontSize = rand(CONFIG.minFontSize, CONFIG.maxFontSize);
    const leftPos = rand(0, 98);             // % horizontal
    const color = pick(CONFIG.colors);

    // Ligera oscilación horizontal durante la caída
    const drift = rand(-30, 30);              // px de desplazamiento lateral

    note.style.cssText = `
      left: ${leftPos}vw;
      font-size: ${fontSize}rem;
      color: ${color};
      text-shadow: 0 0 8px ${color}88;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      transform: translateX(${drift}px);
      filter: drop-shadow(0 2px 4px ${color}55);
    `;

    document.body.appendChild(note);

    // Eliminar el elemento del DOM cuando termina la animación
    const totalTime = (duration + delay) * 1000;
    setTimeout(() => note.remove(), totalTime + 200);
  }

  /** Arranca la animación */
  function init() {
    injectStyles();

    // Genera una nota cada N milisegundos
    setInterval(spawnNote, CONFIG.spawnInterval);

    // Genera unas pocas notas de inmediato para no ver la página vacía al inicio
    for (let i = 0; i < 8; i++) {
      setTimeout(spawnNote, i * 120);
    }
  }

  // Espera a que el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();