titleLetters = document.getElementById("rotating-letters-container");
letters = titleLetters.textContent;
titleLetters.innerHTML = "";
for (i = 0; i < letters.length; i++) {
  if (letters.charAt(i) === " ") {
    titleLetters.innerHTML += `<span class="rotating-letter">&nbsp</span>`;
  } else {
    titleLetters.innerHTML += `<span class="rotating-letter">${letters.charAt(
      i
    )}</span>`;
  }
}

rLetters = document.getElementsByClassName("rotating-letter");

for (i = 0; i < rLetters.length; i++) {
  item = rLetters[i];
  item.addEventListener("mouseover", (e) => {
    e.target.classList.add("rotating-letter-animate");
  });
  item.addEventListener("animationend", (e) => {
    e.target.classList.remove("rotating-letter-animate");
  });
}
