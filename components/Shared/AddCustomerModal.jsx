// components/AddCustomerModal.js

import React from 'react';

const AddCustomerModal = () => {
  return (
    <div className="modal fade" id="kt_modal_add_customer" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered mw-650px">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Customer</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body py-10 px-lg-17">
            <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_customer_header" data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="600px" style={{ maxHeight: '505px' }}>
              <div className="fv-row mb-7 fv-plugins-icon-container">
                <label className="required fs-6 fw-semibold mb-2">Name</label>
                <input type="text" className="form-control form-control-solid" placeholder="" name="name" defaultValue="Sean Bean" />
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
              </div>
              <div className="fv-row mb-7 fv-plugins-icon-container">
                <label className="fs-6 fw-semibold mb-2">
                  <span className="required">Email</span>
                  <span className="ms-1" data-bs-toggle="tooltip" aria-label="Email address must be active" data-bs-original-title="Email address must be active">
                    <i className="ki-outline ki-information fs-7"></i>
                  </span>
                </label>
                <input type="email" className="form-control form-control-solid" placeholder="" name="email" defaultValue="sean@dellito.com" />
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
              </div>
              <div className="fv-row mb-15">
                <label className="fs-6 fw-semibold mb-2">Description</label>
                <textarea type="text" className="form-control form-control-solid" placeholder="" name="description" />
              </div>
              <div className="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse" href="#kt_modal_add_customer_billing_info" role="button" aria-expanded="false" aria-controls="kt_customer_view_details">
                Shipping Information 
                <span className="ms-2 rotate-180">
                  <i className="ki-outline ki-down fs-3"></i>
                </span>
              </div>
              <div id="kt_modal_add_customer_billing_info" className="collapse show">
                <div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
                  <label className="required fs-6 fw-semibold mb-2">Address Line 1</label>
                  <input className="form-control form-control-solid" placeholder="" name="address1" defaultValue="101, Collins Street" />
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="fs-6 fw-semibold mb-2">Address Line 2</label>
                  <input className="form-control form-control-solid" placeholder="" name="address2" defaultValue="" />
                </div>
                <div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
                  <label className="required fs-6 fw-semibold mb-2">Town</label>
                  <input className="form-control form-control-solid" placeholder="" name="city" defaultValue="Melbourne" />
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>
                <div className="row g-9 mb-7">
                  <div className="col-md-6 fv-row fv-plugins-icon-container">
                    <label className="required fs-6 fw-semibold mb-2">State / Province</label>
                    <input className="form-control form-control-solid" placeholder="" name="state" defaultValue="Victoria" />
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                  </div>
                  <div className="col-md-6 fv-row fv-plugins-icon-container">
                    <label className="required fs-6 fw-semibold mb-2">Post Code</label>
                    <input className="form-control form-control-solid" placeholder="" name="postcode" defaultValue="3000" />
                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                  </div>
                </div>
                <div className="d-flex flex-column mb-7 fv-row fv-plugins-icon-container">
                  <label className="fs-6 fw-semibold mb-2">
                    <span className="required">Country</span>
                    <span className="ms-1" data-bs-toggle="tooltip" aria-label="Country of origination" data-bs-original-title="Country of origination">
                      <i className="ki-outline ki-information fs-7"></i>
                    </span>
                  </label>
                  <select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a Country..." className="form-select form-select-solid fw-bold">
                    <option value="">Select a Country...</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>
                <div className="fv-row mb-7">
                  <div className="d-flex flex-stack">
                    <div className="me-5">
                      <label className="fs-6 fw-semibold">Use as a billing address?</label>
                      <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                    </div>
                    <label className="form-check form-switch form-check-custom form-check-solid">
                      <input className="form-check-input" name="billing" type="checkbox" value="1" id="kt_modal_add_customer_billing" defaultChecked />
                      <span className="form-check-label fw-semibold text-muted" htmlFor="kt_modal_add_customer_billing">Yes</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
