/* =========================
   BOTÃO SURPRESA
========================== */
function mostrarSurpresa() {
  const surpresa = document.getElementById("surpresa");

  if (surpresa.style.display === "block") {
    surpresa.style.display = "none";
  } else {
    surpresa.style.display = "block";
    setTimeout(() => {
      surpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }
}

/* =========================
   CORAÇÕES FLUTUANTES
========================== */
function criarCoracao() {
  const container = document.getElementById("hearts");
  const heart = document.createElement("div");

  heart.classList.add("heart");

  const emojis = ["❤️", "💕", "💗", "💖", "💘"];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (6 + Math.random() * 7) + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}

/* =========================
   FOTOS FLUTUANTES
========================== */
function criarFotoFlutuante() {
  const container = document.getElementById("hearts");
  const foto = document.createElement("img");

  foto.classList.add("floating-photo");
  foto.src = "Foto_nossa.jpeg";
  foto.alt = "";
  foto.setAttribute("aria-hidden", "true");

  foto.style.left = Math.random() * 92 + "vw";
  foto.style.animationDuration = (10 + Math.random() * 8) + "s";

  foto.style.setProperty("--rotacao-inicial", (-12 + Math.random() * 24) + "deg");
  foto.style.setProperty("--rotacao-meio", (-8 + Math.random() * 16) + "deg");
  foto.style.setProperty("--rotacao-final", (-15 + Math.random() * 30) + "deg");

  foto.style.setProperty("--movimento", (-35 + Math.random() * 70) + "px");
  foto.style.setProperty("--movimento-final", (-70 + Math.random() * 140) + "px");
  foto.style.setProperty("--opacidade", (0.28 + Math.random() * 0.28));

  container.appendChild(foto);

  setTimeout(() => {
    foto.remove();
  }, 19000);
}

/* =========================
   INTERVALOS AUTOMÁTICOS
========================== */
const intervalo = window.innerWidth <= 600 ? 900 : 500;
setInterval(criarCoracao, intervalo);

const intervaloFotos = window.innerWidth <= 600 ? 5000 : 3500;
setTimeout(criarFotoFlutuante, 1800);
setInterval(criarFotoFlutuante, intervaloFotos);
