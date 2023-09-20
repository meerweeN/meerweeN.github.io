const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

new TypeIt("#creative", {
  breakLines: false,
  speed: 150,
  cursor: true,
  loop: true,
})
  .type("CREATIVE")
  .pause(1200)
  .empty()
  .type("FRONT-END")
  .pause(1200)
  .empty()
  .go();
