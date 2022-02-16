//importing elements from dom
const faders = document.querySelectorAll(
  ".fade-in, .fade-in-right, .fade-in-left"
);
const sliders = document.querySelectorAll(".slide-up");
const zoomout = document.querySelector(".cta");
const rotators = document.querySelectorAll(".rotate");

// options for observers
const fadeOptions = {
  threshold: 0.75,
};

const slideOptions = {
  threshold: 0,
};

const zoomOptions = {
  threshold: 0.4,
};

const rotateOptions = {
  threshold: 0.25,
};

// defining observers
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
    entry.target.classList.add("appear");
  });
}, slideOptions);

const zoomObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
  });
}, zoomOptions);

const rotateObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
  });
}, rotateOptions);

// putting on observers
faders.forEach((text) => {
  fadeObserver.observe(text);
});

sliders.forEach((text) => {
  slideObserver.observe(text);
});

zoomObserver.observe(zoomout);

rotators.forEach((rotate) => {
  rotateObserver.observe(rotate);
});
