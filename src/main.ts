import './style.css';
import Router from './router.ts';
import { createHomePage } from './pages/home.ts';
import { createArtistPage } from './pages/artist.ts';
import { createDashboardPage } from './pages/dashboard.ts';
import { createCampaignPage } from './pages/campaign.ts';
import { createMarketplacePage } from './pages/marketplace.ts';
import { createEstablishedPage } from './pages/established.ts';

// Initialize router
const appContainer = document.querySelector<HTMLElement>('#app')!;
const router = new Router(appContainer);

// Register pages
router.register({
  name: 'home',
  render: () => createHomePage(router),
});

router.register({
  name: 'artist',
  render: () => createArtistPage(router),
});

router.register({
  name: 'dashboard',
  render: () => createDashboardPage(router),
});

router.register({
  name: 'campaign',
  render: () => createCampaignPage(router),
});

router.register({
  name: 'marketplace',
  render: () => createMarketplacePage(router),
});

router.register({
  name: 'established',
  render: () => createEstablishedPage(router),
});

// Navigate to home page
router.navigate('home');
