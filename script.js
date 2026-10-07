const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const programCards = document.querySelectorAll('.program-card');
const programTotal = document.querySelector('#program-total');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle('is-active', isSelected);
      filterButton.setAttribute('aria-pressed', String(isSelected));
    });

    programCards.forEach((card) => {
      const isVisible = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    programTotal.textContent = String(visibleCount).padStart(2, '0');
  });
});
