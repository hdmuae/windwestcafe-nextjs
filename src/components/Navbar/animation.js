const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");

const Options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry.target);
  });
}, Options);

observer.observe(header);
