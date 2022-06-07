var clickBtn = document.querySelector('.read_more');
clickBtn.addEventListener("click", function() {
  if(clickBtn.classList.contains('hidden_text')){
    var elements = document.querySelectorAll(".chidden");
    elements.forEach(function(element) {
      element.classList.remove("chidden");
      element.classList.add("cvisible");
    });
    clickBtn.innerHTML = 'Show Less';
    clickBtn.classList.remove("hidden_text");
    clickBtn.classList.add("visible_text");
  }else {
    var elements = document.querySelectorAll(".cvisible");
    elements.forEach(function(element) {
      element.classList.remove("cvisible");
      element.classList.add("chidden");
    });
    clickBtn.innerHTML = 'Read More';
    clickBtn.classList.remove("visible_text");
    clickBtn.classList.add("hidden_text");
  }
})
