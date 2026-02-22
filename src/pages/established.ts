import { createHeader, createFooter, createDonateModal, createProgressBar } from '../components.ts';
import { dormantArtists } from '../data.ts';

export function createEstablishedPage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Established Artists';
  pageTitle.style.marginBottom = 'var(--spacing-sm)';
  container.appendChild(pageTitle);

  const subtitle = document.createElement('p');
  subtitle.style.fontSize = '1.125rem';
  subtitle.style.color = 'var(--color-text-secondary)';
  subtitle.style.marginBottom = 'var(--spacing-lg)';
  subtitle.textContent =
    'Legendary artists seeking funding for their next creative projects. Support them and become part of their journey.';
  container.appendChild(subtitle);

  // Filter Section
  const filterSection = document.createElement('section');
  filterSection.style.marginBottom = 'var(--spacing-lg)';

  const filterTitle = document.createElement('h3');
  filterTitle.textContent = 'Filter Artists';
  filterTitle.style.marginBottom = 'var(--spacing-md)';
  filterSection.appendChild(filterTitle);

  // Search by Artist Name
  const searchContainer = document.createElement('div');
  searchContainer.style.marginBottom = 'var(--spacing-md)';

  const searchLabel = document.createElement('label');
  searchLabel.style.display = 'block';
  searchLabel.style.marginBottom = 'var(--spacing-xs)';
  searchLabel.style.fontSize = '0.875rem';
  searchLabel.style.fontWeight = '700';
  searchLabel.style.textTransform = 'uppercase';
  searchLabel.style.letterSpacing = '0.05em';
  searchLabel.style.color = 'var(--color-text-secondary)';
  searchLabel.textContent = 'Search by Artist Name';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'e.g., Selena Gomez, Pink Floyd...';
  searchInput.style.width = '100%';
  searchInput.style.padding = 'var(--spacing-sm)';
  searchInput.style.border = '2px solid var(--color-accent-cyan)';
  searchInput.style.backgroundColor = 'var(--color-bg-light)';
  searchInput.style.color = 'var(--color-text)';
  searchInput.style.fontFamily = 'var(--font-body)';
  searchInput.style.fontSize = '1rem';
  searchInput.style.transition = 'all 0.3s ease';
  searchInput.style.marginBottom = 'var(--spacing-md)';

  searchInput.addEventListener('focus', () => {
    searchInput.style.borderColor = 'var(--color-accent-magenta)';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.style.borderColor = 'var(--color-accent-cyan)';
  });

  searchContainer.appendChild(searchLabel);
  searchContainer.appendChild(searchInput);
  filterSection.appendChild(searchContainer);

  // Filter by Funding Required
  const fundingFilterContainer = document.createElement('div');
  fundingFilterContainer.style.marginBottom = 'var(--spacing-lg)';

  const fundingLabel = document.createElement('label');
  fundingLabel.style.display = 'block';
  fundingLabel.style.marginBottom = 'var(--spacing-xs)';
  fundingLabel.style.fontSize = '0.875rem';
  fundingLabel.style.fontWeight = '700';
  fundingLabel.style.textTransform = 'uppercase';
  fundingLabel.style.letterSpacing = '0.05em';
  fundingLabel.style.color = 'var(--color-text-secondary)';
  fundingLabel.textContent = 'Filter by Funding Required';

  const fundingOptions = document.createElement('div');
  fundingOptions.style.display = 'flex';
  fundingOptions.style.gap = 'var(--spacing-sm)';
  fundingOptions.style.flexWrap = 'wrap';

  const filterRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $50K', min: 0, max: 50000 },
    { label: '$50K - $100K', min: 50000, max: 100000 },
    { label: '$100K - $250K', min: 100000, max: 250000 },
    { label: '$250K+', min: 250000, max: Infinity },
  ];

  let activeFilterBtn: HTMLButtonElement | null = null;
  let currentMinFilter = 0;
  let currentMaxFilter = Infinity;

  filterRanges.forEach((range) => {
    const btn = document.createElement('button');
    btn.className = 'filter-tag';
    btn.textContent = range.label;
    if (range.label === 'All') {
      btn.classList.add('active');
      activeFilterBtn = btn;
    }

    btn.addEventListener('click', () => {
      if (activeFilterBtn) {
        activeFilterBtn.classList.remove('active');
      }
      btn.classList.add('active');
      activeFilterBtn = btn;

      currentMinFilter = range.min;
      currentMaxFilter = range.max;
      filterAndDisplayArtists();
    });

    fundingOptions.appendChild(btn);
  });

  fundingFilterContainer.appendChild(fundingLabel);
  fundingFilterContainer.appendChild(fundingOptions);
  filterSection.appendChild(fundingFilterContainer);

  container.appendChild(filterSection);

  // Table Section
  const tableSection = document.createElement('section');
  tableSection.style.marginBottom = 'var(--spacing-xl)';

  const tableTitle = document.createElement('h2');
  tableTitle.textContent = 'Active Campaigns';
  tableTitle.style.marginBottom = 'var(--spacing-lg)';
  tableSection.appendChild(tableTitle);

  const table = document.createElement('table');
  table.className = 'leaderboard';
  table.style.width = '100%';
  table.style.marginBottom = 'var(--spacing-lg)';

  // Table Header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = ['Artist', 'Campaign', 'Funding Progress', 'Action'];
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  tableSection.appendChild(table);
  container.appendChild(tableSection);

  // Filter and display function
  function filterAndDisplayArtists(): void {
    tbody.innerHTML = '';

    const filtered = dormantArtists.filter((artist) => {
      const matchesSearch = artist.artist.toLowerCase().includes(searchInput.value.toLowerCase());
      const matchesFunding =
        artist['minimum-requirement'] >= currentMinFilter &&
        artist['minimum-requirement'] <= currentMaxFilter;
      return matchesSearch && matchesFunding;
    });

    if (filtered.length === 0) {
      const emptyRow = document.createElement('tr');
      const emptyCell = document.createElement('td');
      emptyCell.colSpan = 4;
      emptyCell.style.textAlign = 'center';
      emptyCell.style.padding = 'var(--spacing-lg)';
      emptyCell.style.color = 'var(--color-text-secondary)';
      emptyCell.textContent = 'No artists match your filters.';
      emptyRow.appendChild(emptyCell);
      tbody.appendChild(emptyRow);
      return;
    }

    filtered.forEach((artist) => {
      const row = document.createElement('tr');

      // Artist name
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      nameLink.textContent = artist.artist;
      nameLink.href = '#';
      nameLink.style.color = 'var(--color-accent-cyan)';
      nameLink.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigate('artist');
      });
      nameCell.appendChild(nameLink);

      // Campaign
      const campaignCell = document.createElement('td');
      campaignCell.textContent = artist.campaign || '(No campaign name)';
      campaignCell.style.color = artist.campaign ? 'var(--color-text)' : 'var(--color-text-secondary)';

      // Funding Progress
      const fundingCell = document.createElement('td');
      fundingCell.style.verticalAlign = 'middle';
      const raised = artist.raised || 0;
      const goal = artist['minimum-requirement'];
      const progressBar = createProgressBar(raised, goal);
      fundingCell.appendChild(progressBar);

      // Action Button
      const actionCell = document.createElement('td');
      const donateBtn = document.createElement('button');
      donateBtn.className = 'btn';
      donateBtn.textContent = 'Support';
      donateBtn.style.padding = 'var(--spacing-xs) var(--spacing-sm)';
      donateBtn.style.fontSize = '0.875rem';
      donateBtn.addEventListener('click', () => {
        donateModal.open();
      });
      actionCell.appendChild(donateBtn);

      row.appendChild(nameCell);
      row.appendChild(campaignCell);
      row.appendChild(fundingCell);
      row.appendChild(actionCell);
      tbody.appendChild(row);
    });
  }

  // Search input listener
  searchInput.addEventListener('input', filterAndDisplayArtists);

  // Initial display
  filterAndDisplayArtists();

  // Donate Modal
  const donateModal = createDonateModal();

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
