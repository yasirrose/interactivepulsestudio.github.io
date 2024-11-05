import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import AddUserModal from '../../components/Shared/AddUserModal'; // New Modal Component
import DataTable from 'react-data-table-component';
import { FaChevronDown, FaSearch, FaPlus, FaFileExport } from 'react-icons/fa';
import styles from './clientUsers.module.scss';
import Link from 'next/link';

const ClientUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'password123',
          phone: '+1 234 567 8901',
          active: true,
          deleted: false,
          userType: 'Admin',
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
        {
          id: 3,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
        {
          id: 4,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
        {
          id: 5,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
        {
          id: 6,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
        {
          id: 7,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '+1 098 765 4321',
          active: false,
          deleted: false,
          userType: 'User',
        },
      ];
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      name: 'User First Name',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'User Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'User Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'User Password',
      selector: row => row.password,
      sortable: true,
    },
    {
      name: 'User Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'User Active',
      selector: row => (row.active ? 'Yes' : 'No'),
      sortable: true,
    },
    {
      name: 'User Deleted',
      selector: row => (row.deleted ? 'Yes' : 'No'),
      sortable: true,
    },
    {
      name: 'User Type',
      selector: row => row.userType,
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
            <button className={styles.viewButton} onClick={() => handleNavigation(`/userProfile?id=${row.user_id}&isEditProfile=false`, row.user_id)}>View Profile</button>
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
                      Client Users
                    </h1>
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                      <li className="breadcrumb-item text-muted">
                        <Link href="/" className="text-muted text-hover-primary">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <span className="bullet bg-gray-500 w-5px h-2px"></span>
                      </li>
                      <li className="breadcrumb-item text-muted">Client Users</li>
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
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                        <FaPlus className="me-1" /> Add New
                      </button>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <DataTable
                      columns={columns}
                      data={users}
                      paginationPerPage={5}
                      pagination
                      highlightOnHover
                      responsive
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AddUserModal />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientUsers;
