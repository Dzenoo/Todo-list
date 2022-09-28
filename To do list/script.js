function addFunc() {
  let input = document.querySelector("input").value;
  let menu = document.querySelector(".added");

  if (input === "") {
    alert("You must type something!!!");
  } else {
    menu.innerHTML += `<li>${input}
                        <button onclick="removeFunc()">X</button></li>
                       `;
  }
}

function removeFunc() {
  let item = document.querySelector(".added li");

  item.remove();
}
