function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  
  const inputEl = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");
  
  
  function createBoxes(amount) {
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      box.style.display = "inline-block";
  
      boxes.appendChild(box);
      size += 10;
    }
  }
  
  function destroyBoxes() {
      boxes.innerHTML = "";
      inputEl.value = "";
  }
  
  
  createBtn.addEventListener("click", () => {
    const amount = parseInt(inputEl.value);
    if (!isNaN(amount) && amount > 0 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert("Lütfen 1 ile 100 arasında bir sayı girin.");
    }
  });
  
  destroyBtn.addEventListener("click", destroyBoxes);