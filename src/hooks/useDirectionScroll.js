import React from "react";
import { useState } from "react";

const useDirectionScroll = () => {
  const [direction, setDirection] = useState("top");
  var scrollPos = 0;
  const d = document;
  window.addEventListener("scroll", function () {
    let valor =
      d.body.getBoundingClientRect().top > scrollPos ? "arriva" : "abajo";
    scrollPos = d.body.getBoundingClientRect().top;
    if (valor === "arriva") {
      setDirection("top");
    } else {
      if (window.scrollY > 0) {
        setDirection("top");
        /*   d.getElementById("footerMenu").classList.add("animate__fadeOutDown");
      d.getElementById("footerMenu").classList.remove("animate__fadeInUp");
      setTimeout(() => {
          d.getElementById("asideMenu").classList.add("d-none",);
      d.getElementById("asideMenu").classList.remove("d-block");
      }, 100); */
      }
    }
  });
  return 
};
export default useDirectionScroll;
