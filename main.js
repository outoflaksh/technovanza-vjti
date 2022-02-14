const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-up");
const zoomout = document.querySelector(".cta");

const fadeOptions = {
  threshold: 0.75,
};

const slideOptions = {
  threshold: 0,
};

const fadeObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
  });
}, fadeOptions);

const slideObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("set");
  });
}, slideOptions);

const zoomObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
    });
  },
  { threshold: 0.4 }
);

faders.forEach((text) => {
  fadeObserver.observe(text);
});

sliders.forEach((text) => {
  slideObserver.observe(text);
});

zoomObserver.observe(zoomout);
