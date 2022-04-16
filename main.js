const bookmarks = document.querySelectorAll('[data-js="bookmark-card"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const navHome = document.querySelector('[data-js="nav-home"]');
const navBookmark = document.querySelector('[data-js="nav-bookmark"]');
const navCreate = document.querySelector('[data-js="nav-create"]');
const navUser = document.querySelector('[data-js="nav-user"]');

const mainHome = document.querySelector('[data-js="main-home"]');
const mainBookmark = document.querySelector('[data-js="main-bookmark"]');
const mainCreate = document.querySelector('[data-js="main-create"]');
const mainUser = document.querySelector('[data-js="main-user"]');

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.parentElement.classList.toggle('card--bookmarked');
  });
});

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('card--show-answer');
    if (button.parentElement.classList.contains('card--show-answer')) {
      button.textContent = 'Hide answer';
    } else {
      button.textContent = 'Show answer';
    }
  });
});

function switchPage(activeMain, activeNav) {
  mainHome.classList.add('main--hidden');
  mainBookmark.classList.add('main--hidden');
  mainCreate.classList.add('main--hidden');
  mainUser.classList.add('main--hidden');
  navHome.classList.remove('nav__link--active');
  navBookmark.classList.remove('nav__link--active');
  navCreate.classList.remove('nav__link--active');
  navUser.classList.remove('nav__link--active');
  activeMain.classList.remove('main--hidden');
  activeNav.classList.add('nav__link--active');
  console.log(activeMain, activeNav);
}

navHome.addEventListener('click', () => {
  switchPage(mainHome, navHome);
});

navBookmark.addEventListener('click', () => {
  switchPage(mainBookmark, navBookmark);
});

navCreate.addEventListener('click', () => {
  switchPage(mainCreate, navCreate);
});

navUser.addEventListener('click', () => {
  switchPage(mainUser, navUser);
});
