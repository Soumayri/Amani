// ... existing imports ...
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ClientLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!identifier || !password) {
      setError(t("All fields are required"));
      return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(identifier) && !/^\+?\d{6,}$/.test(identifier)) {
      setError(t("Please enter a valid email or phone number"));
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (identifier === "client@amani.com" && password === "test1234") {
        navigate("/dashboard-client");
      } else {
        setError(t("Invalid credentials"));
      }
    }, 1200);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#eaf0f4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          boxShadow: "0 4px 24px rgba(54,91,109,0.08)",
          borderRadius: 24,
          padding: 32,
          minWidth: 320,
          maxWidth: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img src="/LogoAmani.webp" alt="Amani Logo" style={{ width: 80, marginBottom: 16 }} />
        <h2 style={{ marginBottom: 8 }}>{t("Login")}</h2>
        {/* LanguageSelector removed */}
        <input
          type="text"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          placeholder={t("Email or phone number")}
          style={{
            width: "100%",
            padding: "10px 14px",
            margin: "8px 0",
            borderRadius: 8,
            border: "1px solid #cfd8dc",
            fontSize: 16
          }}
          autoComplete="username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder={t("Password")}
          style={{
            width: "100%",
            padding: "10px 14px",
            margin: "8px 0",
            borderRadius: 8,
            border: "1px solid #cfd8dc",
            fontSize: 16
          }}
          autoComplete="current-password"
        />
        {error && (
          <div style={{ color: "#d32f2f", margin: "8px 0", fontSize: 15 }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={!identifier || !password || isLoading}
          style={{
            width: "100%",
            background: "#365b6d",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 0",
            fontSize: 17,
            fontWeight: 600,
            marginTop: 12,
            cursor: (!identifier || !password || isLoading) ? "not-allowed" : "pointer",
            opacity: (!identifier || !password || isLoading) ? 0.7 : 1,
            transition: "opacity 0.2s"
          }}
        >
          {isLoading ? (
            <span className="loader" style={{
              display: "inline-block",
              width: 20,
              height: 20,
              border: "3px solid #fff",
              borderTop: "3px solid #365b6d",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }} />
          ) : t("Sign in")}
        </button>
        <a
          href="/forgot-password"
          style={{
            marginTop: 14,
            color: "#365b6d",
            fontSize: 15,
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          {t("Forgot password?")}
        </a>
      </form>
      <footer style={{ marginTop: 32, color: "#7b8a99", fontSize: 14 }}>
        © {new Date().getFullYear()} Amani. {t("All rights reserved")}
      </footer>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default ClientLogin;