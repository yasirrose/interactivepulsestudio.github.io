"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CgMenuRightAlt } from "react-icons/cg";
import { IoSpeedometerOutline, IoPersonOutline, IoPeopleOutline, IoBriefcaseOutline, IoCalendarOutline, IoLogOutOutline } from 'react-icons/io5';
import styles from "./Sidebar.module.scss";
import Link from 'next/link';

const Sidebar = ({ collapsed, setCollapsed }) => {
    const router = useRouter();
    const { pathname } = router;

    const isActive = (href) => pathname === href ? styles.active : '';

    const handleNavigation = (path) => router.push(path);

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Link href="#" className={styles.appSidebarLogo}>
                        <div className={styles.iplogoOuter}>
                            <div className={styles.iplogoInner}>
                                <div className={styles.iplogoWhitetopleft}><div className={styles.tlball}></div></div>
                                <div className={styles.iplogoTopright}></div>
                                <div className={styles.clear}></div>
                                <div className={styles.iplogoMiddleleft}></div>
                                <div className={styles.iplogoMiddleright}></div>
                                <div className={styles.clear}></div>
                                <div className={styles.iplogoBottomleft}></div>
                            </div>
                        </div>
                    </Link>
                </div>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`${styles.sidebarToggle} ${collapsed ? styles.collapsed : ''} btn btn-sm btn-icon bg-light btn-color-gray-700 btn-active-color-primary`}
                >
                    <CgMenuRightAlt
                        className={`${styles.Icon} ${collapsed ? styles.IconRotated : ''}`}
                    />
                </button>
            </div>

            <div className={styles.menuContainer}>
                <ul className={styles.menuItems}>
                    <li className={`${styles.menuItem} ${isActive('/')}`} onClick={() => handleNavigation('/')}>
                        <IoSpeedometerOutline className={styles.icon} /> {!collapsed && 'Dashboard'}
                    </li>
                    <li className={`${styles.menuItem} ${isActive('/clientUsers')}`} onClick={() => handleNavigation('/clientUsers')}>
                        <IoPeopleOutline className={styles.icon} /> {!collapsed && 'Client Users'}
                    </li>
                    <li className={`${styles.menuItem} ${isActive('/client')}`} onClick={() => handleNavigation('/client')}>
                        <IoPersonOutline className={styles.icon} /> {!collapsed && 'Client'}
                    </li>
                    <li className={`${styles.menuItem} ${isActive('/clientProjects')}`} onClick={() => handleNavigation('/clientProjects')}>
                        <IoBriefcaseOutline className={styles.icon} /> {!collapsed && 'Client Projects'}
                    </li>
                    <li className={`${styles.menuItem} ${isActive('/scheduledtasks')}`} onClick={() => handleNavigation('/scheduledtasks')}>
                        <IoCalendarOutline className={styles.icon} /> {!collapsed && 'Scheduled Tasks'}
                    </li>
                    <li className={styles.menuItem} onClick={() => handleNavigation('/auth')}>
                        <IoLogOutOutline className={styles.icon} /> {!collapsed && 'Logout'}
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
