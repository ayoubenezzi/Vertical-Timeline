const items = document.querySelectorAll(".timeline li");

document.addEventListener("DOMContentLoaded", () => {
  isElInViewport;
  callbackfunc;
  window.addEventListener("load", callbackfunc);
  window.addEventListener("resize", callbackfunc);
  window.addEventListener("scroll", callbackfunc);
});

function isElInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackfunc() {
  for (let i = 0; i < items.length; i++) {
    if (isElInViewport(items[i])) {
      items[i].classList.add("in-view");
    } else {
      items[i].classList.remove("in-view");
    }
  }
}
