// src/portal/data/mockClientData.js
// ---------------------------------------------------------------------------
// Realistic mock data shaped like future API responses.
// Each top-level key maps to a future API endpoint:
//   property    → GET /api/client/properties/:id
//   subscription → GET /api/client/subscription
//   latestReport → GET /api/client/reports?limit=1&sort=desc
//   nextVisit   → GET /api/client/visits?status=scheduled&limit=1
//   recentActivity → GET /api/client/activity?limit=5
// ---------------------------------------------------------------------------

export const mockClientData = {
  property: {
    id: "p-001",
    name: "Villa Anfa",
    address: "Quartier Anfa, Casablanca",
    city: "Casablanca",
    country: "Morocco",
    type: "Villa",
    status: "active", // active | attention | inactive
    lastCheckedDate: "2025-03-15",
    imageUrl: null,
  },

  subscription: {
    id: "sub-001",
    plan: "Silver",
    status: "active", // active | pending | expired
    startDate: "2025-03-01",
    renewalDate: "2025-06-01",
    visitsPerYear: 4,
    visitsUsed: 1,
    priceMonthly: 59,
    currency: "€",
  },

  latestReport: {
    id: "r-001",
    visitDate: "2025-03-15",
    type: "Home Check",
    status: "completed",
    summary:
      "Your property is in excellent condition. All systems were verified — doors, windows, plumbing, and electricity. No anomalies were found. The property is clean, secure, and ready for your return.",
    photosCount: 12,
    downloadUrl: null, // Will be a signed PDF URL in production
  },

  nextVisit: {
    id: "v-002",
    scheduledDate: "2025-06-10",
    type: "Home Check",
    status: "scheduled", // scheduled | confirmed | completed | cancelled
    assignedOperator: "Amani Team",
    timeSlot: "Morning (09:00 – 12:00)",
  },

  keyStatus: {
    status: "stored",           // stored | in_use | returned
    location: "Amani secure office",
    lastUpdated: "2025-02-28",
  },

  seasonalCare: {
    lastDate: "2024-10-15",
    nextPlannedDate: "2025-05-01",
    status: "scheduled",        // scheduled | completed | not_scheduled
  },

  recentActivity: [
    {
      id: "a-001",
      date: "2025-03-15",
      label: "Home Check completed — Villa Anfa",
      status: "completed",
    },
    {
      id: "a-002",
      date: "2025-03-01",
      label: "Silver plan activated",
      status: "active",
    },
    {
      id: "a-003",
      date: "2025-02-28",
      label: "Key handover confirmed with operator",
      status: "completed",
    },
  ],
};
