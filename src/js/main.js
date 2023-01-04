import "../scss/style.scss";
import { Header } from "./modules/_header";
import { Slider } from "./modules/_slider";

$(window).on("load", function () {
  Header();
  Slider();
});
