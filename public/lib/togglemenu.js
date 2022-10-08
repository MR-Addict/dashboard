// menu toggle
document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".main").classList.toggle("active");
  document.querySelectorAll(".chart").forEach((element) => {
    element.style.width = "100%";
  });
});
