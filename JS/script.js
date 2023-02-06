// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");
// console.log("javascript".includes("java"));

function ativarLink(link) {
  const href = link.href;
  const url = window.location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITEMS DO ORÇAMENTO
const parametros = new URLSearchParams(location.search); // location.search puxa apenas os parâmetros do url

function chamarItem(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
  console.log(parametro);
  // console.log(element);
}

parametros.forEach(chamarItem);

// console.log(parametros);

// PERGUNTAS FREQUÊNTES
const perguntas = document.querySelectorAll(".perguntas button");

function mostrarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  if (ativa) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

function ativarPergunta(pergunta) {
  pergunta.addEventListener("click", mostrarPergunta);
}

perguntas.forEach(ativarPergunta);
