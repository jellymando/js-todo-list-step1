export default class TodoInput {
  constructor({ todoData, todoSet }) {
    this.todoTitle = document.getElementById("new-todo-title");
    this.todoData = todoData;
    this.todoSet = todoSet;
    console.log("this.todoSet", this.todoSet);
    this.init();
  }

  init() {
    this.todoTitle.onkeydown = (e) => {
      if (e.keyCode === 13) {
        const title = e.target.value.trim();

        if (title.length > 0) {
          this.todoData.push({ completed: false, title });
          this.todoSet();
        }
        e.target.value = "";
      }
    };
  }
}
