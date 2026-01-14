# Code Review v1 - Project Documentation

## Overview
This is a prototype application replicating the SonarQube Cloud interface. The design uses the exact color palette from SonarQube while maintaining flexibility for different fonts.

## Tech Stack
- **Framework**: Next.js 16.1.1 (React 19.2.3)
- **Styling**: Custom CSS with design system + Tailwind CSS v4
- **Typography**: Echoes Design System (Inter + Ubuntu Mono fonts)
- **TypeScript**: v5

## Project Structure

```
code-review-v1/
├── app/
│   ├── components/
│   │   └── PullRequestsPage.tsx    # Main Pull Requests page component
│   ├── pr/
│   │   └── [id]/
│   │       └── page.tsx            # PR detail page (dynamic route)
│   ├── design-system.css           # Color palette and design tokens
│   ├── design-system-typography.css # Typography tokens (Echoes system)
│   ├── styles.css                  # Component-specific styles
│   ├── globals.css                 # Global styles and imports
│   ├── layout.tsx                  # Root layout with font configuration
│   ├── page.tsx                    # Home page (renders PullRequestsPage)
│   └── favico.png                  # Favicon
├── public/
│   ├── Sonar Qube Cloud.svg        # SonarQube Cloud logo
│   └── favico.png                  # Favicon (public copy)
├── package.json
└── README.md
```

## Design System

### Custom Design System (SonarQube Cloud-inspired)

The design system uses a **custom color palette** inspired by SonarQube Cloud, defined in `app/design-system.css` with CSS custom properties. The application is **dark mode by default**.

> **Note**: This project initially attempted to integrate SonarSource's official Echoes design system but was reverted to use this custom design system for better control and simplicity.

#### Primary Colors
- `--color-bg-primary`: #1E212E (Main content background)
- `--color-bg-secondary`: #3c4248
- `--color-bg-tertiary`: #637192
- `--color-sidebar-bg`: #2B2F3F (Sidebar and top nav background)
- `--color-sidebar-hover`: #1d212f
- `--color-content-bg`: #1E212E
- `--color-card-bg`: #393f45 (Card/Panel background - mostly unused, cards use transparent with borders)
- `--color-card-hover`: #1d212f

#### Text Colors
- `--color-text-primary`: #ffffff
- `--color-text-secondary`: #e6e6e6
- `--color-text-tertiary`: #b4b8bd
- `--color-text-muted`: #8a8f95
- `--color-text-disabled`: #637192

#### Accent Colors
- `--color-accent-primary`: #d4a5ff (Purple - primary actions)
- `--color-accent-primary-hover`: #e5d5ff
- `--color-accent-primary-active`: #ede2ff
- `--color-accent-secondary`: #4b9fd8 (Blue - icons, links)
- `--color-accent-secondary-hover`: #6bb8ec
- `--color-link`: #4b9fd8
- `--color-link-hover`: #6bb8ec

#### Status Colors
- `--color-success`: #4caf50 (Green - Passed status)
- `--color-success-bg`: rgba(76, 175, 80, 0.15)
- `--color-success-text`: #81c784
- `--color-warning`: #ff9800 (Orange - Warning badges)
- `--color-warning-bg`: rgba(255, 152, 0, 0.15)
- `--color-warning-text`: #ffb74d
- `--color-error`: #f44336 (Red - Failed status)
- `--color-error-bg`: rgba(244, 67, 54, 0.15)
- `--color-error-text`: #ef5350
- `--color-info`: #2196f3
- `--color-info-bg`: rgba(33, 150, 243, 0.15)
- `--color-info-text`: #64b5f6

#### Badge Colors
- `--color-badge-new`: #d4a5ff (Purple - "New" badge)
- `--color-badge-new-bg`: rgba(212, 165, 255, 0.2)
- `--color-badge-beta`: #b084f7 (Purple/Pink - "Beta" badge)
- `--color-badge-beta-bg`: rgba(176, 132, 247, 0.2)
- `--color-badge-private`: #8a8f95
- `--color-badge-private-bg`: #3c4248

#### Border Colors
- `--color-border-primary`: #4d5463
- `--color-border-secondary`: #3a3f45
- `--color-border-subtle`: #2e3238
- `--color-border-focus`: #4b9fd8

#### Typography System (Echoes Design System)

The application uses the **Echoes React Design System** typography tokens, defined in `app/design-system-typography.css`.

**Font Families**:
- `--echoes-font-family-sans`: Inter (primary UI font)
- `--echoes-font-family-code`: Ubuntu Mono (code and monospace content)

**Font Sizes**: 12px, 14px, 16px, 20px, 24px, 34px (rem-based)

**Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Pre-composed Typography Tokens**:
- `--echoes-typography-heading-xlarge`: 24px, 600 weight (H1 headings)
- `--echoes-typography-heading-large`: 20px, 600 weight (Quality Gate title)
- `--echoes-typography-heading-default`: 16px, 600 weight (Section headers)
- `--echoes-typography-heading-small`: 14px, 600 weight
- `--echoes-typography-text-default-regular`: 14px, 400 weight (Body text)
- `--echoes-typography-text-default-medium`: 14px, 500 weight
- `--echoes-typography-text-default-semibold`: 14px, 600 weight
- `--echoes-typography-text-small-regular`: 12px, 400 weight (Small text)
- `--echoes-typography-text-small-medium`: 12px, 500 weight
- `--echoes-typography-code-default`: Ubuntu Mono, 14px (Code blocks)
- `--echoes-typography-label-default`: 14px, 600 weight
- `--echoes-typography-label-small`: 12px, 600 weight

**Usage**: Apply via `font: var(--echoes-typography-heading-xlarge)` or use utility classes like `.typography-heading-xlarge`

#### Additional Design Tokens
**Spacing**: `--spacing-xs` (4px), `--spacing-sm` (8px), `--spacing-md` (16px), `--spacing-lg` (24px), `--spacing-xl` (32px), `--spacing-2xl` (48px)

**Border Radius**: `--radius-sm` (3px), `--radius-md` (4px), `--radius-lg` (6px), `--radius-xl` (8px), `--radius-full` (9999px)

**Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl` (all with dark mode-appropriate opacity)

**Transitions**: `--transition-fast` (150ms), `--transition-base` (200ms), `--transition-slow` (300ms)

### Usage
All colors are accessible via CSS custom properties:

```css
.my-element {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-primary);
}
```

## Pages

### Pull Requests Page (Homepage)
**Route**: `/` (localhost:3000)

**Features**:
- ✅ Top navigation bar with SonarQube Cloud logo and navigation links (My Projects, My Issues, My Portfolios, Explore)
- ✅ Left sidebar with project selector and navigation menu
- ✅ Pull Requests link is marked as active in sidebar
- ✅ **Unified Page Header** (sidebar background color with bottom border):
  - Breadcrumb navigation
  - H1 title: "Pull Requests" (24px, centralized styling)
  - Warning badge on second line: "Last analysis had warnings"
- ✅ Search bar and filters
- ✅ Pull requests list (10 dummy items) - clickable, links to detail pages
- ✅ Status indicators with green checkmarks
- ✅ Floating action button (bottom right)

**Status**: Links to PR detail pages functional

### PR Detail Page
**Route**: `/pr/[id]` (e.g., `/pr/35`)

**Features**:
- ✅ Same top navigation and sidebar as homepage
- ✅ **Unified Page Header** (sidebar background color with bottom border, min-height: 120px):
  - Breadcrumb navigation with PR number
  - H1 title with version hashtag (24px, centralized styling)
  - Metadata line with: Private, New Lines count, Last analysis time, Commit hash, Branch path, Warning badge
  - "Review changes" button (aligned to right)
  - Review dropdown modal (Comment, Request changes, Approve options)
- ✅ Tab navigation: Context and Files
- ✅ **Context Tab**:
  - Collapsible Description section with PR details
  - Collapsible Discussion section with:
    - SonarQube bot comment with Quality Gate card
    - User comments
- ✅ **Files Tab**:
  - Quality Gate summary (full-width at top): Passed status with metrics
  - Two-column layout below:
    - Left sidebar: Groups panel (0/1 groups)
    - Right content: File change cards with:
      - Title, "Needs review" badge
      - File count, additions/deletions stats
      - Description and review focus
      - Code diff viewer with syntax highlighting (YAML)

**Design Notes**:
- All card components use transparent backgrounds with borders (stroke-only design)
- Scrollbar always visible to prevent layout shift
- Page headers have consistent height across all pages (min-height: 120px)
- H1 typography centralized via `.page-header h1` selector (24px across all pages)

## Running the Project

### Development Server
```bash
npm run dev
```
The app will be available at: http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Component Details

### PullRequestsPage Component
Location: `app/components/PullRequestsPage.tsx`

**Sections**:
1. **Top Navigation**
   - Logo (SonarQube cloud - actual SVG from `/public/Sonar Qube Cloud.svg`)
   - Main navigation (My Projects, My Issues, My Portfolios, Explore) - left aligned next to logo
   - Right actions (search, notifications, user menu icons)

2. **Sidebar**
   - Project selector dropdown
   - Navigation sections:
     - Overview & Dashboards
     - Analysis (Summary, Issues, Security Hotspots, etc.)
     - Information (Pull Requests, Branches)
   - Badges for "New" and "Beta" features
   - Count indicators

3. **Main Content**
   - Breadcrumb trail
   - Page title with warning badge
   - Search and filter controls
   - Pull requests list with:
     - PR number and title
     - Status (Passed/Failed)
     - Icons
     - Timestamps
     - Commit hashes

4. **Floating Action Button**
   - Fixed position (bottom right)
   - Gradient background
   - Checkmark icon

## Styling Architecture

### CSS Organization
The CSS is organized in four layers, loaded in this specific order:

1. **design-system.css**: Core design tokens (colors, spacing, shadows, etc.)
   - Custom SonarQube Cloud-inspired color palette
   - Contains all CSS custom properties used throughout the app

2. **design-system-typography.css**: Typography design tokens (Echoes system)
   - Font families (Inter, Ubuntu Mono)
   - Font sizes, weights, and line heights
   - Pre-composed typography tokens for consistent text styling

3. **styles.css**: Component-specific styles and layout
   - Uses typography tokens from design-system-typography.css
   - Cards use `background-color: transparent` with borders (stroke-only design)
   - Body has `overflow-y: scroll` to prevent layout shift
   - Dark mode enforced with `!important` flags

4. **globals.css**: Global imports and Tailwind configuration
   - Imports design-system.css, design-system-typography.css, and styles.css BEFORE Tailwind
   - Forces dark mode by default with explicit color values
   - Import order is critical: custom CSS must load before Tailwind to prevent overrides

### Dark Mode
The application is **dark mode by default** with no light mode option:
- Root variables set to dark colors (`--background: #0a0a0a`, `--foreground: #ededed`)
- Body background and text color enforced with `!important` flags
- All components styled using dark theme colors from design-system.css

### Responsive Design
- Desktop: Full sidebar and all columns visible
- Tablet (< 1024px): Condensed navigation, smaller sidebar
- Mobile (< 768px): Collapsible sidebar, simplified PR list layout

## Navigation Structure
```
/ (Pull Requests List)
  └── /pr/:id (Pull Request Detail)
      ├── Context tab (Description, Discussion)
      └── Files tab (Groups, Quality Gate, File changes with diffs)
```

## Future Development

### Completed Features
- ✅ Click-through functionality for PR items
- ✅ PR detail page with Context and Files tabs
- ✅ Collapsible sections
- ✅ Code diff viewer with syntax highlighting

### Planned Features
- [ ] Additional pages (Summary, Issues, Dashboard, etc.)
- [ ] Interactive search and filtering
- [ ] Real data integration
- [ ] User authentication
- [ ] Functional collapsible code diffs
- [ ] Review comments functionality

## Design Decisions

### Color Scheme
- Background colors: #2B2F3F (sidebar/nav), #1E212E (content area)
- Cards use transparent backgrounds with stroke/borders only (no fill)
- Maintains SonarQube Cloud's exact color palette

### Layout
- Scrollbar always visible (`overflow-y: scroll` on body) to prevent layout shift
- **Unified Page Header** across all pages:
  - Sidebar background color (#2B2F3F) with bottom border
  - Consistent minimum height (120px)
  - Contains breadcrumb + title + metadata/badges
- **Files Tab** restructured layout:
  - Quality Gate section moved to full-width top position
  - Two-column layout below: Groups (left, 240px) + File changes (right, 1fr)
- **Review Modal** styling:
  - Compact textarea (100px min-height)
  - Reduced padding on review options
  - Primary CTA color for submit button (#d4a5ff)

## Notes
- All content is currently dummy data
- Navigation between pages is functional (PR list → PR detail)
- Tab switching works (Context ↔ Files)
- Collapsible sections functional (Description, Discussion)
- **Typography**: Uses Echoes Design System with Inter (UI) and Ubuntu Mono (code) fonts
- **Font Loading**: Fonts loaded via Next.js font optimization (next/font/google)

## Resources
- Design reference: SonarQube Cloud interface screenshots
- Framework: [Next.js Documentation](https://nextjs.org/docs)
- Styling: [Tailwind CSS v4](https://tailwindcss.com/docs)

---

## Development History

### Recent Changes
- **January 15, 2026**:
  - **Echoes Typography System Integration**: Implemented full Echoes React Design System typography
    - Installed Inter (sans-serif) and Ubuntu Mono (monospace) fonts via next/font/google
    - Created design-system-typography.css with all Echoes typography tokens
    - Updated layout.tsx to load and configure fonts
    - Updated all typography in styles.css to use Echoes tokens
    - Font loading optimized with Next.js font optimization (swap display strategy)
    - Pre-composed typography tokens for consistent text styling across the app
    - Typography mapping:
      - H1 headings: 24px, 600 weight (upgraded from 400)
      - Quality Gate title: 20px, 600 weight (upgraded from 18px)
      - Body text: Inter, 14px with proper line heights
      - Code blocks: Ubuntu Mono, 14px
      - All UI elements now use professional Echoes tokens

- **January 14, 2026**:
  - **Unified Page Header**: Created consistent header structure across all pages
    - Combined breadcrumb and title into single `.page-header` component
    - Applied sidebar background color (#2B2F3F) with bottom border
    - Set consistent min-height (120px) for uniform appearance
  - **Centralized H1 Typography**: Standardized all H1 elements to 24px via `.page-header h1`
  - **PR Metadata Line**: Added essential information below PR title
    - Private/Public indicator, New Lines count, Last analysis time
    - Commit hash with icon, Branch path with icon
    - Warning badge with fit-content background
  - **Files Tab Restructure**: Reorganized layout for better information hierarchy
    - Moved Quality Gate to full-width position at top
    - Two-column grid below: Groups sidebar (240px) + File changes (1fr)
  - **Review Modal Updates**: Improved UX with compact design
    - Reduced textarea height (200px → 100px)
    - Tightened padding on review options (12px → 6px)
    - Changed submit button to primary accent color
    - Removed icon from submit button

- **January 12, 2026**:
  - Reverted from Echoes design system integration back to custom design system
  - Updated dark mode enforcement in globals.css and styles.css
  - Fixed CSS import order (custom CSS before Tailwind)
  - Documented all design tokens and color values

- **Previous work**:
  - Implemented PR detail pages with Context and Files tabs
  - Added inline comment styling
  - Created collapsible sections for Description and Discussion
  - Built code diff viewer with syntax highlighting

---

**Last Updated**: January 15, 2026
**Created by**: Claude Code Session
