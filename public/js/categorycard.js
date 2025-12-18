const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

// Tunggu hingga DOM selesai di-load
document.addEventListener('DOMContentLoaded', () => {
  const screen = document.querySelector(".screen");
  const name = document.querySelector(".name");

  // Cek apakah elemen ada
  if (!screen || !name) {
    console.error("Element .screen atau .name tidak ditemukan!");
    return;
  }

  screen.onmouseenter = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return name.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= name.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }
});