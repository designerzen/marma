export function createHeader(router: any): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  const headerContent = document.createElement('div');
  headerContent.className = 'header-content';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'MARMA';
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => router.navigate('home'));

  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  navList.className = 'nav';

  const navItems: Array<{ label: string; page: string }> = [
    { label: 'Home', page: 'home' },
    { label: 'Established', page: 'established' },
    { label: 'Emerging', page: 'marketplace' },
    { label: 'Dashboard', page: 'dashboard' },
  ];

  navItems.forEach(({ label, page }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = label;
    a.href = '#';
    a.setAttribute('data-page', page);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      router.navigate(page);
    });
    li.appendChild(a);
    navList.appendChild(li);
  });

  nav.appendChild(navList);
  headerContent.appendChild(logo);
  headerContent.appendChild(nav);
  header.appendChild(headerContent);

  return header;
}

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.style.borderTop = '2px solid var(--color-text)';
  footer.style.padding = 'var(--spacing-lg)';
  footer.style.marginTop = 'var(--spacing-xl)';
  footer.style.textAlign = 'center';
  footer.style.fontSize = '0.875rem';
  footer.style.color = 'var(--color-text-secondary)';

  const p = document.createElement('p');
  p.innerHTML = '© 2026 Marma. Direct artist funding, powered by fans.';
  footer.appendChild(p);

  return footer;
}

export function createDonateModal(): { modal: HTMLElement; open: () => void; close: () => void } {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'donate-modal';

  const content = document.createElement('div');
  content.className = 'modal-content';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const title = document.createElement('h2');
  title.textContent = 'Choose Your Support Level';
  title.style.marginBottom = 'var(--spacing-lg)';

  const tiers = [
    {
      name: 'Supporter',
      price: '$5',
      perks: ['Access to process updates', 'Digital thank you', 'Token rewards'],
    },
    {
      name: 'Fan',
      price: '$25',
      perks: ['Everything in Supporter', 'Exclusive behind-the-scenes', 'Direct messaging access'],
    },
    {
      name: 'Producer',
      price: '$100+',
      perks: ['Everything in Fan', 'Revenue share eligibility', 'Producer credit', 'Priority input'],
    },
  ];

  const tiersContainer = document.createElement('div');
  tiersContainer.style.marginBottom = 'var(--spacing-lg)';

  tiers.forEach((tier) => {
    const tierEl = document.createElement('div');
    tierEl.className = 'tier';

    const tierName = document.createElement('h3');
    tierName.textContent = tier.name;
    tierName.style.marginBottom = 'var(--spacing-sm)';

    const tierPrice = document.createElement('div');
    tierPrice.className = 'tier-price';
    tierPrice.textContent = tier.price;

    const perksList = document.createElement('ul');
    perksList.className = 'tier-perks';
    tier.perks.forEach((perk) => {
      const li = document.createElement('li');
      li.textContent = perk;
      perksList.appendChild(li);
    });

    tierEl.addEventListener('click', () => {
      document.querySelectorAll('.tier').forEach((el) => {
        el.classList.remove('selected');
      });
      tierEl.classList.add('selected');
    });

    tierEl.appendChild(tierName);
    tierEl.appendChild(tierPrice);
    tierEl.appendChild(perksList);
    tiersContainer.appendChild(tierEl);
  });

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Proceed to Payment';
  confirmBtn.style.width = '100%';
  confirmBtn.style.marginTop = 'var(--spacing-lg)';

  content.appendChild(closeBtn);
  content.appendChild(title);
  content.appendChild(tiersContainer);
  content.appendChild(confirmBtn);
  modal.appendChild(content);

  document.body.appendChild(modal);

  return {
    modal,
    open: () => modal.classList.add('active'),
    close: () => modal.classList.remove('active'),
  };
}

export function createArtistCard(
  name: string,
  status: 'Established' | 'Emerging',
  projects: number
): HTMLElement {
  const card = document.createElement('div');
  card.className = 'artist-card';

  const img = document.createElement('div');
  img.style.width = '100%';
  img.style.height = '200px';
  img.style.background = status === 'Established'
    ? 'linear-gradient(135deg, var(--color-accent), var(--color-border))'
    : 'linear-gradient(135deg, var(--color-border), var(--color-text))';
  img.style.marginBottom = 'var(--spacing-md)';
  img.style.display = 'flex';
  img.style.alignItems = 'center';
  img.style.justifyContent = 'center';
  img.style.color = 'white';
  img.style.fontSize = '3rem';
  img.textContent = '♪';

  const statusEl = document.createElement('div');
  statusEl.className = 'artist-status';
  statusEl.textContent = status.toUpperCase();

  const nameEl = document.createElement('h3');
  nameEl.textContent = name;
  nameEl.style.marginBottom = 'var(--spacing-sm)';

  const projectsEl = document.createElement('p');
  projectsEl.style.marginBottom = 'var(--spacing-md)';
  projectsEl.textContent = `${projects} Active Project${projects !== 1 ? 's' : ''}`;

  const donateBtn = document.createElement('button');
  donateBtn.className = 'btn';
  donateBtn.textContent = 'Donate & Fund';
  donateBtn.style.width = '100%';

  card.appendChild(img);
  card.appendChild(statusEl);
  card.appendChild(nameEl);
  card.appendChild(projectsEl);
  card.appendChild(donateBtn);

  return card;
}

export function createLeaderboardRow(
  rank: number,
  artistName: string,
  tokens: number,
  trending: boolean
): HTMLTableRowElement {
  const row = document.createElement('tr');

  const rankCell = document.createElement('td');
  const rankSpan = document.createElement('span');
  rankSpan.className = 'rank';
  rankSpan.textContent = `#${rank}`;
  rankCell.appendChild(rankSpan);

  const nameCell = document.createElement('td');
  const nameLink = document.createElement('a');
  nameLink.textContent = artistName;
  nameLink.href = '#';
  nameCell.appendChild(nameLink);

  const tokensCell = document.createElement('td');
  const tokenSpan = document.createElement('span');
  tokenSpan.className = 'token-count';
  tokenSpan.textContent = `${tokens.toLocaleString()} tokens`;
  tokensCell.appendChild(tokenSpan);

  const trendingCell = document.createElement('td');
  if (trending) {
    const trendingBadge = document.createElement('span');
    trendingBadge.style.color = 'var(--color-accent)';
    trendingBadge.style.fontWeight = '600';
    trendingBadge.textContent = '📈 Trending';
    trendingCell.appendChild(trendingBadge);
  }

  row.appendChild(rankCell);
  row.appendChild(nameCell);
  row.appendChild(tokensCell);
  row.appendChild(trendingCell);

  return row;
}
