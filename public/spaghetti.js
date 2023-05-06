let name = document.getElementById("name");

fetch("http://localhost:3000/prezident", {
  method: "GET",
})
  .then((res) => res.json())
  .then((res) => {
    let prezident = res.text;
    name.textContent = prezident;
  });
