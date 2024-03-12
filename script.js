const list = document.querySelector(".list");

const sort_name_btn = document.querySelector(".sort-options .sort-name");
const sort_meta_btn = document.querySelector(".sort-options .sort-meta");
const sort_age_btn = document.querySelector(".sort-options .sort-age");

const list_items = [
  {
    name: "Dime",
    meta: "Black",
    age: 31,
  },
  {
    name: "Ace",
    meta: "Red",
    age: 22,
  },
  {
    name: "Kire",
    meta: "Blue",
    age: 44,
  },
  {
    name: "Jane",
    meta: "Orange",
    age: 18,
  },

  {
    name: "Bale",
    meta: "Purple",
    age: 61,
  },
];

let desc = false;
sort_name_btn.addEventListener("click", () => {
  let array = sort_array_by(list_items, "name", desc);
  displayList(array);

  desc = !desc;
});

sort_meta_btn.addEventListener("click", () => {
  let array = sort_array_by(list_items, "meta", desc);

  displayList(array);
  desc = !desc;
});

sort_age_btn.addEventListener("click", () => {
  let array = sort_array_by(list_items, "age", desc);

  displayList(array);
  desc = !desc;
});

function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });
}

function wrapTextInSpan(div, text) {
  const span = document.createElement("span");
  span.innerHTML = text;
  div.appendChild(span);
}

function displayList(obj) {
  list.innerHTML = "";

  list_items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("list-items");

    wrapTextInSpan(div, item.name);

    wrapTextInSpan(div, item.meta);

    wrapTextInSpan(div, item.age);

    list.appendChild(div);
  });
}

displayList(list_items);
