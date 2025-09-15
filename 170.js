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