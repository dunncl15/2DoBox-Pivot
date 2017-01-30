export const getID = (selector) => {
  return $(selector).closest(".idea-card").attr("id");
};

export const getIdea = (id) => {
  return JSON.parse(localStorage.getItem(id));
};

export const storeIdea = (idea) => {
   localStorage.setItem(idea.id, JSON.stringify(idea));
};

export const clearInputs = () => {
  $('.title-input').val('');
  $('.body-input').val('');
  $('.save-btn').attr('disabled', true);
};

export const displayCard = (idea) => {
  $('.card-section').prepend(
    `<article id="${idea.id}" class="${idea.complete}">
      <button aria-label="delete task" class="delete-btn"></button>
      <h3 class="task-title" contenteditable>${idea.title}</h3>
      <p class="task-body" contenteditable>${idea.body}</p>
      <footer class="task-footer">
        <button aria-label="increase importance" class="up-btn"></button>
        <button aria-label="decrease importance" class="down-btn"></button>
        <p class="task-importance">Importance: <span class="task-quality">${idea.quality}</span></p>
        <button class="${idea.class}">Complete task</button>
      </footer>
    </article>`
  );
};
