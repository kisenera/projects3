function onScroll() {
      const rows = document.querySelectorAll('.custom-row');
      rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight - 100) {
          row.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', onScroll);

    onScroll();
const buttons = document.querySelectorAll('.tab-link');
const items   = document.querySelectorAll('.category');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;

    // toggle active class on buttons
    buttons.forEach(b => b.classList.toggle('active', b === btn));

    // show/hide items
    items.forEach(el => {
      el.classList.toggle('active', el.classList.contains(cat));
    });
    onScroll()
  });
});

// initialize: show cat-1
document.querySelectorAll('.category.cat1')
        .forEach(el => el.classList.add('active'));