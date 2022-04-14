const bookmarks = document.querySelectorAll('[data-js="bookmark-card"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', () => {
    bookmark.parentElement.classList.toggle('card--bookmarked');
  });
});

answerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('card--show-answer');
    if (button.parentElement.classList.contains('card--show-answer')) {
      button.textContent = 'Hide answer';
    } else {
      button.textContent = 'Show answer';
    }
  });
});
