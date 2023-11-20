"use strict";
let todoList = document.querySelector(".todo__list"),
  todoForm = document.querySelector(".todo__add"),
  items = [
    {
      title: "Learn JS Promises",
      done: !0,
    },
    {
      title: "Learn how to write proper Vanilla JS finally!",
      done: !1,
    },
    {
      title: "Recap: webpack, babel, npm, yarn (2023-11-19)",
      done: !1,
    },
  ],
  addTodo = function (a) {
    a.preventDefault();
    let b = document.querySelector(".todo__input").value;
    items.push({
      title: b,
      done: !1,
    }),
      saveList(),
      document.querySelector(".todo__add").reset();
  },
  createList = function () {
    let a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : [],
      b = arguments[1];
    b.innerHTML = a
      .map(function (c, d) {
        return (
          '\n        <li class="todo__item">\n          <input type="checkbox" id="todo' +
          d +
          '" data-index="' +
          d +
          '" ' +
          (c.done ? "checked" : "") +
          ' />\n          <label for="todo' +
          d +
          '">\n            <img src="./img/check.svg" class="todo__done" data-index="' +
          d +
          '" />\n            <div class="todo__text">' +
          c.title +
          '</div>\n            <span class="todo__delete" data-index="' +
          d +
          '">Delete</span>\n          </label>\n        </li>\n      '
        );
      })
      .join("");
  },
  toggleDone = function (a) {
    let b = a.target;
    if (b.classList.contains("todo__done")) {
      let c = b.dataset.index;
      (items[c].done = !items[c].done), saveList();
    }
  },
  removeSingle = function (a) {
    let b = a.target;
    if (b.classList.contains("todo__delete")) {
      let c = b.dataset.index;
      spliceItem(c);
    }
  },
  spliceItem = function (a) {
    items.splice(a, 1);
    saveList();
  },
  saveList = function () {
    createList(items, todoList);
  };
todoList.addEventListener("click", toggleDone),
  todoList.addEventListener("click", removeSingle),
  todoForm.addEventListener("submit", addTodo),
  createList(items, todoList);
