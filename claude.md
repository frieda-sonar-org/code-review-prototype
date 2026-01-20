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
code-review-prototype/
├── app/
│   ├── components/
│   │   ├── PullRequestsPage.tsx    # Main Pull Requests page component
│   │   ├── CoverageIndicator.tsx   # Donut-shaped coverage indicator
│   │   └── AddCommentButton.tsx    # Inline comment button
│   ├── pr/
│   │   └── [id]/
│   │       ├── page.tsx            # PR detail page (server component)
│   │       └── PRDetailClient.tsx  # PR detail client component
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
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── next.config.ts                  # Next.js configuration with static export
├── package.json
├── DEPLOYMENT.md                   # GitHub Pages deployment instructions
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
- `--color-accent-primary`: #4b9fd8 (Blue - primary actions)
- `--color-accent-primary-hover`: #6bb8ec
- `--color-accent-primary-active`: #85c5f0
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
- `--color-badge-new`: #4b9fd8 (Blue - "New" badge)
- `--color-badge-new-bg`: rgba(75, 159, 216, 0.2)
- `--color-badge-beta`: #4b9fd8 (Blue - "Beta" badge)
- `--color-badge-beta-bg`: rgba(75, 159, 216, 0.2)
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
    - Left sidebar: Groups panel (0/3 groups) with:
      - Expandable file lists per group
      - Green checkmark and text when group is marked as reviewed
      - Folder icons for unreviewed groups
    - Right content: File change cards with:
      - Title, "Needs review" badge
      - File count, additions/deletions stats with coverage indicators
      - Coverage badges (Coverage %, Duplicated Lines %, Issues count)
      - Description and review focus
      - Individual file sections with:
        - Chevron toggle to expand/collapse code diff
        - Check button to mark file as reviewed (turns green)
        - Code diff viewer with syntax highlighting
        - Inline comment buttons on each line (appears on hover)
      - "Mark as reviewed" button at group level that:
        - Marks all files as reviewed
        - Collapses the group
        - Toggles to "Mark as needs review" button
        - Updates sidebar group status

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

### Build for Production (Static Export)
```bash
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 NODE_ENV=production npm run build
```

This generates a static export in the `out/` directory for deployment to GitHub Pages.

### Build for Server
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Component Details

### Reusable Components

#### CoverageIndicator Component
Location: `app/components/CoverageIndicator.tsx`

A donut-shaped circular coverage indicator that visually represents percentage-based metrics.

**Features**:
- **Full green ring**: 100% coverage (all good)
- **Full red ring**: 0% coverage (all bad)
- **Partial ring**: Green/red donut chart for values in between
- **Inverted mode**: Reverses color logic for metrics where lower is better (e.g., duplicated lines)

**Props**:
- `percentage`: number (0-100)
- `size`: number (default: 16px)
- `inverted`: boolean (default: false)

**Usage**:
```tsx
<CoverageIndicator percentage={85} size={16} />
<CoverageIndicator percentage={12} size={16} inverted={true} />
```

#### AddCommentButton Component
Location: `app/components/AddCommentButton.tsx`

A reusable button with a white filled speech bubble icon and black plus symbol for adding inline comments.

**Features**:
- White speech bubble with black plus icon
- Appears on hover in code diff views
- Consistent styling across all usage

**Props**:
- `onClick`: function (optional)
- `ariaLabel`: string (default: "Add comment")

**Usage**:
```tsx
<AddCommentButton onClick={handleAddComment} />
```

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

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Live URL**: https://frieda-sonar-org.github.io/code-review-prototype/

### Configuration
- **Repository**: `frieda-sonar-org/code-review-prototype`
- **Base Path**: `/code-review-prototype` (configured in next.config.ts)
- **Deployment**: Automatic on push to `main` branch
- **Build Method**: Static export (`output: 'export'`)

### Key Files
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.ts` - Next.js configuration with:
  - Static export enabled in production
  - Base path for GitHub Pages subdirectory
  - Asset prefix for correct resource URLs
  - Unoptimized images (required for static export)

### How It Works
1. Push to `main` branch triggers GitHub Actions
2. Workflow installs dependencies and runs production build
3. Static files are generated in `out/` directory
4. Files are deployed to GitHub Pages
5. Site is accessible at the base path URL

### Static Generation
- Homepage: Pre-rendered at build time
- PR Detail Pages: 50 pages pre-generated (IDs 1-50) via `generateStaticParams()`
- All routes use Next.js Link component for proper base path handling

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

## Future Development

### Completed Features
- ✅ Click-through functionality for PR items
- ✅ PR detail page with Context and Files tabs
- ✅ Collapsible sections (Description, Discussion, Files)
- ✅ Code diff viewer with syntax highlighting
- ✅ File and group review functionality
  - Individual file check buttons with green indicators
  - Chevron toggles for expanding/collapsing diffs
  - Group-level "Mark as reviewed" / "Mark as needs review" buttons
  - Synchronized review state across sidebar and file cards
- ✅ Coverage indicators with donut-shaped visualizations
- ✅ Inline comment buttons on code lines
- ✅ Client-side navigation using Next.js Link component

### Planned Features
- [ ] Additional pages (Summary, Issues, Dashboard, etc.)
- [ ] Interactive search and filtering
- [ ] Real data integration
- [ ] User authentication
- [ ] Functional inline comment submission and display
- [ ] Review comments threading and replies
- [ ] Real-time collaboration features

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
  - Primary CTA color for submit button (blue)

## Notes
- All content is currently dummy data
- Navigation between pages is functional (PR list → PR detail → PR list)
  - Uses Next.js Link component for client-side navigation
  - Proper base path handling for GitHub Pages deployment
- Tab switching works (Context ↔ Files)
- Collapsible sections functional (Description, Discussion, File Groups, Individual Files)
- File review workflow fully functional:
  - 6 files across 3 groups with individual and group-level review states
  - Dual-control system: chevron for visibility, check button for review status
  - Review state synchronized across buttons, sidebar, and visual indicators
- **Typography**: Uses Echoes Design System with Inter (UI) and Ubuntu Mono (code) fonts
- **Font Loading**: Fonts loaded via Next.js font optimization (next/font/google)
- **Components**: Reusable CoverageIndicator and AddCommentButton components

## Resources
- Design reference: SonarQube Cloud interface screenshots
- Framework: [Next.js Documentation](https://nextjs.org/docs)
- Styling: [Tailwind CSS v4](https://tailwindcss.com/docs)

---

## Development History

### Recent Changes
- **January 20, 2026**:
  - **File Review Functionality**: Implemented comprehensive file and group review system
    - Added individual file check buttons with green checkmark indicators
    - Implemented chevron toggles for expanding/collapsing file diffs independently
    - Separated check state (review status) from expand state (visibility)
    - Created "Mark as reviewed" buttons at group level that:
      - Mark all files in group as reviewed
      - Collapse the entire group
      - Toggle to "Mark as needs review" button with white stroke/text style
      - Update files-groups sidebar with green text and tick icons
    - Added toggle functionality to revert group review status
    - Synchronized review state across multiple UI elements (buttons, sidebar, individual files)
  - **Component Enhancements**:
    - Created `CoverageIndicator` component: Donut-shaped circular indicators
      - Full green ring for 100% coverage (all good)
      - Full red ring for 0% coverage (all bad)
      - Partial green/red ring for values in between
      - Support for inverted mode (for metrics where lower is better, e.g., duplicated lines)
    - Created `AddCommentButton` component: White speech bubble with black plus icon
      - Reusable inline comment button for code diff views
      - Appears on hover for each code line
  - **Code Diff Features**:
    - Added coverage badges to file stats (Coverage, Duplicated Lines, Issues)
    - Integrated CoverageIndicator component for visual metrics
    - Enhanced hover states for inline commenting
    - Added support for 6 files across 3 groups with full review workflow
  - **Navigation Improvements**:
    - Updated "Pull Requests" link in sidebar to use Next.js Link component
    - Updated breadcrumb "Pull Requests" link to use Next.js Link component
    - Enabled proper client-side navigation between PR detail page and homepage
  - **UI/UX Improvements**:
    - Chevron rotation animation when expanding/collapsing files
    - Check button color changes to green when marked as reviewed
    - Group icons in sidebar change to green checkmarks when group is reviewed
    - Smooth transitions for all interactive states
    - Dual-control system: chevron for visibility, check button for review status

- **January 16, 2026**:
  - **GitHub Pages Deployment**: Successfully deployed to GitHub Pages
    - Fixed npm registry authentication issue (JFrog Artifactory → public npm)
    - Updated package-lock.json to use public registry URLs
    - Configured GitHub Actions workflow for automatic deployment
    - Set up static export with proper base path configuration
  - **Routing Fixes**: Updated PR links to use Next.js Link component
    - Changed from plain `<a>` tags to `Link` component for proper base path handling
    - Links now correctly navigate to `/code-review-prototype/pr/:id`
  - **Asset Path Fixes**: Added base path to static assets
    - SonarQube logo now loads correctly on both homepage and PR detail pages
    - Created base path constant for consistent URL handling across components
  - **Color Scheme Update**: Changed primary accent color from purple to blue
    - Primary accent: #d4a5ff → #4b9fd8
    - Updated all button colors, badges, and accent elements
    - Maintains consistency with SonarQube Cloud's blue theme
  - **Hover State Improvements**: Enhanced inline comment interaction
    - Hovering line number now highlights entire code line and comment input row
    - Unified hover behavior for consistent user experience
    - Comment icon appears on hover for all related elements

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

**Last Updated**: January 20, 2026
**Created by**: Claude Code Session
