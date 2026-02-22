import { createHeader, createFooter, createLeaderboardRow } from '../components.ts';
import { emergingArtists } from '../data.ts';

export function createMarketplacePage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Discover Emerging Artists';
  pageTitle.style.marginBottom = 'var(--spacing-lg)';
  container.appendChild(pageTitle);

  const subtitle = document.createElement('p');
  subtitle.style.fontSize = '1.125rem';
  subtitle.style.color = 'var(--color-text-secondary)';
  subtitle.style.marginBottom = 'var(--spacing-lg)';
  subtitle.textContent =
    'Top emerging artists ranked by community token support. Your allocation shapes who rises next.';
  container.appendChild(subtitle);

  // Search and Filters
  const filterSection = document.createElement('section');
  filterSection.style.marginBottom = 'var(--spacing-lg)';

  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search artists...';

  const searchBtn = document.createElement('button');
  searchBtn.className = 'btn';
  searchBtn.textContent = 'Search';

  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchBtn);
  filterSection.appendChild(searchBar);

  // Genre Filters
  const filterLabel = document.createElement('h4');
  filterLabel.textContent = 'Filter by Genre';
  filterLabel.style.marginBottom = 'var(--spacing-sm)';
  filterSection.appendChild(filterLabel);

  const filterTags = document.createElement('div');
  filterTags.className = 'filter-tags';

  const genres = ['All', 'Electronic', 'Hip-Hop', 'Indie', 'Pop', 'Experimental'];
  genres.forEach((genre, index) => {
    const tag = document.createElement('button');
    tag.className = 'filter-tag';
    if (index === 0) tag.classList.add('active');
    tag.textContent = genre;
    tag.addEventListener('click', () => {
      document.querySelectorAll('.filter-tag').forEach((t) => {
        t.classList.remove('active');
      });
      tag.classList.add('active');
    });
    filterTags.appendChild(tag);
  });

  filterSection.appendChild(filterTags);
  container.appendChild(filterSection);

  // Featured Artist
  const featuredSection = document.createElement('section');
  featuredSection.style.marginBottom = 'var(--spacing-xl)';

  const featuredLabel = document.createElement('div');
  featuredLabel.style.fontSize = '0.875rem';
  featuredLabel.style.fontWeight = '700';
  featuredLabel.style.textTransform = 'uppercase';
  featuredLabel.style.letterSpacing = '0.05em';
  featuredLabel.style.color = 'var(--color-accent)';
  featuredLabel.style.marginBottom = 'var(--spacing-sm)';
  featuredLabel.textContent = '⭐ Featured Artist';

  const featuredCard = document.createElement('div');
  featuredCard.style.display = 'grid';
  featuredCard.style.gridTemplateColumns = '1fr 2fr';
  featuredCard.style.gap = 'var(--spacing-lg)';
  featuredCard.style.padding = 'var(--spacing-lg)';
  featuredCard.style.backgroundColor = 'var(--color-bg-light)';
  featuredCard.style.border = '2px solid var(--color-accent-cyan)';

  const featuredImage = document.createElement('div');
  featuredImage.style.height = '300px';
  featuredImage.style.background = 'linear-gradient(135deg, var(--color-accent-magenta), var(--color-accent-cyan))';
  featuredImage.style.display = 'flex';
  featuredImage.style.alignItems = 'center';
  featuredImage.style.justifyContent = 'center';
  featuredImage.style.fontSize = '5rem';
  featuredImage.style.color = 'white';
  featuredImage.textContent = '♪';

  const featuredContent = document.createElement('div');

  // Use first emerging artist as featured
  const topArtist = emergingArtists[0];

  const featuredName = document.createElement('h2');
  featuredName.textContent = topArtist.name;
  featuredName.style.marginBottom = 'var(--spacing-sm)';

  const featuredGenre = document.createElement('p');
  featuredGenre.style.color = 'var(--color-accent-magenta)';
  featuredGenre.style.fontWeight = '600';
  featuredGenre.style.marginBottom = 'var(--spacing-md)';
  featuredGenre.textContent = topArtist.genre;

  const featuredBio = document.createElement('p');
  featuredBio.textContent =
    `${topArtist.name} is an emerging artist with ${topArtist.tokens.toLocaleString()} community tokens. This artist is rapidly gaining momentum and is a top community pick. Support them and get early access to new music.`;
  featuredBio.style.marginBottom = 'var(--spacing-lg)';

  const featuredTokens = document.createElement('div');
  featuredTokens.style.marginBottom = 'var(--spacing-lg)';

  const tokenLabel = document.createElement('div');
  tokenLabel.style.fontSize = '0.875rem';
  tokenLabel.style.color = 'var(--color-text-secondary)';
  tokenLabel.style.marginBottom = 'var(--spacing-xs)';
  tokenLabel.textContent = 'Community Tokens';

  const tokenValue = document.createElement('div');
  tokenValue.style.fontSize = '2rem';
  tokenValue.style.fontWeight = '700';
  tokenValue.style.color = 'var(--color-accent-magenta)';
  tokenValue.textContent = topArtist.tokens.toLocaleString();

  featuredTokens.appendChild(tokenLabel);
  featuredTokens.appendChild(tokenValue);

  const featuredBtn = document.createElement('button');
  featuredBtn.className = 'btn';
  featuredBtn.textContent = 'Support Artist';
  featuredBtn.addEventListener('click', () => router.navigate('artist'));

  featuredContent.appendChild(featuredName);
  featuredContent.appendChild(featuredGenre);
  featuredContent.appendChild(featuredBio);
  featuredContent.appendChild(featuredTokens);
  featuredContent.appendChild(featuredBtn);

  featuredCard.appendChild(featuredImage);
  featuredCard.appendChild(featuredContent);

  featuredSection.appendChild(featuredLabel);
  featuredSection.appendChild(featuredCard);
  container.appendChild(featuredSection);

  // Leaderboard
  const leaderboardSection = document.createElement('section');
  leaderboardSection.style.marginBottom = 'var(--spacing-xl)';

  const leaderboardTitle = document.createElement('h2');
  leaderboardTitle.textContent = 'Top 10 Emerging Artists';
  leaderboardTitle.style.marginBottom = 'var(--spacing-lg)';
  leaderboardSection.appendChild(leaderboardTitle);

  const table = document.createElement('table');
  table.className = 'leaderboard';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = ['Rank', 'Artist', 'Community Tokens', 'Status'];
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  emergingArtists.forEach((artist, index) => {
    const row = createLeaderboardRow(index + 1, artist.name, artist.tokens, artist.trending);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  leaderboardSection.appendChild(table);
  container.appendChild(leaderboardSection);

  // Trending Section
  const trendingSection = document.createElement('section');
  trendingSection.style.marginBottom = 'var(--spacing-xl)';

  const trendingTitle = document.createElement('h2');
  trendingTitle.textContent = '📈 On The Rise';
  trendingTitle.style.marginBottom = 'var(--spacing-lg)';

  const trendingGrid = document.createElement('div');
  trendingGrid.className = 'card-grid';

  // Filter trending artists
  const trendingArtistsList = emergingArtists.filter((a) => a.trending).slice(0, 3);

  trendingArtistsList.forEach((artist) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cursor = 'pointer';

    const artistName = document.createElement('h3');
    artistName.textContent = artist.name;
    artistName.style.marginBottom = 'var(--spacing-md)';

    const growth = document.createElement('div');
    growth.style.fontSize = '1.5rem';
    growth.style.fontWeight = '700';
    growth.style.color = 'var(--color-accent-magenta)';
    growth.style.marginBottom = 'var(--spacing-sm)';
    growth.textContent = '+' + Math.floor(Math.random() * 200 + 100) + '%';

    const label = document.createElement('p');
    label.style.fontSize = '0.875rem';
    label.style.color = 'var(--color-text-secondary)';
    label.style.marginBottom = '0';
    label.textContent = 'Token growth this month';

    card.appendChild(artistName);
    card.appendChild(growth);
    card.appendChild(label);
    card.addEventListener('click', () => router.navigate('artist'));
    trendingGrid.appendChild(card);
  });

  trendingSection.appendChild(trendingTitle);
  trendingSection.appendChild(trendingGrid);
  container.appendChild(trendingSection);

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
