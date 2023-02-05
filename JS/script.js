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
