import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { AppContext } from "../../Context/Context";
import { navLinks } from "../../Data/Data";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const { sideBar, setSideBar } = useContext(AppContext);

  const linkClick = () => {
    setSideBar(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={sideBar ? styles.sidebarActive : styles.sidebarWrapper}>
      {sideBar ? (
        <i onClick={() => setSideBar(!sideBar)} className="fas fa-times"></i>
      ) : (
        <i onClick={() => setSideBar(!sideBar)} className="fas fa-bars"></i>
      )}

      <div className={styles.sideBarLinks}>
        {sideBar
          ? navLinks.map((data, index) => {
              const { page, url } = data;
              return (
                <Link key={index} onClick={linkClick} to={url}>
                  {page}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Sidebar;
