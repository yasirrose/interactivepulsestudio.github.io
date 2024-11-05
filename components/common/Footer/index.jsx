import React from 'react'

const Footer = () => {
    return (
      <div className="app-footer">
        <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
          <div className="text-gray-900 order-2 order-md-1">
            <span className="text-muted fw-semibold me-1">2024©</span>
            <a href="https://www.interactivepulse.co.nz/" target="_blank" className="text-gray-800 text-hover-primary">Interative Pulse</a>
          </div>
          <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
            <li className="menu-item"><a href="#" target="_blank" className="menu-link px-2">About</a></li>
            <li className="menu-item"><a href="#" target="_blank" className="menu-link px-2">Support</a></li>
            <li className="menu-item"><a href="#" target="_blank" className="menu-link px-2">Purchase</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Footer;
