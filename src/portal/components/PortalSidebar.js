// src/portal/components/PortalSidebar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const logoAmani = "/LogoAmani.webp";

// Lightweight inline SVG icons — no external dependency
const Icons = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  property: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  reports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  requests: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16,17 21,12 16,7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
};

const NAV_ITEMS = [
  { to: "/client/dashboard", icon: Icons.dashboard, label: "Dashboard", disabled: false },
  { to: "/client/property",  icon: Icons.property,  label: "My Property", disabled: true },
  { to: "/client/reports",   icon: Icons.reports,   label: "Reports",     disabled: true },
  { to: "/client/plan",      icon: Icons.plan,      label: "My Plan",     disabled: true },
  { to: "/client/requests",  icon: Icons.requests,  label: "Requests",    disabled: true },
  { to: "/client/profile",   icon: Icons.profile,   label: "Profile",     disabled: true },
];

const PortalSidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/client-portal");
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="portal-sidebar__overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`portal-sidebar${isOpen ? " portal-sidebar--open" : ""}`}
        role="navigation"
        aria-label="Client portal navigation"
      >
        {/* Logo */}
        <div className="portal-sidebar__logo">
          <img src={logoAmani} alt="Amani Home" />
        </div>

        {/* User info */}
        {user && (
          <div className="portal-sidebar__user">
            <div className="portal-sidebar__avatar" aria-hidden="true">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div className="portal-sidebar__user-info">
              <span className="portal-sidebar__user-name">
                {user.firstName} {user.lastName}
              </span>
              <span className="portal-sidebar__user-role">Client</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="portal-sidebar__nav">
          <ul className="portal-sidebar__nav-list" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="portal-sidebar__nav-item">
                {item.disabled ? (
                  <span
                    className="portal-sidebar__nav-link portal-sidebar__nav-link--disabled"
                    aria-disabled="true"
                    title="Coming soon"
                  >
                    <span className="portal-sidebar__nav-icon">{item.icon}</span>
                    <span className="portal-sidebar__nav-label">{item.label}</span>
                    <span className="portal-sidebar__nav-soon">Soon</span>
                  </span>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `portal-sidebar__nav-link${isActive ? " portal-sidebar__nav-link--active" : ""}`
                    }
                    onClick={onClose}
                  >
                    <span className="portal-sidebar__nav-icon">{item.icon}</span>
                    <span className="portal-sidebar__nav-label">{item.label}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="portal-sidebar__footer">
          <button
            className="portal-sidebar__logout"
            onClick={handleLogout}
            type="button"
          >
            <span className="portal-sidebar__nav-icon">{Icons.logout}</span>
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default PortalSidebar;
