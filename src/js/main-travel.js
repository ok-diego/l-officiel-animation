// import "../css/style-travel.css";

// media
const $logo_white = document.querySelector(".article__logo_white");
const $logo_black = document.querySelector(".article__logo_black");
const $info = document.querySelector(".article__info");
const $credits = document.querySelector(".article__credits");

// media travel
const $travel = document.querySelector(".media__travel");
const $amp = document.querySelector(".media__amp");
const $gourmet = document.querySelector(".media__gourmet");

// $logo_black.addEventListener("click", (e) => {
//   $travel.classList.replace("is-animated", "is-animated-out");
//   $travel.classList.replace("is-animated-out", "is-animated");
//   $gourmet.classList.toggle("is-animated-red");
//   $info.classList.toggle("is-animated");
//   $credits.classList.toggle("is-animated");
// });

const animateTravel = () => {
  console.log("hellooo");
  if ($travel.classList.contains("is-animated")) {
    $travel.classList.replace("is-animated", "is-animated-out");
  } else if ($travel.classList.contains("is-animated-out")) {
    $travel.classList.replace("is-animated-out", "is-animated");
  } else {
    $travel.classList.add("is-animated");
  }
  $info.classList.toggle("is-animated");
  $credits.classList.toggle("is-animated");
  $gourmet.classList.toggle("is-animated");
  $amp.classList.toggle("is-animated");
};

$logo_black.addEventListener("click", animateTravel);
