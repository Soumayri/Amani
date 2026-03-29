// src/portal/components/PortalBadge.js

const STATUS_LABELS = {
  active: "Active",
  scheduled: "Scheduled",
  completed: "Completed",
  attention: "Attention needed",
  inactive: "Inactive",
  pending: "Pending",
  expired: "Expired",
  confirmed: "Confirmed",
  cancelled: "Cancelled",
  processing: "Processing",
};

/**
 * Reusable status badge.
 * @param {string} status - One of the STATUS_LABELS keys (drives color + label)
 * @param {string} [label]  - Overrides the default label if provided
 */
const PortalBadge = ({ status, label }) => {
  const displayLabel = label || STATUS_LABELS[status] || status;

  return (
    <span
      className={`portal-badge portal-badge--${status}`}
      aria-label={`Status: ${displayLabel}`}
    >
      {displayLabel}
    </span>
  );
};

export default PortalBadge;
