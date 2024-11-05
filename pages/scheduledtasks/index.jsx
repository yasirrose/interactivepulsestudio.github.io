// pages/calendar/CalendarPage.jsx
import React, { useState } from 'react';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

export default function CalendarPage() {
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  return (
      <div className="main-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`main-content ${collapsed ? 'collapsed' : ''}`}>
          <Header />

        <Footer />
      </div>
    </div>
  );
}
