var clickBtn = document.querySelector('.read_more');
clickBtn.addEventListener("click", function() {
  var elements = document.querySelectorAll(".hidden");
  elements.forEach(function(element) {
    element.classList.remove("hidden");
  });
})
