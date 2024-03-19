// import "../css/style-dreams.css";

// media
const $logo_white = document.querySelector(".article__logo_white");
const $logo_black = document.querySelector(".article__logo_black");
const $art_button = document.querySelector(".article__button");
const $circle_ctn = document.querySelector(".article__text-circle-ctn");
const $square_ctn = document.querySelector(".article__text-square-ctn");
const $dreams_ctn = document.querySelector(".article-dreams__content");

// media watches
const $dre = document.querySelector(".media__dre");
const $ams = document.querySelector(".media__ams");

// $art_button.addEventListener("click", (e) => {
//   $dre.classList.replace("is-animated", "is-animated-out");
//   $dre.classList.replace("is-animated-out", "is-animated");
//   $ams.classList.toggle("is-animated");
//   $dreams_ctn.classList.toggle("is-animated");
//   $circle_ctn.classList.toggle("is-animated");
//   $square_ctn.classList.toggle("is-animated");
// });

$dre.addEventListener("mouseenter", () => {
  if ($circle_ctn.classList.contains("is-animated")) {
    $circle_ctn.classList.replace("is-animated", "is-animated-out");
  } else if ($circle_ctn.classList.contains("is-animated-out")) {
    $circle_ctn.classList.replace("is-animated-out", "is-animated");
  } else {
    $circle_ctn.classList.add("is-animated");
  }
});

$dre.addEventListener("mouseleave", () => {});

$ams.addEventListener("mouseenter", () => {
  if ($square_ctn.classList.contains("is-animated")) {
    $square_ctn.classList.replace("is-animated", "is-animated-out");
  } else if ($square_ctn.classList.contains("is-animated-out")) {
    $square_ctn.classList.replace("is-animated-out", "is-animated");
  } else {
    $square_ctn.classList.add("is-animated");
  }
});

let clickCounter = 0;

const animateDreams = () => {
  // clickCounter++;
  // if (clickCounter % 2 !== 0) {
  //   console.log(clickCounter);
  //   $circle_ctn.style.display = "none";
  // }
  if ($dreams_ctn.classList.contains("is-animated")) {
    $circle_ctn.classList.replace("is-animated", "is-animated-out");
    $square_ctn.classList.replace("is-animated", "is-animated-out");
    $dreams_ctn.classList.replace("is-animated", "is-animated-out");
  } else if ($dreams_ctn.classList.contains("is-animated-out")) {
    $dreams_ctn.classList.replace("is-animated-out", "is-animated");
  } else {
    $dreams_ctn.classList.add("is-animated");
  }

  $dre.classList.toggle("is-animated");
  $ams.classList.toggle("is-animated");
};

$art_button.addEventListener("click", animateDreams);
