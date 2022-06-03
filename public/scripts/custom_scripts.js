var readMoreBtn = document.getElementsByClassName('read_more');
readMoreBtn.onclick = function() {
  var hiddenText = document.getElementsByClassName('hidden');
  hiddenText.classList.remove("hidden");
};
