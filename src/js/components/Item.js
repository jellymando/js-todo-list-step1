export const todoItem = (data) => {
  return `
        <li class="${data.complete ? "complete" : ""}">
            <div class="view">
            <input class="toggle" type="checkbox" ${
              data.complete ? "checked" : ""
            }/>
            <label class="label">${data.title}</label>
            <button class="destroy"></button>
            </div>
            <input class="edit" value="${data.title}" />
        </li>
    `;
};
