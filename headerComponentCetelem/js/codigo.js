let win = this;
const url = window.location.href;
const dato = url.slice(url.lastIndexOf("/") + 1);
const part = dato.slice(0, 3);

const faqs = document.querySelector(".faqs");
const request = document.querySelector(".request");
const acceso = document.querySelector(".acceso");
const paraTi = document.querySelector(".paraTi");
const comercios = document.querySelector(".comercios");
const concesionarios = document.querySelector(".concesionarios");
const ecommerce = document.querySelector(".ecommerce");
const body = document.querySelector("body section:nth-child(2)");
window.addEventListener("resize", () => {
  inicio();
});
document.addEventListener("DOMContentLoaded", () => {
  inicio();
});
const inicio = () => {
  if (win.innerWidth > 1076) {
    if (part == "par") {
      body.style = "padding-top:128px;";
    }
  }

  if (part == "par") {
    faqs.style = "display:none";
    paraTi.classList.add("active");
  }
  if (part == "com") {
    acceso.style = "display:none";
    request.style = "display:none";
    comercios.classList.add("active");
  }
  if (part == "con") {
    acceso.style = "display:none";
    request.style = "display:none";
    concesionarios.classList.add("active");
  }
  if (part == "eco") {
    request.style = "display:none";
    ecommerce.classList.add("active");
  }
  if (win.innerWidth <= 1076) {
    const heightDevice = win.innerHeight - 128;
    document.querySelector(".menu-mega__mobile").style =
      "height:" + heightDevice + "px;";
  }
};

const btnMobile = document.querySelector(".menu-mobile-toggle");
const menuHeader = document.querySelector(".header-item-left");
const megaSubMobile = document.querySelectorAll(".menu-sub-has-children_mob");
const backMobile = document.querySelector(".back");
btnMobile.addEventListener("click", (e) => {
  menuHeader.classList.toggle("active");
  btnMobile.classList.toggle("active");
  megaSubMobile.forEach((item) => {
    item.classList.remove("active");
  });
});

megaSubMobile.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");
  });
});
const reload = () => {
  window.location.reload();
};
backMobile.addEventListener("click", (e) => {
  megaSubMobile.forEach((item) => {
    item.classList.contains("active") == true
      ? item.classList.toggle("active", "menu-sub-has-children_mob")
      : "";
  });
});

//accordion
const accordions = document.querySelectorAll(".accordion");
const openAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  content.style.maxHeight = content.scrollHeight + "px";
};
const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};
accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".accordion__intro");
  const content = accordion.querySelector(".accordion__content");
  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
