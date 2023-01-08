function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(0);

const itemNode = document.querySelector(".item");
const placeHoldersNode = document.querySelectorAll(".placeholder");

itemNode.addEventListener("dragstart", dragStart);
itemNode.addEventListener("dragend", dragEnd);

for (const placeholder of placeHoldersNode) {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragEnd(event) {
  event.target.className = "item";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("hovered");
}

function dragLeave(event) {
  event.target.classList.remove("hovered");
}

function dragDrop(event) {
  event.target.classList.remove("hovered");

  event.target.append(itemNode);
}