function mostrarContato() {
    alert("Email: fabrinnysuporte@email.com");
  }
  
  function alternarTema() {
    const temaAtual = document.documentElement.getAttribute("data-tema");
    if (temaAtual === "dark") {
      document.documentElement.setAttribute("data-tema", "light");
    } else {
      document.documentElement.setAttribute("data-tema", "dark");
    }
  }
  