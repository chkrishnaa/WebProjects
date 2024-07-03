const swiper = new Swiper(".slide-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    swiper.slideNext();
  } else if (event.key === "ArrowLeft") {
    swiper.slidePrev();
  }
});

const cardItems = document.querySelectorAll(".card-items");
const socialMediaIcons = document.querySelector(".social-media-icons");
const messageButton = document.querySelector(".message-button");

cardItems.forEach((item) => {
  const message = document.createElement("button");
  message.setAttribute("class", "message-button");
  message.innerHTML = messageButton.innerHTML;

  const newIcons = document.createElement("div");
  newIcons.setAttribute("class", "social-media-icons");
  newIcons.innerHTML = socialMediaIcons.innerHTML;

  item.appendChild(message);
  item.appendChild(newIcons);
});
