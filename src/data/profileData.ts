"use client"

export const profileData = {
    banner: "Resident Profile - Elene E. Doyle",
    profile: {
      name: "Elene E. Doyle",
      room: "Unassigned",
      age: 82,
      photo: "/images/elene.jpg",
    },
    medicalInfo: {
      allergies: "Peanuts",
      conditions: "Asthma",
      medications: "Inhaler",
    },
    familyContacts: [
      { name: "Jane Doyle", relation: "Daughter", phone: "123-456-7890" },
      { name: "Michael Doyle", relation: "Son", phone: "987-654-3210" },
    ],
    documents: [
      { name: "ID Document", url: "/docs/id.pdf" },
      { name: "Medical Report", url: "/docs/report.pdf" },
    ],
    incidents: [
      { date: "2025-01-12", type: "Fall", notes: "Slipped in the hallway." },
      { date: "2025-02-04", type: "Complaint", notes: "Meal was too cold." },
    ],
  }
  