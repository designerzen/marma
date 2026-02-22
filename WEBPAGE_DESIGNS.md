# Marma Platform: 5 Webpage Designs

## Design Direction
Marma uses a **monochromatic palette with cobalt blue accents** (per readme). The aesthetic is: **refined minimalism with high contrast and editorial typography**. Sharp contrast emphasizes the direct artist-to-fan relationship. Bold typography reflects artist agency and fan empowerment.

---

## Page 1: Landing / Home Page
**Purpose**: Introduce the platform and explain the core value proposition.

**Key Elements**:
- Hero section: Large, contrasting monochromatic background with cobalt blue accent text highlighting "Karmic Funding"
- Two-column layout showcasing an established artist vs. emerging artist side-by-side (as per spec)
- Donate buttons below each artist profile
- Clear CTAs explaining the token reward system
- Clean, asymmetrical layout with negative space

**User Flow**: First-time visitors understand the concept and choose to either support established artists or discover emerging talent.

---

## Page 2: Artist Profile / Discovery Page
**Purpose**: Showcase individual artists, their current projects, and fan engagement metrics.

**Key Elements**:
- Artist header with image/portfolio section
- "Funded Projects" timeline showing past and active campaigns
- Fan token distribution leaderboard (showing top 10 emerging artists)
- Live messaging interface preview for fan-artist communication
- Donate button with tiered perks displayed in modal dialog
- Project contribution breakdown (showing fan-producer relationship)

**User Flow**: Fans explore artists, see project history, understand token rewards, and engage directly.

---

## Page 3: Fan Dashboard / Token Wallet
**Purpose**: Show fans their earned tokens, contributions, and voting power.

**Key Elements**:
- Token balance display (earned from funding projects)
- Recent funding history with project details
- Allocation tool: distribute tokens to emerging artists
- Rewards/perks unlocked based on contribution tier
- Access to exclusive content from funded projects
- Leaderboard showing fan participation and influence

**User Flow**: Fans track their rewards, see direct impact on emerging artists, feel ownership of success.

---

## Page 4: Campaign / Project Details Page
**Purpose**: Deep dive into a specific funding campaign with **complete financial transparency at every step**.

**Key Elements**:
- Campaign hero image with monochromatic treatment
- Progress bar: funding goal vs. current amount
- **Campaign Funding Breakdown**:
  - Total goal and current funding status
  - Itemized breakdown: studio costs, artist payment, marketing, platform fee
  - Clear explanation of where each dollar goes
- **Revenue Distribution (Post-Release)**:
  - 50% to artist for creating the work
  - 30% to fan backers proportional to contribution
  - 20% to platform for operations and support
- **Fan Payout Example**:
  - Concrete example: if you invest $25 and project generates $50K revenue
  - Your potential return: $4.35+ plus free access to product
  - ROI calculation and value proposition
- **Money Flow Timeline**:
  - When funds are collected (escrow)
  - When production funds are released to artist
  - Production timeline with milestone dates
  - When product launches and revenue sharing begins
  - Ongoing monthly distribution schedule
- Tier selection for donations (with perks at each level)
- Fan messaging channel preview
- Content access metrics (unrestricted access to process + final product)
- Creative process documentation details
- Share buttons

**User Flow**: Fans understand exactly what they're funding, how money is distributed, when they'll receive returns, and what percentage each party receives at every stage.

---

## Page 5: Emerging Artist Marketplace / Top 10 List
**Purpose**: Display emerging artists ranked by public tokens received (main engagement mechanism).

**Key Elements**:
- Large ranked list layout: Artist name, token count, trending indicator
- Each row is clickable to artist profile
- Token distribution over time (small sparkline chart per artist)
- "Your Influence" indicator if user has allocated tokens
- Featured artist spotlight (top ranked with curated content)
- Filter: by genre, by status (pre-campaign, active campaign, launched)
- Donation button accessible from list

**User Flow**: Fans discover new talent, see which emerging artists have community support, and participate in shaping the platform's direction.

---

## Design Specifications

**Color Palette (Vibrant Neon Aesthetic)**:
- Primary background: `#0a1628` (deep navy)
- Background light: `#0f1e2e` (navy with depth)
- Text: `#ffffff` (white)
- Text secondary: `#a0aec0` (light gray-blue)
- Accent Magenta: `#ff006e` (hot pink/magenta) - primary CTA
- Accent Cyan: `#00d9ff` (bright cyan) - secondary accent, borders
- Accent Pink: `#ff3366` (vibrant pink) - gradient accents
- Accent Blue: `#0052cc` (deep blue) - supporting elements
- Border: `#1a3a52` (dark blue-gray)

**Typography**:
- Display/Headings: Rubik (600, 700, 800 weights) - modern, bold, uppercase
- Body: Readex Pro (400, 500, 600 weights) - clean, geometric, readable
- Hierarchy: Large H1 (4rem), H2 (2.75rem), structured H3/H4 with letter-spacing
- Text effects: Gradient text on headings, text-shadow on hover, text-transform: uppercase on labels

**Visual Effects**:
- Glowing borders and shadows using cyan/magenta with transparency
- Gradient backgrounds (linear gradients on CTAs and stats)
- Backdrop blur on modals
- Box shadows with colored glows (e.g., `0 0 20px rgba(0, 217, 255, 0.2)`)
- Hover states with elevation and glow effects
- Timeline with gradient line and glowing nodes

**Layout Principles**:
- Dark, immersive backgrounds with subtle radial gradient overlays
- High contrast text with white on dark navy
- Two-column layouts emphasize duality (established/emerging, investor/artist)
- Card-based design with glowing borders
- Generous padding and clear visual hierarchy

**Interactions**:
- Buttons with gradient backgrounds and glow on hover
- Cards/borders with cyan glow effects
- Links with cyan underline, magenta on hover with text-shadow
- Filter tags with gradient backgrounds on selection
- Modal with backdrop blur and glowing border
- Smooth fade-in animations between pages
