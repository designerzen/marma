// Dormant Artists (Established Artists Looking for Funding)
export interface DormantArtist {
  artist: string;
  campaign: string;
  'minimum-requirement': number;
  raised?: number;
  image?: string;
}

export const dormantArtists: DormantArtist[] = [
  {
    artist: 'Selena Gomez',
    campaign: 'Documentary',
    'minimum-requirement': 350000,
    raised: 245000,
    image: './images/artists/selena-gomez.png',
  },
  {
    artist: 'Pink Floyd',
    campaign: 'Global Tour',
    'minimum-requirement': 1650000,
    raised: 1155000,
    image: './images/artists/pink-floyd.jpg',
  },
  {
    artist: 'XXXTENTACION',
    campaign: 'Custom song',
    'minimum-requirement': 65000,
    raised: 58500,
    image: './images/artists/xxxtentacion.jpg',
  },
  {
    artist: 'Santana',
    campaign: 'Golden hits selection remaster',
    'minimum-requirement': 100000,
    raised: 67000,
    image: './images/artists/santana.jpg',
  },
  {
    artist: 'Rhianna',
    campaign: 'One off concert',
    'minimum-requirement': 250000,
    raised: 187500,
    image: './images/artists/rihanna.png',
  },
  {
    artist: 'Lil Peep',
    campaign: 'Video production for new single',
    'minimum-requirement': 15000,
    raised: 13500,
    image: './images/artists/lil-peep.png',
  },
  {
    artist: 'Vashti Bunyan',
    campaign: 'Produce LP to soundtrack movie',
    'minimum-requirement': 50000,
    raised: 42000,
    image: './images/artists/vashti-bunyan.jpg',
  },
  {
    artist: 'Bridgette Medeler',
    campaign: 'Album Production',
    'minimum-requirement': 50000,
    raised: 38500,
    image: './images/artists/bridgette-medeler.png',
  },
  {
    artist: 'Adelle',
    campaign: '5 stage UK tour',
    'minimum-requirement': 100000,
    raised: 72000,
    image: './images/artists/adele.jpg',
  },
  {
    artist: 'Daft Punk',
    campaign: '$100k to produce 4 track techno EP',
    'minimum-requirement': 100000,
    raised: 89000,
    image: './images/artists/daft-punk.jpg',
  },
  {
    artist: 'Grothye',
    campaign: '10 track LP',
    'minimum-requirement': 20000,
    raised: 16500,
    image: './images/artists/grothye.png',
  },
];

// Emerging Artists (for marketplace)
export interface EmergingArtist {
  name: string;
  tokens: number;
  trending: boolean;
  genre: string;
  image?: string;
}

export const emergingArtists: EmergingArtist[] = [
  { name: 'Echo Rising', tokens: 15230, trending: true, genre: 'Indie Electronic', image: './images/artists/echo-rising.png' },
  { name: 'Sonic Waves', tokens: 12890, trending: true, genre: 'Alternative', image: './images/artists/sonic-waves.png' },
  { name: 'Neon Collective', tokens: 10450, trending: false, genre: 'Synth-pop', image: './images/artists/neon-collective.png' },
  { name: 'Pixel Dreams', tokens: 9120, trending: false, genre: 'Electronic', image: './images/artists/pixel-dreams.png' },
  { name: 'Urban Echo', tokens: 8760, trending: true, genre: 'Hip-Hop', image: './images/artists/urban-echo.png' },
  { name: 'Cosmic Sound', tokens: 7850, trending: false, genre: 'Ambient', image: './images/artists/cosmic-sound.png' },
  { name: 'Digital Heart', tokens: 6920, trending: false, genre: 'Indie Pop', image: './images/artists/digital-heart.png' },
  { name: 'Retro Wave', tokens: 5880, trending: false, genre: 'Synthwave', image: './images/artists/retro-wave.png' },
  { name: 'Aurora', tokens: 5120, trending: true, genre: 'Pop', image: './images/artists/aurora.png' },
  { name: 'Synth Moon', tokens: 4690, trending: false, genre: 'Synthpop', image: './images/artists/synth-moon.png' },
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
