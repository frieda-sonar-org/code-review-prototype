'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const basePath = process.env.NODE_ENV === 'production' ? '/code-review-prototype' : '';

export default function SummaryClient() {
  const params = useParams();
  const prId = params.id as string;

  const prData = {
    number: prId,
    title: 'SC-37654 Fix Mise',
    version: '2',
    branch: 'felix/fixMise2 → master',
    commit: 'd785751e',
    timestamp: '1 month ago'
  };

  return (
    <div>
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="top-nav-left">
          <button className="menu-toggle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="logo">
            <img src={`${basePath}/Sonar Qube Cloud.svg`} alt="SonarQube Cloud" width="157" height="36" />
          </div>
          <nav className="top-nav-center">
            <a href="#" className="nav-link">My Projects</a>
            <a href="#" className="nav-link">My Issues</a>
            <a href="#" className="nav-link nav-dropdown">
              My Portfolios
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4h8L6 8z"/>
              </svg>
            </a>
            <a href="#" className="nav-link">Explore</a>
          </nav>
        </div>

        <div className="top-nav-right">
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn notification-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6zM8 16a2 2 0 104 0"/>
            </svg>
            <span className="notification-badge">1</span>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="10" r="8"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="6" height="6" fill="currentColor"/>
              <rect x="11" y="3" width="6" height="6" fill="currentColor"/>
              <rect x="3" y="11" width="6" height="6" fill="currentColor"/>
              <rect x="11" y="11" width="6" height="6" fill="currentColor"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="2" y="2" width="7" height="7" rx="1"/>
              <rect x="11" y="2" width="7" height="7" rx="1"/>
              <rect x="2" y="11" width="7" height="7" rx="1"/>
              <rect x="11" y="11" width="7" height="7" rx="1"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="project-selector">
            <div className="project-icon">A</div>
            <div className="project-info">
              <div className="project-name">asast-scanner-pipe...</div>
              <div className="project-label">Project</div>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z"/>
            </svg>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="12" height="12" rx="1"/>
              </svg>
              Overview
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5"/>
                <rect x="9" y="2" width="5" height="5"/>
                <rect x="2" y="9" width="5" height="5"/>
                <rect x="9" y="9" width="5" height="5"/>
              </svg>
              Dashboards
              <span className="badge-new">New</span>
              <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 2l4 4-4 4V2z"/>
              </svg>
            </a>

            <div className="sidebar-section">Analysis</div>
            <a href="#" className="sidebar-link sidebar-link-active">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="10" width="3" height="4"/>
                <rect x="6" y="6" width="3" height="8"/>
                <rect x="10" y="2" width="3" height="12"/>
              </svg>
              Summary
            </a>
            <Link href={`/pr/${prId}`} className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2l4 4-4 4V2zM8 6l4 4-4 4V6z"/>
              </svg>
              Review
            </Link>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h12v12H2V2zm2 2v8h8V4H4z"/>
              </svg>
              Issues
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="6"/>
              </svg>
              Security Hotspots
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2L6 6H2l4 4-2 6 4-3 4 3-2-6 4-4h-4l-2-4z"/>
              </svg>
              Dependency Risks
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h12l-6 12L2 2z"/>
              </svg>
              Security Reports
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="4" height="4"/>
                <rect x="7" y="2" width="4" height="4"/>
                <rect x="12" y="2" width="2" height="4"/>
                <rect x="2" y="7" width="4" height="7"/>
                <rect x="7" y="7" width="4" height="7"/>
                <rect x="12" y="7" width="2" height="7"/>
              </svg>
              Architecture
              <span className="badge-beta">Beta</span>
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 6h12v2H2V6zm0 4h12v2H2v-2z"/>
              </svg>
              Measures
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h12v12H2V2zm2 2v8h8V4H4z"/>
                <path d="M6 6h4v4H6V6z"/>
              </svg>
              Code
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="5" cy="5" r="2"/>
                <circle cx="11" cy="5" r="2"/>
                <circle cx="8" cy="11" r="2"/>
                <path d="M5 7l3 4m3-4l-3 4"/>
              </svg>
              Dependencies
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2v12M2 8h12"/>
              </svg>
              Activity
            </a>

            <div className="sidebar-section">Information</div>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2L2 6v4l6 4 6-4V6l-6-4z"/>
              </svg>
              Agent activity
            </a>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="6"/>
                <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Project Information
            </a>
            <Link href="/" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2l4 4-4 4V2zM8 6l4 4-4 4V6z"/>
              </svg>
              Pull Requests
              <span className="count-badge">10</span>
            </Link>
            <a href="#" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h12v2H2V2zm0 4h8v2H2V6zm0 4h10v2H2v-2z"/>
              </svg>
              Branches
              <span className="count-badge">1</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Page Header */}
          <div className="page-header">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <a href="#" className="breadcrumb-link">SonarSource</a>
              <span className="breadcrumb-separator">/</span>
              <a href="#" className="breadcrumb-link">asast-scanner-pipeline</a>
              <span className="breadcrumb-separator">/</span>
              <Link href="/" className="breadcrumb-link">Pull Requests</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{prData.number} - {prData.title}</span>
            </div>

            {/* Title section */}
            <h1 className="pr-detail-title">
              {prData.number} - {prData.title} <span className="pr-version">#{prData.version}</span>
            </h1>
            <div className="page-metadata">
              <span className="metadata-item">Private</span>
              <span className="metadata-separator"></span>
              <span className="metadata-item">0 New Lines</span>
              <span className="metadata-separator"></span>
              <span className="metadata-item">Last analysis {prData.timestamp}</span>
              <span className="metadata-separator"></span>
              <span className="metadata-item">{prData.commit}</span>
              <span className="metadata-separator"></span>
              <span className="metadata-item">{prData.branch}</span>
              <span className="metadata-separator"></span>
              <div className="warning-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2l6 12H2L8 2z"/>
                  <path d="M8 7v3M8 11h.01" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Last analysis had warnings
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="warning-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2l8 14H2L10 2z"/>
                    <path d="M10 7v4M10 13h.01" stroke="#000" strokeWidth="2"/>
                  </svg>
                  <span>Last analysis had a warning</span>
                </div>
                <button className="btn-view-warning">View warning</button>
              </div>

              {/* Quality Gate Section */}
              <div className="quality-gate-section">
                <div className="quality-gate-header">
                  <h2>Quality Gate: <a href="#" className="quality-gate-link">SonarSource way - Light</a></h2>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginLeft: '8px', color: 'var(--color-text-muted)' }}>
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M8 4v4M8 10h.01"/>
                  </svg>
                </div>

                <div className="quality-gate-status">
                  <div className="status-icon-large">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect width="80" height="80" rx="4" fill="#4CAF50"/>
                      <path d="M24 40l12 12 20-24" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h1 className="status-text">Passed</h1>
                </div>

                {/* Metrics Grid */}
                <div className="metrics-grid">
                  {/* Row 1 */}
                  <div className="metric-card">
                    <div className="metric-title">New Issues</div>
                    <div className="metric-value">0</div>
                    <div className="metric-requirement">Required: ≤ 0</div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-title">Accepted Issues</div>
                    <div className="metric-value">0</div>
                    <div className="metric-description">Valid issues that were not fixed</div>
                    <button className="metric-info-button">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M8 4v4M8 10h.01"/>
                      </svg>
                    </button>
                  </div>

                  <div className="metric-card">
                    <div className="metric-title">Coverage</div>
                    <div className="metric-value">25.0%</div>
                    <div className="metric-description">No conditions set<br/>on 8 New Lines to cover</div>
                    <div className="metric-estimate">50.1% Estimated after merge</div>
                    <div className="metric-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="16" stroke="#f44336" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="20" r="16" stroke="#4CAF50" strokeWidth="3" fill="none" strokeDasharray="100.53" strokeDashoffset="75.4" transform="rotate(-90 20 20)" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="metric-card">
                    <div className="metric-title">Duplications</div>
                    <div className="metric-value">0.0%</div>
                    <div className="metric-description">No conditions set<br/>on 16 New Lines</div>
                    <div className="metric-estimate">0.5% Estimated after merge</div>
                    <div className="metric-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="16" fill="#4CAF50"/>
                      </svg>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-title">Security Hotspots</div>
                    <div className="metric-value">0</div>
                    <div className="metric-description">No conditions set</div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-title">Dependency Risks</div>
                    <div className="metric-value">0</div>
                    <div className="metric-description">No conditions set</div>
                  </div>
                </div>
              </div>
        </main>
      </div>
    </div>
  );
}
