// src/portal/routes/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const PortalSpinner = () => (
  <div className="portal-loading" role="status" aria-label="Loading portal">
    <div className="portal-loading__spinner" />
    <p className="portal-loading__text">Loading your portal…</p>
  </div>
);

/**
 * Protects portal routes.
 * - Shows a spinner while auth state is being resolved.
 * - Redirects to /client-portal if the user is not authenticated.
 * - Redirects if the user's role does not match requiredRole.
 */
const ProtectedRoute = ({ children, requiredRole = "client" }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <PortalSpinner />;

  if (!user) {
    return (
      <Navigate to="/client-portal" state={{ from: location }} replace />
    );
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/client-portal" replace />;
  }

  return children;
};

export default ProtectedRoute;
