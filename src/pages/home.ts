import { createHeader, createFooter, createDonateModal, createArtistCard } from '../components.ts';
import { dormantArtists, emergingArtists } from '../data.ts';

export function createHomePage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Hero Section
  const hero = document.createElement('section');
  hero.className = 'hero';

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  const h1 = document.createElement('h1');
  h1.textContent = 'Marma';

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Karmic Funding';

  const description = document.createElement('p');
  description.textContent =
    'A platform where established artists launch projects and emerging artists gain visibility. Fans become producers, earning tokens that amplify the voices of tomorrow.';
  description.style.marginBottom = 'var(--spacing-lg)';

  const cta = document.createElement('button');
  cta.className = 'btn';
  cta.textContent = 'Explore Artists';
  cta.addEventListener('click', () => router.navigate('marketplace'));

  heroContent.appendChild(h1);
  heroContent.appendChild(subtitle);
  heroContent.appendChild(description);
  heroContent.appendChild(cta);
  hero.appendChild(heroContent);

  const heroImage = document.createElement('div');
  heroImage.style.background = 'linear-gradient(135deg, var(--color-accent), var(--color-border))';
  heroImage.style.height = '400px';
  heroImage.style.display = 'flex';
  heroImage.style.alignItems = 'center';
  heroImage.style.justifyContent = 'center';
  heroImage.style.fontSize = '5rem';
  heroImage.style.color = 'white';
  heroImage.textContent = '♪';
  hero.appendChild(heroImage);

  container.appendChild(hero);

  // How It Works
  const howItWorks = document.createElement('section');
  howItWorks.style.marginBottom = 'var(--spacing-xl)';

  const howTitle = document.createElement('h2');
  howTitle.textContent = 'How Marma Works';
  howTitle.style.textAlign = 'center';
  howTitle.style.marginBottom = 'var(--spacing-xl)';

  const steps = [
    {
      number: '1',
      title: 'Support Artists',
      description: 'Fund projects from established and emerging artists. Choose your support level.',
    },
    {
      number: '2',
      title: 'Earn Tokens',
      description: 'Every donation earns you tokens that represent your influence on the platform.',
    },
    {
      number: '3',
      title: 'Vote for Talent',
      description: 'Allocate your tokens to emerging artists. Help shape who rises next.',
    },
    {
      number: '4',
      title: 'Share Success',
      description: 'Fans receive revenue splits from funded projects they helped produce.',
    },
  ];

  const stepsGrid = document.createElement('div');
  stepsGrid.className = 'card-grid';

  steps.forEach((step) => {
    const stepCard = document.createElement('div');
    stepCard.className = 'card';

    const stepNum = document.createElement('div');
    stepNum.style.fontSize = '2.5rem';
    stepNum.style.fontWeight = '700';
    stepNum.style.color = 'var(--color-accent)';
    stepNum.style.marginBottom = 'var(--spacing-md)';
    stepNum.textContent = step.number;

    const stepTitle = document.createElement('h3');
    stepTitle.textContent = step.title;
    stepTitle.style.marginBottom = 'var(--spacing-sm)';

    const stepDesc = document.createElement('p');
    stepDesc.textContent = step.description;

    stepCard.appendChild(stepNum);
    stepCard.appendChild(stepTitle);
    stepCard.appendChild(stepDesc);
    stepsGrid.appendChild(stepCard);
  });

  howItWorks.appendChild(howTitle);
  howItWorks.appendChild(stepsGrid);
  container.appendChild(howItWorks);

  // Featured Artists
  const featured = document.createElement('section');
  featured.style.marginBottom = 'var(--spacing-xl)';

  const featuredTitle = document.createElement('h2');
  featuredTitle.textContent = 'Featured This Month';
  featuredTitle.style.marginBottom = 'var(--spacing-lg)';

  const artistPair = document.createElement('div');
  artistPair.className = 'artist-pair';

  // Get random dormant artist (established)
  const randomDormantIndex = Math.floor(Math.random() * dormantArtists.length);
  const establishedArtistName = dormantArtists[randomDormantIndex].artist;

  // Get random emerging artist
  const randomEmergingIndex = Math.floor(Math.random() * emergingArtists.length);
  const emergingArtistName = emergingArtists[randomEmergingIndex].name;

  const establishedCard = createArtistCard(establishedArtistName, 'Established', 2);
  const emergingCard = createArtistCard(emergingArtistName, 'Emerging', 1);

  const donateModal = createDonateModal();

  establishedCard.querySelector('button')!.addEventListener('click', () => {
    donateModal.open();
  });

  emergingCard.querySelector('button')!.addEventListener('click', () => {
    donateModal.open();
  });

  artistPair.appendChild(establishedCard);
  artistPair.appendChild(emergingCard);

  featured.appendChild(featuredTitle);
  featured.appendChild(artistPair);
  container.appendChild(featured);

  // Platform Stats
  const stats = document.createElement('section');
  stats.style.marginBottom = 'var(--spacing-xl)';

  const statData = [
    { label: 'Campaigns Funded', value: '247' },
    { label: 'Active Artists', value: '1,200+' },
    { label: 'Community Tokens', value: '500K+' },
    { label: 'Fan Producers', value: '15K+' },
  ];

  const statsGrid = document.createElement('div');
  statsGrid.className = 'card-grid';
  statsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';

  statData.forEach((stat) => {
    const statBox = document.createElement('div');
    statBox.className = 'stat-box';

    const value = document.createElement('div');
    value.className = 'stat-value';
    value.textContent = stat.value;

    const label = document.createElement('div');
    label.className = 'stat-label';
    label.textContent = stat.label;

    statBox.appendChild(value);
    statBox.appendChild(label);
    statsGrid.appendChild(statBox);
  });

  stats.appendChild(statsGrid);
  container.appendChild(stats);

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
