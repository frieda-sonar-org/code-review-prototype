# Code Review v1 - SonarQube Cloud Prototype

A prototype application that demonstrates a comprehensive code review experience in SonarQube Cloud, covering the complete PR journey from understanding to reviewing pull requests.

## Overview

This prototype replicates the SonarQube Cloud interface to showcase the end-to-end pull request review workflow. It demonstrates how developers can:

- **Understand PRs**: View pull request details, descriptions, and context
- **Browse PRs**: Navigate through pull request lists and filter relevant changes
- **Review PRs**: Examine code changes, quality metrics, and provide feedback

## Features

### Pull Request List
- Browse all pull requests in a project
- View PR status indicators (Passed/Failed)
- Quick access to PR metadata (commit hashes, timestamps)
- Search and filter functionality

### Pull Request Detail View
- **Context Tab**:
  - PR description and metadata
  - Discussion thread with comments
  - Quality Gate status cards
  - SonarQube bot integration feedback

- **Files Tab**:
  - File change grouping
  - Code diff viewer with syntax highlighting
  - Quality metrics (duplications, security hotspots, issues)
  - Inline code comments with reply/resolve actions
  - Line-by-line code review capabilities

### Review Experience
- **Review Changes** dropdown panel
- Multiple review types:
  - Comment: Submit general feedback
  - Request Changes: Request modifications before merge
  - Approve: Approve the pull request for merging
- Rich text review composition

### Quality Gate Integration
- Visual Quality Gate status indicators
- Detailed metrics display:
  - Duplicated Lines percentage
  - Security Hotspots reviewed
  - Issue counts
- Per-file quality metrics

## Tech Stack

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Custom CSS with design system + Tailwind CSS v4
- **TypeScript**: v5

## Design System

The application uses a custom SonarQube Cloud-inspired design system with:
- Dark mode by default
- Comprehensive color palette for status indicators, accents, and UI elements
- Design tokens for spacing, shadows, and transitions
- Consistent component styling throughout

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
code-review-v1/
├── app/
│   ├── components/
│   │   └── PullRequestsPage.tsx    # Main Pull Requests list component
│   ├── pr/
│   │   └── [id]/
│   │       └── page.tsx            # PR detail page (dynamic route)
│   ├── design-system.css           # Color palette and design tokens
│   ├── styles.css                  # Component-specific styles
│   ├── globals.css                 # Global styles and imports
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page
├── public/
│   └── Sonar Qube Cloud.svg        # SonarQube Cloud logo
└── package.json
```

## User Journey

### 1. Understanding PRs
Users land on the Pull Requests list page where they can:
- See all open pull requests at a glance
- View status indicators (Quality Gate passed/failed)
- Check recent activity timestamps
- Access commit information

### 2. Browsing PRs
Users can navigate through pull requests:
- Search for specific pull requests
- Filter by various criteria
- Click on any PR to view details

### 3. Reviewing PRs
Once in a PR detail page, users can:

**Context Tab**:
- Read the PR description and understand the changes
- Follow discussion threads
- View Quality Gate results from SonarQube analysis

**Files Tab**:
- Browse changed files organized by groups
- View code diffs with syntax highlighting
- See quality metrics per file
- Add inline comments on specific code lines
- Review quality metrics (duplications, issues, security hotspots)

**Review Actions**:
- Submit comments, request changes, or approve the PR
- Provide comprehensive review feedback
- Track review status

## Key Design Decisions

### UI/UX
- **Dark Mode by Default**: Optimized for developer workflows
- **Transparent Card Design**: Cards use borders instead of filled backgrounds for a clean look
- **Persistent Scrollbar**: Prevents layout shifts during navigation
- **Syntax Highlighting**: YAML syntax highlighting in code diffs
- **Collapsible Sections**: Allows users to focus on relevant content

### Architecture
- **Component-Based**: Modular design for maintainability
- **Dynamic Routing**: Next.js app router for PR detail pages
- **Custom CSS**: Predictable styling with CSS custom properties
- **Design Tokens**: Centralized design system for consistency

## Current Limitations

This is a prototype with dummy data. The following features are not yet implemented:
- Real data integration with SonarQube API
- User authentication
- Interactive search and filtering
- Functional code diff collapsing
- Persistent review comments
- Live Quality Gate updates

## Future Enhancements

- [ ] Real-time SonarQube integration
- [ ] User authentication and authorization
- [ ] Advanced filtering and search
- [ ] Comment threading and discussions
- [ ] Review approval workflows
- [ ] Email notifications
- [ ] Mobile responsive improvements
- [ ] Accessibility enhancements (WCAG compliance)

## Documentation

For detailed technical documentation, see [claude.md](claude.md).

## Contributing

This is a prototype project. If you'd like to contribute or provide feedback, please reach out to the development team.

## License

This is a prototype project for demonstration purposes.

---

**Last Updated**: January 12, 2026
**Created by**: Claude Code Session
