(() => {
  const adsenseSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8056002733100841';
  const alreadyLoaded = document.querySelector(`script[src="${adsenseSrc}"]`);
  if (alreadyLoaded) return;

  const adsense = document.createElement('script');
  adsense.async = true;
  adsense.src = adsenseSrc;
  adsense.setAttribute('crossorigin', 'anonymous');
  document.head.append(adsense);
})();

(() => {
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  const mobile = window.matchMedia('(max-width: 980px)');
  const setMenuOpen = open => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', event => {
    if (mobile.matches && event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openDropdown = nav.querySelector('details[open]');
    if (openDropdown) {
      openDropdown.open = false;
      openDropdown.querySelector('summary').focus();
      return;
    }
    if (toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  mobile.addEventListener('change', () => setMenuOpen(false));

  const navLinks = [...nav.querySelectorAll('a')];
  const currentPath = new URL(window.location.href).pathname;
  const normalizedPath = path => path.endsWith('/index.html') ? path.slice(0, -'index.html'.length) : path;
  const articleCategory = document.querySelector('main .eyebrow a[href*="/categories/"]');
  const activeCategory = articleCategory ? new URL(articleCategory.href).pathname : currentPath;
  let currentLink = navLinks.find(link => new URL(link.href).pathname === activeCategory);

  if (!currentLink && (currentPath.endsWith('/') || currentPath.endsWith('/index.html'))) {
    currentLink = nav.querySelector('.nav-home');
  }

  if (currentLink) {
    const isCurrentPage = normalizedPath(currentPath) === normalizedPath(new URL(currentLink.href).pathname);
    currentLink.setAttribute('aria-current', isCurrentPage ? 'page' : 'location');
    currentLink.classList.add('is-current');
    const parentDropdown = currentLink.closest('.nav-dropdown');
    if (parentDropdown) {
      parentDropdown.classList.add('has-current');
      parentDropdown.querySelector('summary')?.setAttribute('aria-current', 'location');
    }
  }
})();
