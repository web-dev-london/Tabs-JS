const tabs = Array.from(
  document.querySelectorAll('.tabs__toggle'),
);
const contents = Array.from(
  document.querySelectorAll('.tabs__content'),
);

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    contents[index].classList.add('active');
    tabs[index].classList.add('active');
  });
});
