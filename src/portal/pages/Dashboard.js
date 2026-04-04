// src/portal/pages/Dashboard.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth/useAuth";
import { mockClientData } from "../data/mockClientData";
import PortalBadge from "../components/PortalBadge";
import { formatDate } from "../utils/formatDate";

// ─── Icons ────────────────────────────────────────────────────────────────────

const LocationIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const PhotoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M21 2l-9.6 9.6" />
    <path d="M15.5 7.5l3 3" />
  </svg>
);

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const HomeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const AlertIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── Status Hero ──────────────────────────────────────────────────────────────
// Answers: "Is my property okay?" and "Do I need to do anything?"

const StatusHero = ({ user, property, nextVisit }) => {
  const { t } = useTranslation();
  const isAttention = property?.status === "attention";

  return (
    <div className={`dashboard__hero${isAttention ? " dashboard__hero--attention" : ""}`}>
      <div className="dashboard__hero-content">
        <p className="dashboard__hero-greeting">
          {t("Welcome back")}, {user?.firstName || ""}
        </p>
        <div className="dashboard__hero-property">
          <h2 className="dashboard__hero-title">{property?.name}</h2>
          <PortalBadge status={property?.status} />
        </div>
        <p className="dashboard__hero-address">
          <LocationIcon />
          {property?.address}
        </p>
        <p className="dashboard__hero-reassurance">
          {isAttention ? t("Action required on your property.") : t("Your property is being cared for.")}
        </p>
      </div>

      <div className="dashboard__hero-meta">
        <div className="dashboard__hero-next">
          <span className="dashboard__hero-next-label">
            {t("Next scheduled visit")}
          </span>
          {nextVisit ? (
            <>
              <span className="dashboard__hero-next-date">
                {formatDate(nextVisit.scheduledDate)}
              </span>
              <span className="dashboard__hero-next-type">
                {nextVisit.type}
              </span>
            </>
          ) : (
            <span className="dashboard__hero-next-date dashboard__hero-next-date--empty">
              {t("To be scheduled")}
            </span>
          )}
        </div>

        <div className={`dashboard__hero-badge${isAttention ? " dashboard__hero-badge--attention" : " dashboard__hero-badge--ok"}`}>
          {isAttention ? <AlertIcon /> : <CheckCircleIcon />}
          {isAttention ? t("Action required") : t("No action required")}
        </div>
      </div>
    </div>
  );
};

// ─── Next Service Card ────────────────────────────────────────────────────────
// Answers: "What is coming up?"

const NextServiceCard = ({ visit }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard__card">
      <p className="dashboard__card-label">{t("Next scheduled service")}</p>
      {visit ? (
        <>
          <div className="dashboard__card-body">
            <h3 className="dashboard__card-date">{formatDate(visit.scheduledDate)}</h3>
            <p className="dashboard__card-type">{visit.type}</p>
            <p className="dashboard__card-detail">
              <ClockIcon /> {visit.timeSlot}
            </p>
            <p className="dashboard__card-operator">
              {t("Assigned to")}: {visit.assignedOperator}
            </p>
          </div>
          <div className="dashboard__card-footer">
            <PortalBadge status={visit.status} />
          </div>
        </>
      ) : (
        <p className="dashboard__empty">
          {t("No upcoming service scheduled. We will notify you when your next visit is confirmed.")}
        </p>
      )}
    </div>
  );
};

// ─── Latest Report Card ───────────────────────────────────────────────────────
// Answers: "What happened recently?"

const LatestReportCard = ({ report }) => {
  const { t } = useTranslation();

  if (!report) {
    return (
      <div className="dashboard__card">
        <p className="dashboard__card-label">{t("Latest report")}</p>
        <p className="dashboard__empty">
          {t("No reports yet. Your first report will appear here after your first Home Check visit.")}
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard__card">
      <p className="dashboard__card-label">{t("Latest report")}</p>
      <div className="dashboard__card-body">
        <p className="dashboard__card-date-small">{formatDate(report.visitDate)}</p>
        <h3 className="dashboard__card-title-main">{report.type}</h3>
        <p className="dashboard__card-summary">{report.summary}</p>
        <p className="dashboard__card-detail">
          <PhotoIcon /> {report.photosCount} {t("photos")}
        </p>
      </div>
      <div className="dashboard__card-footer">
        {report.downloadUrl ? (
          <a
            href={report.downloadUrl}
            className="dashboard__card-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("View report")} →
          </a>
        ) : (
          <PortalBadge status={report.status} />
        )}
      </div>
    </div>
  );
};

// ─── Key Status Card ──────────────────────────────────────────────────────────

const KEY_STATUS_LABELS = {
  stored:  "Securely stored",
  in_use:  "Temporarily in use",
  returned: "Returned to owner",
};

const KeyStatusCard = ({ keyStatus }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard__card dashboard__card--compact">
      <p className="dashboard__card-label">{t("Key status")}</p>
      <div className="dashboard__icon-row">
        <div className="dashboard__icon-wrap">
          <KeyIcon />
        </div>
        <div>
          <p className="dashboard__icon-title">
            {t(KEY_STATUS_LABELS[keyStatus?.status] || "Securely stored")}
          </p>
          {keyStatus?.location && (
            <p className="dashboard__icon-sub">{keyStatus.location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Seasonal Care Card ───────────────────────────────────────────────────────

const SeasonalCareCard = ({ seasonalCare }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard__card dashboard__card--compact">
      <p className="dashboard__card-label">{t("Seasonal care")}</p>
      <div className="dashboard__icon-row">
        <div className="dashboard__icon-wrap dashboard__icon-wrap--green">
          <LeafIcon />
        </div>
        <div>
          {seasonalCare?.lastDate && (
            <p className="dashboard__icon-title">
              {t("Last visit")}: {formatDate(seasonalCare.lastDate)}
            </p>
          )}
          <p className="dashboard__icon-sub">
            {seasonalCare?.nextPlannedDate
              ? `${t("Next planned")}: ${formatDate(seasonalCare.nextPlannedDate)}`
              : t("Not yet scheduled")}
          </p>
        </div>
      </div>
      {seasonalCare?.status && (
        <div className="dashboard__card-footer">
          <PortalBadge status={seasonalCare.status} />
        </div>
      )}
    </div>
  );
};

// ─── Subscription Card ────────────────────────────────────────────────────────

const SubscriptionCard = ({ subscription }) => {
  const { t } = useTranslation();
  if (!subscription) return null;

  const remaining = subscription.visitsPerYear - subscription.visitsUsed;
  const progress =
    subscription.visitsPerYear > 0
      ? Math.round((subscription.visitsUsed / subscription.visitsPerYear) * 100)
      : 0;

  return (
    <div className="dashboard__card dashboard__card--compact">
      <p className="dashboard__card-label">{t("My plan")}</p>
      <div className="dashboard__card-body">
        <h3 className="dashboard__plan-name">{subscription.plan}</h3>
        <p className="dashboard__card-detail">
          {t("Renews on")} {formatDate(subscription.renewalDate)}
        </p>
        <div className="dashboard__visits-bar">
          <div className="dashboard__visits-label">
            <span>{t("Visits used")}</span>
            <span>
              {subscription.visitsUsed} / {subscription.visitsPerYear}
            </span>
          </div>
          <div className="dashboard__visits-track">
            <div
              className="dashboard__visits-fill"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={subscription.visitsUsed}
              aria-valuemin={0}
              aria-valuemax={subscription.visitsPerYear}
              aria-label={`${subscription.visitsUsed} of ${subscription.visitsPerYear} visits used`}
            />
          </div>
          <p className="dashboard__visits-remaining">
            {remaining}{" "}
            {remaining === 1
              ? t("visit remaining this year")
              : t("visits remaining this year")}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Welcome Home CTA ─────────────────────────────────────────────────────────
// Answers: "Do I need to do anything?" → encourage arrival notification

const WelcomeHomeCTA = () => {
  const { t } = useTranslation();
  const waText = encodeURIComponent(
    "Hello Amani, I am planning to visit my property and would like you to prepare it for my arrival."
  );

  return (
    <div className="dashboard__welcome-home">
      <div className="dashboard__welcome-home-icon">
        <HomeIcon />
      </div>
      <div className="dashboard__welcome-home-content">
        <h3 className="dashboard__welcome-home-title">
          {t("Planning your next visit?")}
        </h3>
        <p className="dashboard__welcome-home-desc">
          {t("Let us know and we will prepare your home before you arrive.")}
        </p>
      </div>
      <a
        href={`https://wa.me/33670779256?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="dashboard__welcome-home-btn"
      >
        {t("Notify my arrival")}
      </a>
    </div>
  );
};

// ─── Activity Section ─────────────────────────────────────────────────────────

const ActivitySection = ({ activity }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard__activity">
      <h3 className="dashboard__section-title">{t("Recent activity")}</h3>
      {activity && activity.length > 0 ? (
        <ul className="dashboard__activity-list">
          {activity.map((item) => (
            <li key={item.id} className="dashboard__activity-item">
              <span className="dashboard__activity-label">{item.label}</span>
              <div className="dashboard__activity-right">
                <span className="dashboard__activity-date">
                  {formatDate(item.date)}
                </span>
                <PortalBadge status={item.status} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="dashboard__empty">{t("No recent activity yet.")}</p>
      )}
    </div>
  );
};

// ─── Assistance CTA ───────────────────────────────────────────────────────────

const AssistanceCTA = () => {
  const { t } = useTranslation();
  const waText = encodeURIComponent(
    "Hello Amani, I need assistance regarding my property."
  );

  return (
    <div className="dashboard__assistance">
      <div className="dashboard__assistance-text">
        <h3 className="dashboard__assistance-title">{t("Need assistance?")}</h3>
        <p className="dashboard__assistance-desc">
          {t(
            "Our team is available to answer any questions about your property or your plan."
          )}
        </p>
      </div>
      <div className="dashboard__assistance-actions">
        <a
          href={`https://wa.me/33670779256?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="dashboard__assistance-btn dashboard__assistance-btn--whatsapp"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href="mailto:contact@amani-services.com?subject=Assistance%20request"
          className="dashboard__assistance-btn dashboard__assistance-btn--email"
        >
          <EmailIcon />
          {t("Send an email")}
        </a>
      </div>
    </div>
  );
};

// ─── Dashboard (main page) ────────────────────────────────────────────────────

const Dashboard = () => {
  const { user } = useAuth();

  // Replace with: const { data, isLoading, error } = useClientData()
  const data = mockClientData;

  return (
    <div className="dashboard">
      {/* 1. Reassurance hero — "Is my property okay?" */}
      <StatusHero
        user={user}
        property={data.property}
        nextVisit={data.nextVisit}
      />

      {/* 2. Primary info — "What happened / what's coming?" */}
      <div className="dashboard__primary-grid">
        <NextServiceCard visit={data.nextVisit} />
        <LatestReportCard report={data.latestReport} />
      </div>

      {/* 3. Secondary context */}
      <div className="dashboard__secondary-grid">
        <KeyStatusCard keyStatus={data.keyStatus} />
        <SeasonalCareCard seasonalCare={data.seasonalCare} />
        <SubscriptionCard subscription={data.subscription} />
      </div>

      {/* 4. Action CTA — "Do I need to do anything?" */}
      <WelcomeHomeCTA />

      {/* 5. History + support */}
      <ActivitySection activity={data.recentActivity} />
      <AssistanceCTA />
    </div>
  );
};

export default Dashboard;
