(() => {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const key = 'cct-cookie-choice';
  const settings = document.getElementById('cookie-settings');
  const manage = document.getElementById('cookie-manage');
  const analytics = document.getElementById('cookie-analytics');
  const ads = document.getElementById('cookie-ads');
  let memoryChoice = '';

  const readChoice = () => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) return value;
    } catch (_) { /* Storage can be blocked for local files or private browsing. */ }

    try {
      const match = document.cookie.match(/(?:^|;\s*)cct_cookie_choice=([^;]*)/);
      if (match) return decodeURIComponent(match[1]);
    } catch (_) { /* Keep the choice in memory for this page view. */ }

    return memoryChoice;
  };

  const saveChoice = value => {
    memoryChoice = value;
    try { window.localStorage.setItem(key, value); } catch (_) { /* Cookie fallback below. */ }
    try {
      document.cookie = `cct_cookie_choice=${encodeURIComponent(value)}; Max-Age=15552000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
    } catch (_) { /* The banner still closes when browser storage is unavailable. */ }
  };

  const parseChoice = value => ({
    analytics: value.split('-').includes('a'),
    ads: value.split('-').includes('d')
  });

  const closeBanner = () => {
    banner.hidden = true;
    banner.style.setProperty('display', 'none', 'important');
    settings.hidden = true;
    if (manage) manage.setAttribute('aria-expanded', 'false');
  };

  const openBanner = () => {
    banner.style.removeProperty('display');
    banner.hidden = false;
  };

  const choice = readChoice();
  if (choice) {
    const saved = parseChoice(choice);
    analytics.checked = saved.analytics;
    ads.checked = saved.ads;
    closeBanner();
  } else {
    openBanner();
  }

  banner.querySelector('[data-cookie="accept"]')?.addEventListener('click', () => {
    saveChoice('essential-a-d');
    closeBanner();
  });

  banner.querySelector('[data-cookie="reject"]')?.addEventListener('click', () => {
    saveChoice('essential');
    closeBanner();
  });

  manage?.addEventListener('click', () => {
    settings.hidden = !settings.hidden;
    manage.setAttribute('aria-expanded', String(!settings.hidden));
  });

  document.getElementById('cookie-save')?.addEventListener('click', () => {
    saveChoice(`essential${analytics.checked ? '-a' : ''}${ads.checked ? '-d' : ''}`);
    closeBanner();
  });

  document.getElementById('cookie-close')?.addEventListener('click', () => {
    settings.hidden = true;
    manage?.setAttribute('aria-expanded', 'false');
  });

  document.querySelectorAll('[data-open-cookie-settings]').forEach(button => {
    button.addEventListener('click', () => {
      const saved = parseChoice(readChoice());
      analytics.checked = saved.analytics;
      ads.checked = saved.ads;
      openBanner();
      settings.hidden = false;
      manage?.setAttribute('aria-expanded', 'true');
      manage?.focus();
    });
  });
})();
