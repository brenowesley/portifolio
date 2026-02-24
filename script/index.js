 // 📝 Frases que vão aparecer digitando
    const frases = [
    "Hello World! 🌎",
    "Meu nome é Breno Wesley.",
    "Estudo programação há pouco tempo,",
    "mas sonho em ser Dev Fullstack! 🚀"
    ];

  const localTexto = document.getElementById("maquina-escrever");
  const foto = document.getElementById("foto-hacker"); // Pega a foto certa
  
  let linha = 0;
  let letra = 0;

  function digitar() {
    if (linha < frases.length) {
      if (letra < frases[linha].length) {
        // Digita letra por letra
        localTexto.innerHTML += frases[linha].charAt(letra);
        letra++;
        setTimeout(digitar, 45); // ⏱️ VELOCIDADE: 40 milissegundos por letra
      } else {
        // Quebra a linha quando a frase acaba
        localTexto.innerHTML += "<br>";
        linha++;
        letra = 0;
        setTimeout(digitar, 700); // ⏱️ PAUSA: 700ms antes da próxima frase
      }
    } else {
      // 🚀 Terminou de digitar tudo? MOSTRA A FOTO!
      foto.classList.add("mostrar-foto");
    }
  }

  // Espera 1 segundo após o site carregar e começa a digitar!
  setTimeout(digitar, 1000);