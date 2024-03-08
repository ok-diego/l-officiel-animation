// import "..//css/style-watch.css";

// media
const $logo_white = document.querySelector(".article__logo_white");
const $logo_black = document.querySelector(".article__logo_black");
const $info = document.querySelector(".article__info");
const $credits = document.querySelector(".article__credits");

// media watches
const $watches = document.querySelector(".media__watches");
const $amp = document.querySelector(".media__amp");
const $jewellery = document.querySelector(".media__jewellery");

// $logo_black.addEventListener("click", (e) => {
//   $watches.classList.replace("is-animated", "is-animated-out");
//   $watches.classList.replace("is-animated-out", "is-animated");
//   $jewellery.classList.toggle("is-animated-red");
//   $info.classList.toggle("is-animated");
//   $credits.classList.toggle("is-animated");
// });

const animateWatches = () => {
  if ($watches.classList.contains("is-animated")) {
    $watches.classList.replace("is-animated", "is-animated-out");
  } else if ($watches.classList.contains("is-animated-out")) {
    $watches.classList.replace("is-animated-out", "is-animated");
  } else {
    $watches.classList.add("is-animated");
  }
  $info.classList.toggle("is-animated");
  $credits.classList.toggle("is-animated");
  $jewellery.classList.toggle("is-animated");
  $amp.classList.toggle("is-animated");
};

$logo_black.addEventListener("click", animateWatches);
