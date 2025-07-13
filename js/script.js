// nav 스크롤 이벤트 스크립트 
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      const logo = document.querySelector(".logo img");
      const links = document.querySelectorAll(".nav-links a");

      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        logo.src = "./img/logo_black.png";
        links.forEach(link => link.style.color = "#000");
      } else {
        nav.classList.remove("scrolled");
        logo.src = "./img/logo_wh.png";
        links.forEach(link => link.style.color = "#fff");
      }
    });