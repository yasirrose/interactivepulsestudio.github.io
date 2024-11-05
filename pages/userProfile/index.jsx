import React, { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import { IoCheckmarkCircleOutline, IoPersonOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';

const UserProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="main-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`main-content ${collapsed ? 'collapsed' : ''}`}>
          <Header />
          <div
            className="app-main flex-column flex-row-fluid "
            id="kt_app_main"
          >
            <div className="content-section d-flex flex-column flex-column-fluid">
              <div
                id="kt_app_content"
                className="app-content  flex-column-fluid "
              >
                <div
                  id="kt_app_content_container"
                  className="app-container  container-fluid "
                >
                  <div className="card mb-5 mb-xl-10">
                    <div className="card-body pt-9 pb-0">
                      <div className="d-flex flex-wrap flex-sm-nowrap">
                        <div className="me-7 mb-4">
                          <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img src="./user-image.jpg" alt="User Image" />
                            <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div className="d-flex flex-column">
                              <div className="d-flex align-items-center mb-2">
                                <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
                                  Max Smith
                                </a>
                                <a href="#" className="check-icon">
                                  <IoCheckmarkCircleOutline className="fs-1 text-primary" />
                                </a>
                              </div>
                              <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                  <IoPersonOutline className="fs-4 me-1" /> Developer
                                </a>
                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                  <IoLocationOutline className="fs-4 me-1" /> SF, Bay Area
                                </a>
                                <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                                  <IoMailOutline className="fs-4 me-1" /> max@kt.com
                                </a>
                              </div>
                            </div>
                            <div className="d-flex my-4">
                              <a href="#" className="btn btn-sm btn-light me-2">
                                Follow
                              </a>
                              <a href="#" className="btn btn-sm btn-primary me-3">
                                Hire Me
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-5 mb-xl-10">
                    <div className="card-header cursor-pointer">
                      <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
                      </div>
                      <a
                        href="/editProfile"
                        className="btn btn-sm btn-primary align-self-center"
                      >
                        Edit Profile
                      </a>
                    </div>
                    <div className="card-body p-9">
                      <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">
                          Full Name
                        </label>
                        <div className="col-lg-8">
                          <span className="fw-bold fs-6 text-gray-800">
                            Max Smith
                          </span>
                        </div>
                      </div>
                      <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">
                          Company
                        </label>
                        <div className="col-lg-8 fv-row">
                          <span className="fw-semibold text-gray-800 fs-6">
                            Keenthemes
                          </span>
                        </div>
                      </div>
                      <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">
                          Contact Phone
                        </label>
                        <div className="col-lg-8 d-flex align-items-center">
                          <span className="fw-bold fs-6 text-gray-800 me-2">
                            044 3276 454 935
                          </span>
                          <span className="badge badge-success">Verified</span>
                        </div>
                      </div>
                      <div className="row mb-7">
                        <label className="col-lg-4 fw-semibold text-muted">
                          Company Site
                        </label>
                        <div className="col-lg-8">
                          <a
                            href="#"
                            className="fw-semibold fs-6 text-gray-800 text-hover-primary"
                          >
                            keenthemes.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
