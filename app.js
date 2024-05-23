const form = document.querySelector(".form");
const ul = document.querySelector(".ul");

form.addEventListener("submit", toDo);

function toDo(e) {
  e.preventDefault();

  let input = document.querySelector(".input");
  let inputText = input.value;

  let li = document.createElement("li");
  li.className = "li";
  let textNode = document.createTextNode(inputText);
  li.appendChild(textNode);

  // Создаем кнопку удалить

  let deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Удалить"));
  deleteBtn.className = "btn";
  deleteBtn.dataset.action = "delete";

  li.appendChild(deleteBtn);

  ul.prepend(li);

  input.value = "";
}

// Производим удаление

ul.addEventListener("click", removeLi);

function removeLi(e) {
  e.target.hasAttribute("data-action") &&
  e.target.getAttribute("data-action") == "delete"
    ? e.target.parentNode.remove()
    : "";
}

// Поиск по фильтру

let inputFilter = document.querySelector(".inputFilter");

inputFilter.addEventListener("keyup", filter);

function filter(e) {
  let searchText = e.target.value.toLowerCase();
  let items = ul.querySelectorAll("li");

  items.forEach(function (item) {
    let itemText = item.firstChild.textContent.toLowerCase();

    itemText.indexOf(searchText) != -1
      ? (item.style.display = "block")
      : (item.style.display = "none");
  });
}
