import React from "react";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="notfound-page"
      style={{
        backgroundImage: 'url("/img/404-bg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <div className="notfound-content">
        <h1>Oops... Page Not Found</h1>
        <p>The page you're looking for doesn't exist or may have been moved.</p>
        <p>No worries — we'll help you get back on track.</p>
        <button className="cta-button" onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
