// Dormant Artists (Established Artists Looking for Funding)
export interface DormantArtist {
  artist: string;
  campaign: string;
  'minimum-requirement': number;
  raised?: number;
}

export const dormantArtists: DormantArtist[] = [
  {
    artist: 'Selena Gomez',
    campaign: 'Documentary',
    'minimum-requirement': 350000,
    raised: 245000,
  },
  {
    artist: 'Pink Floyd',
    campaign: 'Global Tour',
    'minimum-requirement': 1650000,
    raised: 1155000,
  },
  {
    artist: 'XXXTENTACION',
    campaign: 'Custom song',
    'minimum-requirement': 65000,
    raised: 58500,
  },
  {
    artist: 'Santana',
    campaign: 'Golden hits selection remaster',
    'minimum-requirement': 100000,
    raised: 67000,
  },
  {
    artist: 'Rhianna',
    campaign: 'One off concert',
    'minimum-requirement': 250000,
    raised: 187500,
  },
  {
    artist: 'Lil Peep',
    campaign: 'Video production for new single',
    'minimum-requirement': 15000,
    raised: 13500,
  },
  {
    artist: 'Vashti Bunyan',
    campaign: 'Produce LP to soundtrack movie',
    'minimum-requirement': 50000,
    raised: 42000,
  },
  {
    artist: 'Bridgette Medeler',
    campaign: 'Album Production',
    'minimum-requirement': 50000,
    raised: 38500,
  },
  {
    artist: 'Adelle',
    campaign: '5 stage UK tour',
    'minimum-requirement': 100000,
    raised: 72000,
  },
  {
    artist: 'Daft Punk',
    campaign: '$100k to produce 4 track techno EP',
    'minimum-requirement': 100000,
    raised: 89000,
  },
  {
    artist: 'Grothye',
    campaign: '10 track LP',
    'minimum-requirement': 20000,
    raised: 16500,
  },
];

// Emerging Artists (for marketplace)
export const emergingArtists = [
  { name: 'Echo Rising', tokens: 15230, trending: true, genre: 'Indie Electronic' },
  { name: 'Sonic Waves', tokens: 12890, trending: true, genre: 'Alternative' },
  { name: 'Neon Collective', tokens: 10450, trending: false, genre: 'Synth-pop' },
  { name: 'Pixel Dreams', tokens: 9120, trending: false, genre: 'Electronic' },
  { name: 'Urban Echo', tokens: 8760, trending: true, genre: 'Hip-Hop' },
  { name: 'Cosmic Sound', tokens: 7850, trending: false, genre: 'Ambient' },
  { name: 'Digital Heart', tokens: 6920, trending: false, genre: 'Indie Pop' },
  { name: 'Retro Wave', tokens: 5880, trending: false, genre: 'Synthwave' },
  { name: 'Aurora', tokens: 5120, trending: true, genre: 'Pop' },
  { name: 'Synth Moon', tokens: 4690, trending: false, genre: 'Synthpop' },
];

// Campaign data structure
export interface Campaign {
  id: string;
  artist: string;
  title: string;
  goal: number;
  raised: number;
  backers: number;
  daysLeft: number;
  description: string;
  category: 'active' | 'completed';
}

// Dormant artist campaigns with funding
export interface ArtistCampaign extends DormantArtist {
  raised?: number;
  progress?: number;
}

export const campaigns: Campaign[] = [
  {
    id: 'neon-dreams',
    artist: 'Selena Gomez',
    title: 'Neon Dreams EP',
    goal: 10000,
    raised: 8500,
    backers: 342,
    daysLeft: 45,
    description: 'Experimental 5-track EP blending analog synth with AI-generated audio textures.',
    category: 'active',
  },
  {
    id: 'analog-synth',
    artist: 'Pink Floyd',
    title: 'Analog Synth Album',
    goal: 15000,
    raised: 9750,
    backers: 287,
    daysLeft: 38,
    description: 'Full-length album exploring vintage synthesizer sounds with modern production.',
    category: 'active',
  },
  {
    id: 'urban-echoes',
    artist: 'XXXTENTACION',
    title: 'Urban Echoes',
    goal: 5000,
    raised: 5000,
    backers: 156,
    daysLeft: 0,
    description: 'Collaborative hip-hop project with emerging producers.',
    category: 'completed',
  },
];
