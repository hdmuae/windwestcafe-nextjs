var clickBtn = document.querySelector('.read_more');
clickBtn.addEventListener("click", function() {
  if(clickBtn.classList.contains('hidden_text')){
    var elements = document.querySelectorAll(".hidden");
    elements.forEach(function(element) {
      element.classList.remove("hidden");
      element.classList.add("visible");
    });
    clickBtn.innerHTML = 'Show Less';
    clickBtn.classList.remove("hidden_text");
    clickBtn.classList.add("visible_text");
  }else {
    var elements = document.querySelectorAll(".visible");
    elements.forEach(function(element) {
      element.classList.remove("visible");
      element.classList.add("hidden");
    });
    clickBtn.innerHTML = 'Read More';
    clickBtn.classList.remove("visible_text");
    clickBtn.classList.add("hidden_text");
  }
})
