// components/Shared/AddProjectModal.jsx
import React, { useState } from 'react';

export default function AddProjectModal() {
  const [projectData, setProjectData] = useState({
    name: '',
    clientName: '',
    status: 'Active',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Data:', projectData);
    // Call API to save the project or update state
  };

  return (
    <div className="modal fade" id="kt_modal_add_project" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered mw-650px">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h2 className="fw-bold">Add Project</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Project Name */}
              <div className="form-group mb-9">
                <label className="fs-6 fw-semibold required">Project Name</label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  value={projectData.name}
                  onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                  required
                />
              </div>
              {/* Client Name */}
              <div className="form-group mb-9">
                <label className="fs-6 fw-semibold required">Client Name</label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  value={projectData.clientName}
                  onChange={(e) => setProjectData({ ...projectData, clientName: e.target.value })}
                  required
                />
              </div>
              {/* Status */}
              <div className="form-group mb-9">
                <label className="fs-6 fw-semibold required">Status</label>
                <select
                  className="form-select form-control-solid"
                  value={projectData.status}
                  onChange={(e) => setProjectData({ ...projectData, status: e.target.value })}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              {/* Start Date */}
              <div className="form-group mb-9">
                <label className="fs-6 fw-semibold required">Start Date</label>
                <input
                  type="date"
                  className="form-control form-control-solid"
                  value={projectData.startDate}
                  onChange={(e) => setProjectData({ ...projectData, startDate: e.target.value })}
                  required
                />
              </div>
              {/* End Date */}
              <div className="form-group mb-9">
                <label className="fs-6 fw-semibold required">End Date</label>
                <input
                  type="date"
                  className="form-control form-control-solid"
                  value={projectData.endDate}
                  onChange={(e) => setProjectData({ ...projectData, endDate: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="reset" className="btn btn-light" data-bs-dismiss="modal">Discard</button> <button type="submit" className="btn btn-primary">Save Project</button> 
            </div> 
        </form> 
    </div> 
</div> 
</div> 
); }
