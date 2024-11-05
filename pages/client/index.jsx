import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import AddCustomerModal from '../../components/Shared/AddCustomerModal';
import DataTable from 'react-data-table-component';
import { FaChevronDown, FaSearch, FaPlus, FaFileExport } from 'react-icons/fa';
import styles from './client.module.scss';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = [
        {
          id: 1,
          name: 'Brandspec',
          contact: 'John Smith',
          email: 'email@email.com',
          phone: '+64 21 111 1111',
          quickAccessPin: '1234',
          active: true,
          defaultPinPage: 'Dashboard',
          deleted: false,
        },
        {
          id: 2,
          name: 'Acme Corp',
          contact: 'Jane Doe',
          email: 'jane.doe@acme.com',
          phone: '+44 20 1234 5678',
          quickAccessPin: '5678',
          active: false,
          defaultPinPage: 'Reports',
          deleted: false,
        },
        // Add more clients here
      ];
      setClients(data);
    };
    fetchClients();
  }, []);

  const columns = [
    {
      name: 'Client Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Client Main Contact',
      selector: row => row.contact,
      sortable: true,
    },
    {
      name: 'Client Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Client Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Client Quick Access Pin',
      selector: row => row.quickAccessPin,
      sortable: true,
    },
    {
      name: 'Client Active',
      selector: row => (
        <span className={`badge ${row.active ? 'badge-light-success' : 'badge-light-danger'}`}>
          {row.active ? 'Active' : 'Inactive'}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Client Default Pin Page',
      selector: row => row.defaultPinPage,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            Actions <FaChevronDown className={styles.dropdownIcon} /> 
          </button>
          <div className={styles.dropdownContent}>
            <button className={styles.viewButton} onClick={() => handleNavigation(`/userProfile?id=${row.user_id}&isEditProfile=true`, row.user_id)}>Edit Profile</button>
            <button className={styles.deleteButton} onClick={() => deleteUser(row.user_id, setUsers)}>Delete</button>
            <button
              className={row.user_active ? styles.deactivateButton : styles.activateButton}
              onClick={() => activateDeactivateUser(row.user_id, row.user_active ? 0 : 1, setUsers)}
            >
              {row.user_active ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        </div>
      ),
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (
      <div className="main-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`main-content ${collapsed ? 'collapsed' : ''}`}>
          <Header />
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          <div className="content-section d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" className="app-content flex-column-fluid">
              <div id="kt_app_content_container" className="app-container container-fluid">
                <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                  <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                    <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                      Clients
                    </h1>
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                      <li className="breadcrumb-item text-muted">
                        <a href="/" className="text-muted text-hover-primary">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <span className="bullet bg-gray-500 w-5px h-2px"></span>
                      </li>
                      <li className="breadcrumb-item text-muted">Clients</li>
                    </ul>
                  </div>
                </div>
                <div className="card mt-5">
                  <div className="card-header border-0 pt-6">
                    <div className="card-title">
                      <div className="d-flex align-items-center position-relative my-1">
                        <div className="search-field position-relative w-250px">
                          <FaSearch className="position-absolute top-50 start-0 translate-middle-y" />
                          <input
                            type="text"
                            placeholder="Search Users"
                            className="form-control form-control-solid ps-5"
                            onChange={e => console.log(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-toolbar d-flex gap-3">
                      <button className="btn btn-light-primary">
                        <FaFileExport className="me-1" /> Export
                      </button>
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">
                        <FaPlus className="me-1" /> Add New
                      </button>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <DataTable
                      columns={columns}
                      data={clients}
                      pagination
                      highlightOnHover
                      responsive
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AddCustomerModal />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Clients;
