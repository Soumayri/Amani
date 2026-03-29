// src/portal/components/PortalLayout.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PortalSidebar from "./PortalSidebar";
import PortalTopbar from "./PortalTopbar";

/**
 * PortalLayout is the shell for all portal pages.
 * It renders the sidebar, topbar, and a content area via <Outlet />.
 * All protected portal routes nest inside this layout.
 */
const PortalLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle  = () => setIsSidebarOpen((prev) => !prev);
  const handleClose   = () => setIsSidebarOpen(false);

  return (
    <div className="portal-layout">
      <PortalSidebar isOpen={isSidebarOpen} onClose={handleClose} />

      <div className="portal-layout__main">
        <PortalTopbar onMenuToggle={handleToggle} />
        <main
          className="portal-layout__content"
          role="main"
          id="portal-main-content"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
