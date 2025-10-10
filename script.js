document.addEventListener("DOMContentLoaded", () => {
  const nameText = "RAVI VERMA"; 
  const nameElement = document.getElementById("name");
  let i = 0;

  function typeWriter() {
    if (i < nameText.length) {
      nameElement.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 200);
    }
  }

  typeWriter();
});

  
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".profile");
  if (photo) {
    setTimeout(() => {
      photo.classList.add("visible");
    }, 500); 
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("blurText");

  setTimeout(() => {
    text.classList.add("clear");
  }, 20);
});



