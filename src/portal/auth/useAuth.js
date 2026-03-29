// src/portal/auth/useAuth.js
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

/**
 * Hook to access the auth context.
 * Must be used inside an <AuthProvider>.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an <AuthProvider>.");
  }
  return context;
};
