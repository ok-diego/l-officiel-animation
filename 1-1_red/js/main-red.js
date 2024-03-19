// import "../css/style-red.css";

// media red
const $logo_white = document.querySelector(".article__logo_white");
const $logo_black = document.querySelector(".article__logo_black");
const $info = document.querySelector(".article__info");
const $credits = document.querySelector(".article__credits");

// media red
const $see = document.querySelector(".media__i_see");
const $red = document.querySelector(".media__red");

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

$logo_white.addEventListener("click", animateRed);
