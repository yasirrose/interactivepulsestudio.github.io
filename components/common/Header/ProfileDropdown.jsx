"use client";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter
import styles from "./header.module.scss";
import Link from 'next/link';
const ProfileDropdown = () => {
  const router = useRouter(); // Initialize the router
  
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.dropdown}>
      <button className={`${styles.DropdownBtn} focus:outline-none`}>
        <Image
          src="/profile-icon.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </button>
      <div className={styles.dropdownMenu}>
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-0 mb-2">
            <div className="symbol symbol-50px me-5">
              <Image
                src="/profile-icon.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold d-flex align-items-center fs-5">
                Max Smith
                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                  Pro
                </span>
              </div>
              <Link href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                max@kt.com
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.dropdownMenuList}>
          <button onClick={() => handleNavigation('/userProfile')} className={styles.dropdownLink}>
            My Profile
          </button>
          <button onClick={() => handleNavigation('/auth')} className={styles.dropdownLink}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
