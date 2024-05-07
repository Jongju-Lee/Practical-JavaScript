const $btnNav = document.querySelectorAll(".menu span");
const $contentPage = document.querySelectorAll("section .content");

let contentTop = [];

$contentPage.forEach((elm) => {
  contentTop.push(elm.offsetTop);
});

$btnNav.forEach((elm, idx) => {
  elm.addEventListener("click", function () {
    window.scroll({
      top: contentTop[idx],
      behavior: "smooth",
    });
  });
});
