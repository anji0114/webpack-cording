import Swiper, { Autoplay } from "swiper";
Swiper.use([Autoplay]);

export const Slider = () => {
  const slider = new Swiper(".js-swiper", {
    slidesPerView: 1,
    speed: 700,
    loop: true,
    spaceBetween: 30,

    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};
