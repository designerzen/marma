import { createHeader, createFooter, createProgressBar } from '../components.ts';
import { campaigns } from '../data.ts';

export function createDashboardPage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Your Fan Dashboard';
  pageTitle.style.marginBottom = 'var(--spacing-lg)';
  container.appendChild(pageTitle);

  // Token Stats
  const statsSection = document.createElement('section');
  statsSection.style.marginBottom = 'var(--spacing-xl)';

  const statsGrid = document.createElement('div');
  statsGrid.style.display = 'grid';
  statsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
  statsGrid.style.gap = 'var(--spacing-lg)';

  const stats = [
    { label: 'Total Tokens Earned', value: '2,450' },
    { label: 'Tokens Allocated', value: '1,800' },
    { label: 'Tokens Available', value: '650' },
    { label: 'Campaigns Supported', value: '12' },
  ];

  stats.forEach((stat) => {
    const box = document.createElement('div');
    box.className = 'stat-box';

    const value = document.createElement('div');
    value.className = 'stat-value';
    value.textContent = stat.value;

    const label = document.createElement('div');
    label.className = 'stat-label';
    label.textContent = stat.label;

    box.appendChild(value);
    box.appendChild(label);
    statsGrid.appendChild(box);
  });

  statsSection.appendChild(statsGrid);
  container.appendChild(statsSection);

  // Main Dashboard Grid
  const mainGrid = document.createElement('div');
  mainGrid.className = 'dashboard-grid';

  // Left: Contribution History
  const historySection = document.createElement('div');

  const historyTitle = document.createElement('h2');
  historyTitle.textContent = 'Your Contribution History';
  historyTitle.style.marginBottom = 'var(--spacing-lg)';

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const contributions = [
    {
      date: 'Feb 18, 2026',
      artist: 'Luna Noir - Neon Dreams EP',
      amount: '$50',
      tier: 'Fan',
      tokensEarned: 500,
    },
    {
      date: 'Feb 10, 2026',
      artist: 'Echo Rising - Debut Single',
      amount: '$100',
      tier: 'Producer',
      tokensEarned: 1000,
    },
    {
      date: 'Feb 5, 2026',
      artist: 'Sonic Future - Remix Album',
      amount: '$25',
      tier: 'Supporter',
      tokensEarned: 250,
    },
    {
      date: 'Jan 28, 2026',
      artist: 'Luna Noir - Analog Synth Album',
      amount: '$50',
      tier: 'Fan',
      tokensEarned: 500,
    },
    {
      date: 'Jan 15, 2026',
      artist: 'Neon Collective - Group Album',
      amount: '$25',
      tier: 'Supporter',
      tokensEarned: 200,
    },
  ];

  contributions.forEach((contrib) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--spacing-xs)';

    const dateEl = document.createElement('div');
    dateEl.className = 'timeline-date';
    dateEl.textContent = contrib.date;

    const amountEl = document.createElement('div');
    amountEl.style.fontSize = '1.25rem';
    amountEl.style.fontWeight = '700';
    amountEl.style.color = 'var(--color-accent)';
    amountEl.textContent = contrib.amount;

    header.appendChild(dateEl);
    header.appendChild(amountEl);
    item.appendChild(header);

    const artistEl = document.createElement('p');
    artistEl.style.marginBottom = 'var(--spacing-xs)';
    artistEl.textContent = contrib.artist;

    const tierEl = document.createElement('p');
    tierEl.style.fontSize = '0.875rem';
    tierEl.style.color = 'var(--color-text-secondary)';
    tierEl.style.marginBottom = 'var(--spacing-xs)';
    tierEl.textContent = `Tier: ${contrib.tier} • +${contrib.tokensEarned} tokens`;

    item.appendChild(artistEl);
    item.appendChild(tierEl);
    timeline.appendChild(item);
  });

  historySection.appendChild(historyTitle);
  historySection.appendChild(timeline);

  // Active Campaigns Section
  const campaignsSection = document.createElement('div');
  campaignsSection.style.marginBottom = 'var(--spacing-xl)';

  const campaignsTitle = document.createElement('h2');
  campaignsTitle.textContent = 'Active Campaigns You Support';
  campaignsTitle.style.marginBottom = 'var(--spacing-lg)';
  campaignsSection.appendChild(campaignsTitle);

  const campaignsGrid = document.createElement('div');
  campaignsGrid.style.display = 'grid';
  campaignsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
  campaignsGrid.style.gap = 'var(--spacing-lg)';

  // Display active campaigns with progress bars
  const activeCampaigns = campaigns.filter((c) => c.category === 'active');
  activeCampaigns.forEach((campaign) => {
    const card = document.createElement('div');
    card.className = 'card';

    const titleEl = document.createElement('h3');
    titleEl.textContent = campaign.title;
    titleEl.style.marginBottom = 'var(--spacing-sm)';

    const artistEl = document.createElement('p');
    artistEl.style.fontSize = '0.875rem';
    artistEl.style.color = 'var(--color-text-secondary)';
    artistEl.style.marginBottom = 'var(--spacing-md)';
    artistEl.textContent = `by ${campaign.artist}`;

    const progressBar = createProgressBar(campaign.raised, campaign.goal);
    progressBar.style.marginBottom = 'var(--spacing-md)';

    const statsEl = document.createElement('div');
    statsEl.style.fontSize = '0.875rem';
    statsEl.style.color = 'var(--color-text-secondary)';
    statsEl.style.marginBottom = 'var(--spacing-md)';
    statsEl.innerHTML = `<strong>${campaign.backers}</strong> backers • <strong>${campaign.daysLeft}</strong> days left`;

    card.appendChild(titleEl);
    card.appendChild(artistEl);
    card.appendChild(progressBar);
    card.appendChild(statsEl);
    campaignsGrid.appendChild(card);
  });

  campaignsSection.appendChild(campaignsGrid);
  container.appendChild(campaignsSection);

  // Right: Token Allocation
  const allocationSection = document.createElement('div');

  const allocationTitle = document.createElement('h2');
  allocationTitle.textContent = 'Allocate Your Tokens';
  allocationTitle.style.marginBottom = 'var(--spacing-lg)';

  const allocationBox = document.createElement('div');
  allocationBox.className = 'card';
  allocationBox.style.marginBottom = 'var(--spacing-lg)';

  const allocNote = document.createElement('p');
  allocNote.style.fontSize = '0.875rem';
  allocNote.style.color = 'var(--color-text-secondary)';
  allocNote.textContent =
    'You have 650 tokens to allocate. Direct tokens to emerging artists to support their careers and shape the platform.';
  allocNote.style.marginBottom = 'var(--spacing-md)';
  allocationBox.appendChild(allocNote);

  const emergingArtists = [
    { name: 'Echo Rising', available: 200 },
    { name: 'Sonic Waves', available: 200 },
    { name: 'Neon Collective', available: 150 },
    { name: 'Pixel Dreams', available: 100 },
  ];

  emergingArtists.forEach((artist) => {
    const artistAlloc = document.createElement('div');
    artistAlloc.style.marginBottom = 'var(--spacing-lg)';
    artistAlloc.style.paddingBottom = 'var(--spacing-lg)';
    artistAlloc.style.borderBottom = '1px solid var(--color-border)';

    const nameEl = document.createElement('div');
    nameEl.style.fontWeight = '600';
    nameEl.style.marginBottom = 'var(--spacing-sm)';
    nameEl.textContent = artist.name;

    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.gap = 'var(--spacing-sm)';

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.max = '650';
    input.placeholder = 'Enter tokens';
    input.style.flex = '1';
    input.style.padding = 'var(--spacing-sm)';
    input.style.border = '2px solid var(--color-border)';
    input.style.fontFamily = 'var(--font-body)';

    const maxBtn = document.createElement('button');
    maxBtn.className = 'btn-secondary';
    maxBtn.textContent = `Max (${artist.available})`;
    maxBtn.style.padding = 'var(--spacing-sm) var(--spacing-md)';
    maxBtn.addEventListener('click', () => {
      input.value = artist.available.toString();
    });

    inputContainer.appendChild(input);
    inputContainer.appendChild(maxBtn);

    artistAlloc.appendChild(nameEl);
    artistAlloc.appendChild(inputContainer);
    allocationBox.appendChild(artistAlloc);
  });

  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn';
  submitBtn.textContent = 'Save Allocations';
  submitBtn.style.width = '100%';
  submitBtn.addEventListener('click', () => {
    alert('Your token allocations have been saved!');
  });

  allocationBox.appendChild(submitBtn);

  // Perks Unlocked
  const perksTitle = document.createElement('h3');
  perksTitle.textContent = 'Your Unlocked Perks';
  perksTitle.style.marginTop = 'var(--spacing-xl)';
  perksTitle.style.marginBottom = 'var(--spacing-lg)';

  const perksList = document.createElement('div');
  const perks = [
    'Early access to Luna Noir projects',
    'Exclusive behind-the-scenes content',
    'Producer credit on 2 projects',
    'Revenue share eligibility',
    'Direct artist messaging',
    'Custom project input voting',
  ];

  perks.forEach((perk) => {
    const perkEl = document.createElement('div');
    perkEl.style.padding = 'var(--spacing-md)';
    perkEl.style.borderLeft = '4px solid var(--color-accent)';
    perkEl.style.marginBottom = 'var(--spacing-sm)';
    perkEl.style.backgroundColor = 'white';
    perkEl.style.color = '#000';
    perkEl.textContent = '✓ ' + perk;
    perksList.appendChild(perkEl);
  });

  allocationSection.appendChild(allocationTitle);
  allocationSection.appendChild(allocationBox);
  allocationSection.appendChild(perksTitle);
  allocationSection.appendChild(perksList);

  mainGrid.appendChild(historySection);
  mainGrid.appendChild(allocationSection);
  container.appendChild(mainGrid);

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
