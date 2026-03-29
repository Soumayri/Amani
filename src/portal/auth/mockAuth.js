// src/portal/auth/mockAuth.js
// ---------------------------------------------------------------------------
// Mock authentication service.
// To connect a real backend, replace mockLogin and mockVerifyToken with
// actual API calls (e.g. axios.post("/api/auth/login", { email, password })).
// The AuthContext consumes these functions — nothing else needs to change.
// ---------------------------------------------------------------------------

const MOCK_USERS = [
  {
    id: "c-001",
    email: "client@amani.com",
    password: "test1234",
    role: "client",
    firstName: "Sophie",
    lastName: "Mercier",
  },
];

const MOCK_TOKEN = "amani_mock_token_c001";

/**
 * Simulates a login API call.
 * Replace with: return await api.post("/api/auth/login", { email, password })
 */
export const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const user = MOCK_USERS.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const { password: _removed, ...safeUser } = user;
  return { user: safeUser, token: MOCK_TOKEN };
};

/**
 * Simulates a token verification call (called on app load).
 * Replace with: return await api.get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
 */
export const mockVerifyToken = async (token) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (token === MOCK_TOKEN) {
    const { password: _removed, ...safeUser } = MOCK_USERS[0];
    return safeUser;
  }

  throw new Error("Token invalid or expired.");
};
