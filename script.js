const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const a = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
});
