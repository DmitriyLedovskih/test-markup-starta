import introSlider from "./modules/intro-slider";
import newsSlider from "./modules/news-slider";
import formValidate from "./modules/form-validate";
import initMap from "./modules/map";

const init = async () => {
  introSlider.init();
  newsSlider.init();
  formValidate();
  initMap();

  document.querySelector("#current-year").textContent =
    new Date().getFullYear();

  const buttonUp = document.querySelector(".button-up");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) buttonUp.classList.add("button-up--active");
    else buttonUp.classList.remove("button-up--active");
  });
};

export default init;
