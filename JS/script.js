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
