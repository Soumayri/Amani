// src/portal/components/PortalTopbar.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth/useAuth";
import PortalLangSwitcher from "./PortalLangSwitcher";

const PAGE_TITLES = {
  "/client/dashboard": "Dashboard",
  "/client/property":  "My Property",
  "/client/reports":   "Reports",
  "/client/plan":      "My Plan",
  "/client/requests":  "Requests",
  "/client/profile":   "Profile",
};

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const PortalTopbar = ({ onMenuToggle }) => {
  const { user } = useAuth();
  const { t }    = useTranslation();
  const { pathname } = useLocation();

  const pageTitle = t(PAGE_TITLES[pathname] || "Portal");

  return (
    <header className="portal-topbar" role="banner">
      <div className="portal-topbar__left">
        <button
          className="portal-topbar__menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <HamburgerIcon />
        </button>
        <h1 className="portal-topbar__title">{pageTitle}</h1>
      </div>

      <div className="portal-topbar__right">
        <PortalLangSwitcher />

        {user && (
          <div className="portal-topbar__user">
            <div className="portal-topbar__avatar" aria-hidden="true">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <span className="portal-topbar__name">{user.firstName}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default PortalTopbar;
