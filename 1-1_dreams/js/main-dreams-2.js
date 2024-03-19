// import "..//css/style-watch.css";

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

let opacityToggle = false; // Added a toggle to track the function call for opacity change

const animateDreams = () => {
  if ($dreams_ctn.classList.contains("is-animated")) {
    $dreams_ctn.classList.replace("is-animated", "is-animated-out");
    // if (opacityToggle) {
    //   // Check if function is called the second time
    //   $circle_ctn.style.opacity = "0"; // Change opacity of $circle_ctn to 0 on the second call
    //   $square_ctn.style.opacity = "0";
    // }
  } else if ($dreams_ctn.classList.contains("is-animated-out")) {
    $dreams_ctn.classList.replace("is-animated-out", "is-animated");
    $circle_ctn.style.opacity = "1"; // Reset opacity to 1 when $dreams_ctn class changes back to "is-animated"
    $square_ctn.style.opacity = "1";
  } else {
    $dreams_ctn.classList.add("is-animated");
    // $circle_ctn.style.opacity = "0"; // Initially set opacity to 0 when $dreams_ctn does not have "is-animated" or "is-animated-out" class
    // $square_ctn.style.opacity = "0";
  }

  // opacityToggle = !opacityToggle; // Toggle the flag after each call to track the next call

  $dre.classList.toggle("is-animated");
  $ams.classList.toggle("is-animated");
};

$art_button.addEventListener("click", animateDreams);
