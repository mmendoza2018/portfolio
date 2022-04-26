const scrollX = (selector) => {
  const scrollContainer = document.querySelector(selector);
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
};
export default scrollX;