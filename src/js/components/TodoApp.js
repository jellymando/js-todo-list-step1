import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";

export default class TodoApp {
  constructor() {
    this.todoListUl = document.getElementById("todo-list");
    this.todoCount = document.querySelector(".todo-count strong");
    this.todoFilterButton = document.querySelectorAll(".filters li a");
    this.todoLocalData = localStorage.getItem("item");
    this.todoData = this.todoLocalData ? JSON.parse(this.todoLocalData) : [];

    this.init();
    this.render();
  }

  render() {
    this.todoCount.innerHTML = this.todoData.length;
    this.todoList.setState(this.todoData);
  }

  init() {
    this.todoList = new TodoList({
      todoListUl: this.todoListUl,
      todoData: this.todoData,
    });
    this.todoInput = new TodoInput({
      todoData: this.todoData,
      todoSet: this.setItem.bind(this),
    });
  }

  setItem() {
    localStorage.setItem("item", JSON.stringify(this.todoData));
    this.render();
  }
}
