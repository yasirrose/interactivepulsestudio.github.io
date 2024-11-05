import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import DataTable from 'react-data-table-component';
import AddAdminModal from '../../components/Shared/AddAdminModal';
import { FaChevronDown, FaSearch, FaPlus, FaFileExport } from 'react-icons/fa';

const AdminUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    const fetchAdminUsers = async () => {
      const data = [
        {
          id: 1,
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          password: 'admin123',
          phone: '+1 234 567 8901',
          active: true,
          deleted: false,
          userType: 'Super Admin',
        },
        {
          id: 2,
          firstName: 'Bob',
          lastName: 'Williams',
          email: 'bob.williams@example.com',
          password: 'admin456',
          phone: '+1 987 654 3210',
          active: false,
          deleted: false,
          userType: 'Admin',
        },
      ];
      setAdminUsers(data);
    };
    fetchAdminUsers();
  }, []);

  const columns = [
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Password', selector: row => row.password, sortable: true },
    { name: 'Phone', selector: row => row.phone, sortable: true },
    { name: 'Active', selector: row => (row.active ? 'Yes' : 'No'), sortable: true },
    { name: 'Deleted', selector: row => (row.deleted ? 'Yes' : 'No'), sortable: true },
    { name: 'User Type', selector: row => row.userType, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <div className="dropdown-container">
          <button className="dropdown-button">Actions</button>
          <div className="dropdown-content">
            <div onClick={() => handleEditUser(row)}>Edit</div>
            <div onClick={() => handleDeleteUser(row.id)}>Delete</div>
            <div onClick={() => handleDeactivateUser(row.id)}>
              {row.active ? 'Deactivate' : 'Activate'}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleEditUser = user => console.log('Edit admin user:', user);
  const handleDeleteUser = id => console.log('Delete admin user with id:', id);
  const handleDeactivateUser = id => console.log('Toggle status for admin user with id:', id);
  const [collapsed, setCollapsed] = useState(false);
  return (
      <div className="main-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`main-content ${collapsed ? 'collapsed' : ''}`}>
          <Header />
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" className="app-content flex-column-fluid">
              <div id="kt_app_content_container" className="app-container container-fluid">
                <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                  <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                    <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                      Admin Users
                    </h1>
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
                      <button className="btn btn-primary">
                        <FaPlus className="me-1" /> Add New Admin User
                      </button>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <DataTable
                      columns={columns}
                      data={adminUsers}
                      pagination
                      highlightOnHover
                      responsive
                    />
                  </div>
                </div>

                <AddAdminModal />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
