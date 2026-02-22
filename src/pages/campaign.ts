import { createHeader, createFooter, createDonateModal } from '../components.ts';

export function createCampaignPage(router: any): HTMLElement {
  const page = document.createElement('div');
  page.className = 'page';

  page.appendChild(createHeader(router));

  const container = document.createElement('div');
  container.className = 'container';

  // Campaign Hero
  const hero = document.createElement('section');
  hero.className = 'campaign-hero';

  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Neon Dreams EP';
  heroTitle.style.marginBottom = 'var(--spacing-md)';

  const heroSubtitle = document.createElement('p');
  heroSubtitle.style.fontSize = '1.25rem';
  heroSubtitle.style.color = 'white';
  heroSubtitle.textContent = 'by Luna Noir';

  hero.appendChild(heroTitle);
  hero.appendChild(heroSubtitle);
  container.appendChild(hero);

  // Campaign Details Grid
  const detailsSection = document.createElement('section');
  detailsSection.style.marginBottom = 'var(--spacing-xl)';

  const detailsGrid = document.createElement('div');
  detailsGrid.style.display = 'grid';
  detailsGrid.style.gridTemplateColumns = '2fr 1fr';
  detailsGrid.style.gap = 'var(--spacing-lg)';

  // Left: Campaign Info
  const campaignInfo = document.createElement('div');

  const descTitle = document.createElement('h2');
  descTitle.textContent = 'About This Campaign';
  descTitle.style.marginBottom = 'var(--spacing-lg)';

  const description = document.createElement('p');
  description.textContent =
    "Luna Noir is producing an experimental 5-track EP blending analog synth with AI-generated audio textures. This campaign funds production, mastering, and production documentation. Every backer receives unrestricted access to the creative process and the final product.";
  description.style.marginBottom = 'var(--spacing-lg)';

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const timelines = [
    { date: 'Now - April 30', event: 'Campaign active, accepting funds' },
    { date: 'May 1', event: 'Studio documentation begins' },
    { date: 'May 15', event: 'First preview for backers' },
    { date: 'June 30', event: 'EP production complete' },
    { date: 'July 15', event: 'Public release' },
  ];

  timelines.forEach((tl) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const dateEl = document.createElement('div');
    dateEl.className = 'timeline-date';
    dateEl.textContent = tl.date;

    const eventEl = document.createElement('p');
    eventEl.style.marginBottom = '0';
    eventEl.textContent = tl.event;

    item.appendChild(dateEl);
    item.appendChild(eventEl);
    timeline.appendChild(item);
  });

  campaignInfo.appendChild(descTitle);
  campaignInfo.appendChild(description);
  campaignInfo.appendChild(timeline);

  // Right: Funding Info
  const fundingBox = document.createElement('div');

  const fundingProgressTitle = document.createElement('h3');
  fundingProgressTitle.textContent = 'Funding Progress';
  fundingProgressTitle.style.marginBottom = 'var(--spacing-lg)';

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';

  const progressFill = document.createElement('div');
  progressFill.className = 'progress-fill';
  progressFill.style.width = '85%';
  progressFill.style.justifyContent = 'center';
  progressFill.textContent = '85%';

  progressBar.appendChild(progressFill);
  fundingBox.appendChild(fundingProgressTitle);
  fundingBox.appendChild(progressBar);

  const fundingStats = document.createElement('div');
  fundingStats.style.marginBottom = 'var(--spacing-lg)';

  const funded = document.createElement('div');
  funded.style.marginBottom = 'var(--spacing-sm)';

  const fundedAmount = document.createElement('div');
  fundedAmount.style.fontSize = '1.75rem';
  fundedAmount.style.fontWeight = '700';
  fundedAmount.style.color = 'var(--color-accent)';
  fundedAmount.textContent = '$8,500';

  const fundedLabel = document.createElement('div');
  fundedLabel.style.fontSize = '0.875rem';
  fundedLabel.style.color = 'var(--color-text-secondary)';
  fundedLabel.textContent = 'of $10,000 goal';

  funded.appendChild(fundedAmount);
  funded.appendChild(fundedLabel);
  fundingStats.appendChild(funded);

  const backers = document.createElement('div');
  backers.style.marginBottom = 'var(--spacing-sm)';

  const backersNum = document.createElement('div');
  backersNum.style.fontSize = '1.25rem';
  backersNum.style.fontWeight = '700';
  backersNum.textContent = '342 Backers';

  const backersNote = document.createElement('div');
  backersNote.style.fontSize = '0.875rem';
  backersNote.style.color = 'var(--color-text-secondary)';
  backersNote.textContent = '45 days remaining';

  backers.appendChild(backersNum);
  backers.appendChild(backersNote);
  fundingStats.appendChild(backers);

  fundingBox.appendChild(fundingStats);

  const donateBtn = document.createElement('button');
  donateBtn.className = 'btn';
  donateBtn.textContent = 'Support This Project';
  donateBtn.style.width = '100%';
  donateBtn.style.marginBottom = 'var(--spacing-lg)';

  const donateModal = createDonateModal();
  donateBtn.addEventListener('click', () => donateModal.open());

  fundingBox.appendChild(donateBtn);

  const shareBox = document.createElement('div');
  shareBox.className = 'card';

  const shareTitle = document.createElement('h4');
  shareTitle.textContent = 'Share This Campaign';
  shareBox.appendChild(shareTitle);

  const shareButtons = document.createElement('div');
  shareButtons.style.display = 'flex';
  shareButtons.style.gap = 'var(--spacing-sm)';

  const shareOptions = ['Twitter', 'Facebook', 'Copy Link'];
  shareOptions.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'btn-secondary';
    btn.textContent = option;
    btn.style.flex = '1';
    shareButtons.appendChild(btn);
  });

  shareBox.appendChild(shareButtons);
  fundingBox.appendChild(shareBox);

  detailsGrid.appendChild(campaignInfo);
  detailsGrid.appendChild(fundingBox);
  detailsSection.appendChild(detailsGrid);
  container.appendChild(detailsSection);

  // Funding & Revenue Breakdown
  const fundingBreakdownSection = document.createElement('section');
  fundingBreakdownSection.style.marginBottom = 'var(--spacing-xl)';

  const fundingTitle = document.createElement('h2');
  fundingTitle.textContent = 'Complete Financial Transparency';
  fundingTitle.style.marginBottom = 'var(--spacing-lg)';
  fundingBreakdownSection.appendChild(fundingTitle);

  // Campaign Funding Breakdown
  const fundingBreakdownCard = document.createElement('div');
  fundingBreakdownCard.className = 'card';
  fundingBreakdownCard.style.marginBottom = 'var(--spacing-lg)';

  const fundingBreakdownTitle = document.createElement('h3');
  fundingBreakdownTitle.textContent = 'Campaign Funding Breakdown ($10,000 Goal)';
  fundingBreakdownTitle.style.marginBottom = 'var(--spacing-lg)';
  fundingBreakdownCard.appendChild(fundingBreakdownTitle);

  const fundingBreakdownGrid = document.createElement('div');
  fundingBreakdownGrid.style.display = 'grid';
  fundingBreakdownGrid.style.gridTemplateColumns = '1fr 1fr';
  fundingBreakdownGrid.style.gap = 'var(--spacing-lg)';

  const fundingItems = [
    { label: 'Total Campaign Goal', value: '$10,000', detail: 'Amount needed to launch production' },
    { label: 'Currently Raised', value: '$8,500', detail: '85% funded (342 backers)' },
    { label: 'Studio & Production', value: '$4,500', detail: 'Recording, mixing, mastering costs' },
    { label: 'Artist Upfront', value: '$2,000', detail: 'Luna Noir receives for pre-production work' },
    { label: 'Marketing & Distribution', value: '$1,500', detail: 'Release strategy and promotional spend' },
    { label: 'Platform Operations', value: '$1,000', detail: '10% of campaign goal for Marma' },
  ];

  fundingItems.forEach((item) => {
    const itemBox = document.createElement('div');
    itemBox.style.padding = 'var(--spacing-md)';
    itemBox.style.backgroundColor = 'var(--color-bg-light)';
    itemBox.style.border = '1px solid var(--color-border)';

    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '0.875rem';
    labelEl.style.color = 'var(--color-text-secondary)';
    labelEl.style.marginBottom = 'var(--spacing-xs)';
    labelEl.style.textTransform = 'uppercase';
    labelEl.style.letterSpacing = '0.05em';
    labelEl.textContent = item.label;

    const valueEl = document.createElement('div');
    valueEl.style.fontSize = '1.75rem';
    valueEl.style.fontWeight = '700';
    valueEl.style.color = 'var(--color-accent-magenta)';
    valueEl.style.marginBottom = 'var(--spacing-xs)';
    valueEl.textContent = item.value;

    const detailEl = document.createElement('p');
    detailEl.style.fontSize = '0.875rem';
    detailEl.style.color = 'var(--color-text-secondary)';
    detailEl.style.marginBottom = '0';
    detailEl.textContent = item.detail;

    itemBox.appendChild(labelEl);
    itemBox.appendChild(valueEl);
    itemBox.appendChild(detailEl);
    fundingBreakdownGrid.appendChild(itemBox);
  });

  fundingBreakdownCard.appendChild(fundingBreakdownGrid);
  fundingBreakdownSection.appendChild(fundingBreakdownCard);

  // Revenue Distribution After Release
  const revenueSection = document.createElement('div');
  revenueSection.className = 'card';
  revenueSection.style.marginBottom = 'var(--spacing-lg)';

  const revenueTitle = document.createElement('h3');
  revenueTitle.textContent = 'Distribution of Sales Revenue (After Production Complete)';
  revenueTitle.style.marginBottom = 'var(--spacing-lg)';
  revenueSection.appendChild(revenueTitle);

  const revenueNote = document.createElement('p');
  revenueNote.style.marginBottom = 'var(--spacing-lg)';
  revenueNote.style.fontSize = '0.95rem';
  revenueNote.style.color = 'var(--color-text-secondary)';
  revenueNote.textContent =
    'Once the EP is released and begins generating income from streaming, downloads, and sales, all revenue will be distributed as follows:';
  revenueSection.appendChild(revenueNote);

  const revenueGrid = document.createElement('div');
  revenueGrid.className = 'revenue-split';

  const revenues = [
    {
      label: 'Artist (Luna Noir)',
      percentage: '50%',
      description: 'Creator receives majority for their work',
    },
    {
      label: 'Fan Backers',
      percentage: '30%',
      description: 'Proportional to contribution tier',
    },
    {
      label: 'Platform Operations',
      percentage: '20%',
      description: 'Marma maintenance & support',
    },
  ];

  revenues.forEach((rev) => {
    const item = document.createElement('div');
    item.className = 'split-item';

    const pct = document.createElement('div');
    pct.className = 'split-percentage';
    pct.textContent = rev.percentage;

    const label = document.createElement('h4');
    label.style.marginBottom = 'var(--spacing-sm)';
    label.textContent = rev.label;

    const desc = document.createElement('p');
    desc.style.fontSize = '0.875rem';
    desc.style.marginBottom = '0';
    desc.textContent = rev.description;

    item.appendChild(pct);
    item.appendChild(label);
    item.appendChild(desc);
    revenueGrid.appendChild(item);
  });

  revenueSection.appendChild(revenueGrid);
  fundingBreakdownSection.appendChild(revenueSection);

  // Fan Payout Example
  const payoutExampleCard = document.createElement('div');
  payoutExampleCard.className = 'card';
  payoutExampleCard.style.marginBottom = 'var(--spacing-lg)';

  const payoutTitle = document.createElement('h3');
  payoutTitle.textContent = 'Example: Your Potential Earnings';
  payoutTitle.style.marginBottom = 'var(--spacing-lg)';
  payoutExampleCard.appendChild(payoutTitle);

  const payoutText = document.createElement('p');
  payoutText.style.marginBottom = 'var(--spacing-lg)';
  payoutText.textContent =
    'If you contribute $25 as a Supporter and the EP generates $50,000 in total revenue:';
  payoutExampleCard.appendChild(payoutText);

  const payoutGrid = document.createElement('div');
  payoutGrid.style.display = 'grid';
  payoutGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
  payoutGrid.style.gap = 'var(--spacing-md)';

  const payoutItems = [
    {
      title: 'Your Investment',
      amount: '$25',
      detail: 'You contributed 0.29% of total funding',
    },
    {
      title: 'Your Share of 30%',
      amount: '$4.35',
      detail: '30% of revenue split proportionally',
    },
    {
      title: 'Your Total Return',
      amount: '+173%',
      detail: 'Plus unrestricted access to product',
    },
  ];

  payoutItems.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.style.padding = 'var(--spacing-md)';
    itemEl.style.backgroundColor = 'rgba(0, 217, 255, 0.05)';
    itemEl.style.border = '1px solid var(--color-accent-cyan)';

    const titleEl = document.createElement('div');
    titleEl.style.fontSize = '0.875rem';
    titleEl.style.fontWeight = '700';
    titleEl.style.textTransform = 'uppercase';
    titleEl.style.letterSpacing = '0.05em';
    titleEl.style.marginBottom = 'var(--spacing-sm)';
    titleEl.style.color = 'var(--color-accent-cyan)';
    titleEl.textContent = item.title;

    const amountEl = document.createElement('div');
    amountEl.style.fontSize = '2rem';
    amountEl.style.fontWeight = '800';
    amountEl.style.color = 'var(--color-accent-magenta)';
    amountEl.style.marginBottom = 'var(--spacing-sm)';
    amountEl.textContent = item.amount;

    const detailEl = document.createElement('p');
    detailEl.style.fontSize = '0.85rem';
    detailEl.style.color = 'var(--color-text-secondary)';
    detailEl.style.marginBottom = '0';
    detailEl.textContent = item.detail;

    itemEl.appendChild(titleEl);
    itemEl.appendChild(amountEl);
    itemEl.appendChild(detailEl);
    payoutGrid.appendChild(itemEl);
  });

  payoutExampleCard.appendChild(payoutGrid);
  fundingBreakdownSection.appendChild(payoutExampleCard);

  // Money Flow Timeline
  const moneyFlowCard = document.createElement('div');
  moneyFlowCard.className = 'card';

  const moneyFlowTitle = document.createElement('h3');
  moneyFlowTitle.textContent = 'Money Flow Timeline';
  moneyFlowTitle.style.marginBottom = 'var(--spacing-lg)';
  moneyFlowCard.appendChild(moneyFlowTitle);

  const moneyFlowTimeline = document.createElement('div');
  moneyFlowTimeline.className = 'timeline';

  const moneyFlowItems = [
    {
      date: 'Now - April 30',
      title: 'Funding Collection',
      description: 'Fan donations collected. Marma holds in escrow.',
    },
    {
      date: 'May 1 - May 15',
      title: 'Campaign Locked',
      description: '$10K target met. Production funds released to Luna.',
    },
    {
      date: 'May 16 - June 30',
      title: 'Production Phase',
      description: 'Funds allocated to studio, artists, marketing.',
    },
    {
      date: 'July 15',
      title: 'Product Release',
      description: 'EP available on all platforms. Revenue streams begin.',
    },
    {
      date: 'Monthly (Ongoing)',
      title: 'Revenue Distribution',
      description: '50% to artist, 30% to fans, 20% to platform.',
    },
  ];

  moneyFlowItems.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'timeline-item';

    const dateEl = document.createElement('div');
    dateEl.className = 'timeline-date';
    dateEl.textContent = item.date;

    const titleEl = document.createElement('h4');
    titleEl.style.marginBottom = 'var(--spacing-xs)';
    titleEl.textContent = item.title;

    const descEl = document.createElement('p');
    descEl.style.marginBottom = '0';
    descEl.style.fontSize = '0.95rem';
    descEl.textContent = item.description;

    itemEl.appendChild(dateEl);
    itemEl.appendChild(titleEl);
    itemEl.appendChild(descEl);
    moneyFlowTimeline.appendChild(itemEl);
  });

  moneyFlowCard.appendChild(moneyFlowTimeline);
  fundingBreakdownSection.appendChild(moneyFlowCard);

  container.appendChild(fundingBreakdownSection);

  // Studio Process
  const processSection = document.createElement('section');
  processSection.style.marginBottom = 'var(--spacing-xl)';

  const processTitle = document.createElement('h2');
  processTitle.textContent = 'Creative Process Access';
  processTitle.style.marginBottom = 'var(--spacing-lg)';

  const processCard = document.createElement('div');
  processCard.className = 'card';

  const processItems = [
    'Weekly studio production updates',
    'Behind-the-scenes video documentation',
    'Raw session audio for early previews',
    'Live chat sessions during production milestones',
    'Option to influence direction on 2 tracks',
    'Thank you message in final EP credits',
  ];

  processItems.forEach((item) => {
    const p = document.createElement('p');
    p.textContent = '✓ ' + item;
    p.style.marginBottom = 'var(--spacing-sm)';
    processCard.appendChild(p);
  });

  processSection.appendChild(processTitle);
  processSection.appendChild(processCard);
  container.appendChild(processSection);

  page.appendChild(container);
  page.appendChild(createFooter());

  return page;
}
