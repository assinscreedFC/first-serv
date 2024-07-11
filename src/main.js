import confetti from "canvas-confetti";
import "./style/style.css";
import "./foot";
import  {seev} from "./seev.js"
import "https://kit.fontawesome.com/4c536a6bd5.js";
import "./style/index.css";


seev();
document.querySelector("img").src = "../photo/ico.png";
const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  window.location.href = "./menu.html";
});
// import './page/anis.svg'
confetti();
