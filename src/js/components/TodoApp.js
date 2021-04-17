import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

export default class TodoApp {
  constructor() {
    this.todoListUl = document.getElementById('todo-list');
    this.todoCount = document.querySelector('.todo-count strong');
    this.todoFilterButton = document.querySelectorAll('.filters li a');
    this.todoLocalData = localStorage.getItem('item');
    this.todoData = this.todoLocalData ? JSON.parse(this.todoLocalData) : [];

    this.init();
    this.render();
  }

  setItem() {
    localStorage.setItem('item', JSON.stringify(this.todoData));
    this.render();
  }

  handleCreateItem(title) {
    this.todoData.push({
      id: new Date().getTime(),
      completed: false,
      title,
    });
    this.setItem();
  }

  handleCheckItem(id) {
    const item = this.todoData.find((data) => data.id.toString() === id);
    item.completed = !item.completed;
    this.setItem();
  }

  handleEditItem(id, title) {
    const item = this.todoData.find((data) => data.id.toString() === id);
    item.title = title;
    this.setItem();
  }

  handleDeleteItem(id) {
    this.todoData = this.todoData.filter((data) => data.id != id);
    this.setItem();
  }

  init() {
    this.todoInput = new TodoInput({
      todoData: this.todoData,
      onCreateItem: this.handleCreateItem.bind(this),
    });
    this.todoList = new TodoList({
      todoListUl: this.todoListUl,
      todoData: this.todoData,
      onCheckItem: this.handleCheckItem.bind(this),
      onEditItem: this.handleEditItem.bind(this),
      onDeleteItem: this.handleDeleteItem.bind(this),
    });
  }

  render() {
    this.todoCount.innerHTML = this.todoData.length;
    this.todoList.setState(this.todoData);
  }
}
