

// Dynamic Name Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const nameText = "RAVI VERMA"; // <-- your name
  const nameElement = document.getElementById("name");
  let i = 0;

  function typeWriter() {
    if (i < nameText.length) {
      nameElement.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 200); // typing speed
    }
  }

  typeWriter(); // start typing
});

  
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".profile");
  if (photo) {
    setTimeout(() => {
      photo.classList.add("visible");
    }, 500); // starts fading after 0.5s
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("blurText");

  // Wait 2 seconds, then make it clear
  setTimeout(() => {
    text.classList.add("clear");
  }, 20);
});



