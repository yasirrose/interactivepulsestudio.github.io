// pages/calendar/CalendarPage.jsx
import React, { useState } from 'react';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

import AddEventModal from "../../components/Shared/AddEventModal"; 
import { FaChevronDown, FaSearch, FaPlus, FaFileExport } from 'react-icons/fa';

export default function CalendarPage() {
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Handlers for modal toggling
  const handleAddEventModalToggle = () => {
    setShowAddEventModal(!showAddEventModal);
  };

  // Handle form submission
  const handleEventSubmit = (eventData) => {
    console.log("Event Data:", eventData);
    // Perform any further actions like calling API to save the event
  };
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
