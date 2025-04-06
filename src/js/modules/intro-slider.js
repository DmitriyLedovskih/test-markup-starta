import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const introSlider = new Swiper(".intro__slider", {
  slidesPerView: 4,
  spaceBetween: 36,
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".intro__slider-pagination",
    bulletClass: "intro__slider-bullet",
    bulletActiveClass: "intro__slider-bullet--active",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    490: {
      slidesPerView: 2,
    },
    876: {
      slidesPerView: 4,
      spaceBetween: 36,
    },
  },
});

export default introSlider;
