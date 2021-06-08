import React, { useEffect, useContext } from "react";
import Staff from "./Staff";
import styles from "./StaffPage.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/Context";

const StaffPage = () => {
  const { loading, loadingFunction } = useContext(AppContext);
  useEffect(() => {
    loadingFunction();
  }, []);
  return (
    <div>
      <div className={styles.topImage}>
        <h1>PERSONAL</h1>
      </div>
      <Staff />
    </div>
  );
};

export default StaffPage;
