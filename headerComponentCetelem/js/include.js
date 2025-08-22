document.addEventListener("DOMContentLoaded", function () {
  fetch("headerComponentCetelem.html")
    .then((response) => {
      if (!response.ok) throw new Error("No se pudo cargar el componente");
      return response.text();
    })
    .then((data) => {
      const targetContainer = document.getElementById("headerComponentCetelem");
      if (!targetContainer) throw new Error("No se encontró el contenedor");
      targetContainer.innerHTML = data;

      // Ejecutar scripts externos o inline
      const scripts = targetContainer.querySelectorAll("script");
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
          newScript.onload = () => {
            oldScript.remove();
          };
          document.body.appendChild(newScript);
        } else {
          newScript.textContent = oldScript.textContent;
          document.body.appendChild(newScript);
          oldScript.remove();
        }
      });

      // Inicializar el menú después de cargar el contenido
      initializeMenu();
    })
    .catch((error) => {
      console.error("Error al cargar el componente:", error);
    });
});

function initializeMenu() {
  const btnMobile = document.querySelector(".menu-mobile-toggle");
  const menuHeader = document.querySelector(".header-item-left");
  const megaSubMobile = document.querySelectorAll(".menu-sub-has-children_mob");
  const backMobile = document.querySelector(".back");

  if (btnMobile && menuHeader && megaSubMobile.length > 0 && backMobile) {
    btnMobile.addEventListener("click", (e) => {
      menuHeader.classList.toggle("active");
      btnMobile.classList.toggle("active");
      megaSubMobile.forEach((item) => {
        item.classList.remove("active");
      });
    });

    backMobile.addEventListener("click", (e) => {
      megaSubMobile.forEach((item) => {
        item.classList.remove("active");
      });
    });
  } else {
    console.error("Uno o más elementos no se encontraron en el DOM.");
  }
}
