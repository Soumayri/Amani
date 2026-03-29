// src/portal/auth/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import { mockLogin, mockVerifyToken } from "./mockAuth";

export const AuthContext = createContext(null);

const TOKEN_KEY = "amani_auth_token";

/**
 * AuthProvider wraps the app and provides auth state globally.
 * Exposes: user, isLoading, error, login(), logout(), clearError()
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // On mount: check for a stored token and verify it silently
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setIsLoading(false);
      return;
    }
    mockVerifyToken(token)
      .then((verifiedUser) => setUser(verifiedUser))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setIsLoading(false));
  }, []);

  /**
   * Authenticates the user.
   * Returns { success: true } or { success: false, error: string }
   */
  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user: loggedInUser, token } = await mockLogin(email, password);
      localStorage.setItem(TOKEN_KEY, token);
      setUser(loggedInUser);
      return { success: true };
    } catch (err) {
      const message = err.message || "An error occurred. Please try again.";
      setError(message);
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  /** Logs the user out and clears stored token */
  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, login, logout, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
