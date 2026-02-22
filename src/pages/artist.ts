import { createHeader, createFooter, createDonateModal } from '../components.ts';

export function createArtistPage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Artist Hero
  const artistHero = document.createElement('section');
  artistHero.className = 'campaign-hero';
  const artistName = document.createElement('h1');
  artistName.textContent = 'Luna Noir';
  artistName.style.marginBottom = '0';
  artistHero.appendChild(artistName);
  container.appendChild(artistHero);

  // Artist Info
  const artistInfo = document.createElement('section');
  artistInfo.style.marginBottom = 'var(--spacing-xl)';

  const infoGrid = document.createElement('div');
  infoGrid.style.display = 'grid';
  infoGrid.style.gridTemplateColumns = '2fr 1fr';
  infoGrid.style.gap = 'var(--spacing-lg)';

  const bio = document.createElement('div');

  const bioTitle = document.createElement('h3');
  bioTitle.textContent = 'About';
  bioTitle.style.marginBottom = 'var(--spacing-md)';

  const bioText = document.createElement('p');
  bioText.textContent =
    'Luna Noir is a visionary electronic artist with 15 years in the industry. After stepping back from major label politics, Luna is returning with experimental projects funded directly by fans. Each project incorporates feedback from the community that made them possible.';
  bioText.style.marginBottom = 'var(--spacing-md)';

  const stats = document.createElement('div');
  stats.style.marginBottom = 'var(--spacing-md)';

  const statsItems = [
    { label: 'Active Campaigns', value: '3' },
    { label: 'Funded Projects', value: '7' },
    { label: 'Total Fans', value: '2,450' },
  ];

  statsItems.forEach((item) => {
    const stat = document.createElement('div');
    stat.style.marginBottom = 'var(--spacing-sm)';

    const label = document.createElement('span');
    label.style.fontWeight = '600';
    label.style.color = 'var(--color-text-secondary)';
    label.textContent = item.label + ': ';

    const value = document.createElement('span');
    value.style.fontSize = '1.25rem';
    value.style.fontWeight = '700';
    value.style.color = 'var(--color-accent)';
    value.textContent = item.value;

    stat.appendChild(label);
    stat.appendChild(value);
    stats.appendChild(stat);
  });

  bio.appendChild(bioTitle);
  bio.appendChild(bioText);
  bio.appendChild(stats);

  const sidebar = document.createElement('div');

  const supportBtn = document.createElement('button');
  supportBtn.className = 'btn';
  supportBtn.textContent = 'Support This Artist';
  supportBtn.style.width = '100%';
  supportBtn.style.marginBottom = 'var(--spacing-lg)';

  const donateModal = createDonateModal();
  supportBtn.addEventListener('click', () => donateModal.open());

  const messagingBox = document.createElement('div');
  messagingBox.className = 'card';
  messagingBox.style.marginBottom = 'var(--spacing-md)';

  const msgTitle = document.createElement('h4');
  msgTitle.textContent = 'Direct Message';
  messagingBox.appendChild(msgTitle);

  const msgText = document.createElement('p');
  msgText.style.fontSize = '0.875rem';
  msgText.style.marginBottom = 'var(--spacing-sm)';
  msgText.textContent = 'Message Luna directly about projects and ideas.';
  messagingBox.appendChild(msgText);

  const msgBtn = document.createElement('button');
  msgBtn.className = 'btn-secondary';
  msgBtn.textContent = 'Open Chat';
  msgBtn.style.width = '100%';
  messagingBox.appendChild(msgBtn);

  sidebar.appendChild(supportBtn);
  sidebar.appendChild(messagingBox);

  infoGrid.appendChild(bio);
  infoGrid.appendChild(sidebar);
  artistInfo.appendChild(infoGrid);
  container.appendChild(artistInfo);

  // Projects Timeline
  const projectsSection = document.createElement('section');
  projectsSection.style.marginBottom = 'var(--spacing-xl)';

  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Active & Past Projects';
  projectsTitle.style.marginBottom = 'var(--spacing-lg)';

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const projects = [
    {
      name: 'Neon Dreams EP',
      status: 'Active',
      funding: 85,
      target: 10000,
      current: 8500,
    },
    {
      name: 'Analog Synth Album',
      status: 'Active',
      funding: 65,
      target: 15000,
      current: 9750,
    },
    {
      name: 'Urban Echoes',
      status: 'Completed',
      funding: 100,
      target: 5000,
      current: 5000,
    },
    {
      name: 'Remaster Collection',
      status: 'Completed',
      funding: 100,
      target: 3000,
      current: 3000,
    },
  ];

  projects.forEach((project) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--spacing-sm)';

    const titleEl = document.createElement('h4');
    titleEl.textContent = project.name;

    const statusEl = document.createElement('span');
    statusEl.style.fontSize = '0.75rem';
    statusEl.style.fontWeight = '700';
    statusEl.style.textTransform = 'uppercase';
    statusEl.style.padding = 'var(--spacing-xs) var(--spacing-sm)';
    statusEl.style.backgroundColor =
      project.status === 'Completed' ? 'var(--color-accent)' : 'var(--color-border)';
    statusEl.style.color = project.status === 'Completed' ? 'white' : 'var(--color-text)';
    statusEl.textContent = project.status;

    header.appendChild(titleEl);
    header.appendChild(statusEl);
    item.appendChild(header);

    const progressContainer = document.createElement('div');
    progressContainer.style.marginBottom = 'var(--spacing-sm)';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.width = `${project.funding}%`;
    progressFill.textContent = `${project.funding}%`;

    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressBar);

    const progressText = document.createElement('p');
    progressText.style.fontSize = '0.875rem';
    progressText.style.color = 'var(--color-text-secondary)';
    progressText.style.marginBottom = '0';
    progressText.textContent = `$${project.current.toLocaleString()} of $${project.target.toLocaleString()} raised`;

    progressContainer.appendChild(progressText);
    item.appendChild(progressContainer);

    timeline.appendChild(item);
  });

  projectsSection.appendChild(projectsTitle);
  projectsSection.appendChild(timeline);
  container.appendChild(projectsSection);

  // Fan Messages Preview
  const messagingSection = document.createElement('section');
  messagingSection.style.marginBottom = 'var(--spacing-xl)';

  const messagingTitle = document.createElement('h2');
  messagingTitle.textContent = 'Recent Fan Conversations';
  messagingTitle.style.marginBottom = 'var(--spacing-lg)';

  const messages = [
    {
      author: 'Alex (Fan)',
      text: 'Absolutely love the direction of Neon Dreams! Can you tell us more about the production process?',
      isArtist: false,
    },
    {
      author: 'Luna Noir (Artist)',
      text: 'Thanks! Of course. This project is using both analog and digital synthesis. I can share studio clips with all funders next week.',
      isArtist: true,
    },
    {
      author: 'Jordan (Fan)',
      text: 'Will the perks include early access to the finished tracks?',
      isArtist: false,
    },
    {
      author: 'Luna Noir (Artist)',
      text: 'Yes! Producer tier gets exclusive early access, plus stems for remixing if interested.',
      isArtist: true,
    },
  ];

  const messageThread = document.createElement('div');
  messageThread.className = 'message-thread';

  messages.forEach((msg) => {
    const msgEl = document.createElement('div');
    msgEl.className = `message ${msg.isArtist ? 'artist' : ''}`;

    const author = document.createElement('div');
    author.className = 'message-author';
    author.textContent = msg.author;

    const text = document.createElement('div');
    text.className = 'message-text';
    text.textContent = msg.text;

    msgEl.appendChild(author);
    msgEl.appendChild(text);
    messageThread.appendChild(msgEl);
  });

  messagingSection.appendChild(messagingTitle);
  messagingSection.appendChild(messageThread);
  container.appendChild(messagingSection);

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
