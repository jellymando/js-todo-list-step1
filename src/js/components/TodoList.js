import { todoItem } from "./Item.js";
export default class TodoList {
  constructor({ todoListUl, todoData, onCheckItem, onEditItem, onDeleteItem }) {
    this.todoListUl = todoListUl;
    this.todoData = todoData;
    this.handleCheckItem = onCheckItem;
    this.handleEditItem = onEditItem;
    this.handleDeleteItem = onDeleteItem;
  }

  setState(data) {
    this.todoData = data;
    this.todoListUl.innerHTML = "";
    this.render();
  }

  render() {
    if (!this.todoData) return;
    this.todoListUl.innerHTML = this.todoData
      .map((data) => todoItem(data))
      .join("");
  }
}
