const stars = document.getElementsByClassName("star-rating");

const onStarClick = (e) => {
  console.log(e.target.getAttribute, e.target.getAttribute("data-id"));
  const starId = e.target.getAttribute("data-id");

  [...stars].forEach((element) => {
    const currId = element.getAttribute("data-id");
    if (currId <= starId) {
      element.innerHTML = "&#9733;";
    } else {
      element.innerHTML = "&#9734;";
    }
  });
};

[...stars].forEach((element) => {
  element.addEventListener("click", onStarClick);
});
