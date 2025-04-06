import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const newsSlider = new Swiper(".news__slider", {
  slidesPerView: "auto",
  modules: [Navigation],
  loop: true,
  navigation: {
    prevEl: ".news__slider-prev",
    nextEl: ".news__slider-next",
  },
});

export default newsSlider;
