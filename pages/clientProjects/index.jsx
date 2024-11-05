import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import DataTable from 'react-data-table-component';
import AddProjectModal from '../../components/Shared/AddProjectModal'; 
import { FaChevronDown, FaSearch, FaPlus, FaFileExport } from 'react-icons/fa';
import styles from './clientProjects.module.scss';

const ClientProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the list of client projects (dummy data)
    const fetchProjects = async () => {
      const data = [
        {
          id: 1,
          name: 'Project Alpha',
          asanaClientId: '123-abc',
          asanaClientSecret: 'secret123',
          asanaProjectName: 'Alpha Asana Project',
          active: true,
          deleted: false,
        },
        {
          id: 2,
          name: 'Project Beta',
          asanaClientId: '456-def',
          asanaClientSecret: 'secret456',
          asanaProjectName: 'Beta Asana Project',
          active: false,
          deleted: false,
        },
        // More projects here...
      ];
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const columns = [
    {
      name: 'Project Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Asana API Client ID',
      selector: row => row.asanaClientId,
      sortable: true,
    },
    {
      name: 'Asana API Client Secret',
      selector: row => row.asanaClientSecret,
      sortable: true,
    },
    {
      name: 'Asana Project Name',
      selector: row => row.asanaProjectName,
      sortable: true,
    },
    {
      name: 'Project Active',
      selector: row => (row.active ? 'Yes' : 'No'),
      sortable: true,
    },
    {
      name: 'Project Deleted',
      selector: row => (row.deleted ? 'Yes' : 'No'),
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

  // Handler functions
  const handleEditProject = (project) => {
    // Handle the project edit logic
    console.log('Edit project:', project);
  };

  const handleDeleteProject = (id) => {
    // Handle the project delete logic
    console.log('Delete project with id:', id);
  };

  const handleDeactivateProject = (id) => {
    // Handle the project deactivate/activate logic
    console.log('Toggle status for project with id:', id);
  };
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
                      Client Projects
                    </h1>
                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                      <li className="breadcrumb-item text-muted">
                        <a href="/" className="text-muted text-hover-primary">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <span className="bullet bg-gray-500 w-5px h-2px"></span>
                      </li>
                      <li className="breadcrumb-item text-muted">Client Projects</li>
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
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_project">
                        <FaPlus className="me-1" /> Add New Projects
                      </button>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <DataTable
                      columns={columns}
                      data={projects}
                      pagination
                      highlightOnHover
                      responsive
                    />
                  </div>
                </div>

                
              </div>
            </div>
          </div>
          <AddProjectModal />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;
