import "../css/style-red.css";
// import "..//css/style-star.css";
// import "..//css/style-travel.css";
// import "..//css/style-watch.css";

// media red
const $logo_white = document.querySelector(".article__logo_white");
const $logo_black = document.querySelector(".article__logo_black");
const $see = document.querySelector(".media__i_see");
const $red = document.querySelector(".media__red");
const $info = document.querySelector(".article__info");
const $credits = document.querySelector(".article__credits");

// media star
const $star = document.querySelector(".media__star");
const $gazing = document.querySelector(".media__gazing");

// $logo_white.addEventListener("click", (e) => {
//   $see.classList.replace("is-animated", "is-animated-out");
//   $see.classList.replace("is-animated-out", "is-animated");
//   $red.classList.toggle("is-animated-red");
//   $info.classList.toggle("is-animated");
//   $credits.classList.toggle("is-animated");
// });

const animateRed = () => {
  if ($see.classList.contains("is-animated")) {
    $see.classList.replace("is-animated", "is-animated-out");
  } else if ($see.classList.contains("is-animated-out")) {
    $see.classList.replace("is-animated-out", "is-animated");
  } else {
    $see.classList.add("is-animated");
  }
  if ($red.classList.contains("is-animated-red")) {
    $red.classList.replace("is-animated-red", "is-animated-out");
  } else if ($red.classList.contains("is-animated-out")) {
    $red.classList.replace("is-animated-out", "is-animated-red");
  } else {
    $red.classList.add("is-animated-red");
  }
  $info.classList.toggle("is-animated");
  $credits.classList.toggle("is-animated");
};

// const animateStar = () => {
//   if ($star.classList.contains("is-animated")) {
//     $star.classList.replace("is-animated", "is-animated-out");
//   } else if ($star.classList.contains("is-animated-out")) {
//     $star.classList.replace("is-animated-out", "is-animated");
//   } else {
//     $star.classList.add("is-animated");
//   }
//   $info.classList.toggle("is-animated");
//   $credits.classList.toggle("is-animated");
//   $gazing.classList.toggle("is-animated");
// };

$logo_white.addEventListener("click", animateRed);
// $logo_white.addEventListener("click", animateStar);
