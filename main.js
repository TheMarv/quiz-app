const bookmarks = document.querySelectorAll('[data-js="bookmark-card"]');
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', () => {
    bookmark.parentElement.classList.toggle('card--bookmarked');
  });
});
